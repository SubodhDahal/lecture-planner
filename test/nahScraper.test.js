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
            expect(suggestions).toContain('Kiel Hauptbahnhof')
        })
        .catch(e => {
            expect(e).toMatch('error')
        })
})
