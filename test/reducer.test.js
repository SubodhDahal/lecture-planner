import reducer from '../src/app/store/reducer'
import {
    SET_TITLE,
    SET_SOURCE_ADDRESS,
    SET_DESTINATION_ADDRESS,
    SET_LOCATION_SUGGESTIONS,
    SET_USER_ID,
    SET_UNIVERSITIES,
    SET_TRAVEL_ROUTES,
} from '../src/app/store/action-types'

/**
 * Helper for getting state after applying the reducer
 * @param  {String|Constant} type
 * @param  {String|Object|Array} payload
 * @return {Object}
 */
const getState = (type, payload) => {
    const action = {
        type: type,
        payload: payload
    }

    return reducer(undefined, action)
}

test('Sets page title', () => {
    const title = 'Awesome Page!'
    const state = getState(SET_TITLE, title)

    expect(state.title).toBe(title)
})

test('Sets source address', () => {
    const address = 'Kiel Steenbeker Weg'
    const state = getState(SET_SOURCE_ADDRESS, address)

    expect(state.address.source).toBe(address)
})

test('Sets destination address', () => {
    const address = 'Kiel Fachhochschule'
    const state = getState(SET_DESTINATION_ADDRESS, address)

    expect(state.address.destination).toBe(address)
})

test('Sets user id', () => {
    const userId = '5b79471d6cf09b2553ac36fc'
    const state = getState(SET_USER_ID, userId)

    expect(state.userId).toBe(userId)
})

test('Sets universities', () => {
    const universities = {
        'Kiel Fachhochschule': 'Fachhochschule Kiel',
        'Kiel Universität': 'Christian Albrechts University, Kiel',
        'Kiel, Post, Knooper Weg': 'Muthesius Kunsthochschule, Kiel'
    }
    const state = getState(SET_UNIVERSITIES, universities)

    expect(state.universities).toEqual(universities)
})

test('Sets location suggestions', () => {
    const suggestions = [
        {value: 'Kiel Hbf'},
        {value: 'Kiel Hauptbahnhof'},
        {value: 'Kiel HDW'},
        {value: 'Kiel IPN'}
    ]

    const state = getState(SET_LOCATION_SUGGESTIONS, suggestions)

    expect(state.locationSuggestions).toEqual(suggestions)
})

test('Sets travel routes', () => {
    const travelRoutes = [
        {
            from: {
                name: 'Kiel Hauptbahnhof',
                time: '09:13',
                date: '17.08.2018'
            },
            to: {
                name: 'Kiel Fachhochschule',
                time: '09:34',
                date: '17.08.2018'
            },
            stops: [
            {
                from: {
                    name: 'Kiel Hauptbahnhof',
                    time: '09:13',
                    date: '17.08.2018'
                },
                to: {
                    name: 'Kiel Fachhochschule',
                    time: '09:34',
                    date: '17.08.2018'
                },
                vehicle: 'Bus 11',
                direction: 'Kiel Pillauer Straße'
            }
            ]
        }
    ]

    const state = getState(SET_TRAVEL_ROUTES, travelRoutes)

    expect(state.travelRoutes).toEqual(travelRoutes)
})
