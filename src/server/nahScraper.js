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
                    this.sendResponse(err)
                })
    }

    /**
     * Get the route plan
     */
    getRoutePlan () {
        return new Promise((resolve, reject) => {
            this.initalizeScraper(URL)
                .then(res => {
                    resolve(this.securityId)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}

let nahScraper = new NahScraper()
export default nahScraper
