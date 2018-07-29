import nahScraper from '../src/server/nahScraper'

test('Gets the security ID for the session', () => {
    expect.assertions(1)
    return nahScraper.initalizeScraper('http://www.nah.sh/')
        .then(res => {
            expect(nahScraper.securityId).toHaveLength(40)
        })
        .catch(e => {
            expect(e).toMatch('error')
        })
})
