import rp from 'request-promise-native'
import cheerio from 'cheerio'
import moment from 'moment'
import he from 'he'

const URL = 'http://www.nah.sh/'

/**
 * Scrape data from the nah.sh website
 */
class NahScraper {
    /**
     * The constructor
     */
    constructor () {
        this.$ = null   // For DOM manipulation using cheerio
    }

    /**
     * Get the Security ID from the page
     * @return {String}
     */
    get securityId () {
        return this.$('#Form_TimeTableForm_SecurityID').val()
    }

    /**
     * Initialize the scraper
     * @param  {String} url
     * @param  {Boolean} doTransform
     * @return {Promise}
     */
    initalizeScraper (url, doTransform = true) {
        var options = {
            uri: url,
            transform: (body) => {
                return doTransform ? cheerio.load(body) : body;
            }
        }

        return rp(options)
                .then(($) => {
                    this.$ = $
                })
                .catch((err) => {
                    return Promise.reject(err)
                })
    }

    /**
     * Get the route plan
     * @param  {String} from
     * @param  {String} destination
     * @param  {String} dateIso
     * @param  {String} time
     * @return {Promise}
     */
    getRoutePlan (from, destination, dateIso, time) {
        let encodeText = (text) => he.escape(text, {decimal: true})
        let encodeTime = (time) => encodeURIComponent(time)

        from = encodeText(from)
        destination = encodeText(destination)
        time = encodeTime(time)

        let dateDe = moment(dateIso).format('DD.MM.YYYY')

        return new Promise((resolve, reject) => {
            this.initalizeScraper(URL)
                .then(res => {
                    let queryUrl = `http://nah.sh.hafas.de/bin/query.exe/dn?url=%2Fhome%2FTimeTableForm&encoding=utf-8&tpl=suggest2json&nojs&S=${from}&REQ0JourneyStopsS0ID=&REQ0JourneyStopsS0A=255&Z=${destination}&REQ0JourneyStopsZ0ID=&REQ0JourneyStopsZ0A=255&Date=${dateDe}&isodate=${dateIso}&isJquery=true&Time=${time}&SecurityID=${this.securityId}&start=Suche`

                    return rp(queryUrl)
                })
                .then((html) => {
                    try {
                        let results = this.getResultsObject(html)

                        resolve(this.parseRouteResults(results))
                    } catch (e) {
                        reject(e.message)
                        return
                    }
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

    /**
     * Get location suggestions based on the keyword
     * @param  {String} keyword
     * @return {JSON}
     */
    locationSuggestions (keyword) {
        let url = `http://nah.sh.hafas.de/bin/ajax-getstop.exe/dny?tpl=suggest2json&encoding=utf-8&start=1&getstop=1&nojs&S=${keyword}?&REQ0JourneyStopsS0A=255&REQ0JourneyStopsB=12`

        return new Promise((resolve, reject) => {
            rp(url)
                .then((res) => {
                    let suggestions = this.parseRouteSuggestions(res)

                    resolve(suggestions)
                })
                .catch((err) => {
                    reject(err.message)
                })
        })
    }

    /**
     * Get the results in a json format
     * @param  {String} html
     * @return {Object}
     */
    getResultsObject (html) {
        let matches = html.match(/hfsGui\.tp\.currentResult = \(([\s\S]*?)(?=\);)/)

        // If the results json couldn't be parsed from the response html
        if (!matches || matches.length < 2) {
            throw Error('Error getting matches from server')
            return
        }

        return JSON.parse(matches[1])
    }

    /**
     * Parse the results of the nah.sh route query
     * @param  {Object} results
     * @return {Array}
     */
    parseRouteResults (results) {
        let parsedResults = []

        /**
         * Get location info from the data
         * @param  {Object} data
         * @return {Object}
         */
        let locationInfo = (data) => {
            return {
                name: data.location.name,
                time: typeof data.arr !== 'undefined' ? data.arr.time : data.dep.time,
                date: typeof data.arr !== 'undefined' ? data.arr.date : data.dep.date,
            }
        }

        for (var connection of results.connections) {
            let locations = {
                from: locationInfo(connection.from),
                to: locationInfo(connection.to)
            }

            let stops = Object.values(connection.sections).map((section, i) => {
                let vehicle = connection.products[i].name.replace(/\s\s+/g, ' ')

                if (vehicle === '') {
                    vehicle = 'Walk'
                }

                return {
                    from: {
                        ...locationInfo(section.from),
                    },
                    to: {
                        ...locationInfo(section.to),
                    },
                    vehicle
                }
            })

            locations.stops = stops
            parsedResults.push(locations)
        }

        return parsedResults
    }

    /**
     * Get only the name of stops from the suggestions
     * @param  {[type]} routes [description]
     * @return {[type]}        [description]
     */
    parseRouteSuggestions (routes) {
        routes = JSON.parse(routes)

        return routes.suggestions.map(suggestion => suggestion.value)
    }
}

let nahScraper = new NahScraper()
export default nahScraper
