import { isAddressSet } from '../src/app/utilities'

describe('Tests if address is set or not', () => {
    test('Address is set', () => {
        const address = {
            source: 'Kiel Steenbeker Weg',
            destination: 'Kiel Fachhochschule'
        }

        expect(isAddressSet(address)).toBe(true)
    })

    test('Address is not set', () => {
        const address = {
            source: '',
            destination: ''
        }

        expect(isAddressSet(address)).toBe(false)
    })
})
