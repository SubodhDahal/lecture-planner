import moment from 'moment'
import nahScraper from '../src/server/nahScraper'

test('Gets the security ID for the session', () => {
    expect.assertions(1)
    return nahScraper.initalizeScraper('http://www.nah.sh/')
        .then(securityId => {
            expect(securityId).toHaveLength(40)
        })
        .catch(e => {
            expect(e).toMatch('error')
        })
})

test('Gets the list of location suggestions for provided keyword', () => {
    expect.assertions(1)
    return nahScraper.locationSuggestions('kiel')
        .then(suggestions => {
            let routeStations = suggestions.map(station => station.value)
            expect(routeStations).toContain('Kiel Hauptbahnhof')
        })
        .catch(e => {
            expect(e).toMatch('error')
        })
})

test('Gets the list of routes', () => {
    expect.assertions(4)

    let from = 'Kiel Steenbeker Weg',
        destination = 'Kiel Fachhochschule',
        date = moment().format('YYYY-MM-DD'),
        time = '10:40'

    return nahScraper.getRoutePlan(from, destination, date, time)
        .then(routes => {
            expect(routes.length).toBeGreaterThan(0)
            expect(routes[0].from.name).toBe(from)
            expect(routes[0].to.name).toBe(destination)
            expect(routes[0].stops.length).toBeGreaterThan(1)
        })
        .catch(e => {
            expect(e).toMatch('error')
        })
})
