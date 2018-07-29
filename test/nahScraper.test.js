import nahScraper from '../src/server/nahScraper'

test('Gets the security ID for the session', () => {
    expect.assertions(1);
    return nahScraper.getRoutePlan()
        .then(res => {
            expect(res).toHaveLength(40)
        })
        .catch(e => {
            expect(e).toMatch('error')
        })
})
