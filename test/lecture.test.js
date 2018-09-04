import reducer from '../src/app/store/reducer'
import {
    SET_LECTURE_DETAILS,
} from '../src/app/store/action-types'

const testState = (type, payload) => {
    const action = {
        type: type,
        payload: payload
    }

    return reducer(undefined, action)
}

test('Sets Lecture schedule', () => {
    const lectures = [{
        subject: 'APM',
        date:'2018.09.01',
        time: '10.30'
    },
        {
            subject: 'C++',
            date:'2018.09.02',
            time: '14.45'
        },
        {
            subject: 'Advance cryptography',
            date:'2018.09.03',
            time: '16.00'
        },
        {
            subject: 'Modern Web Development',
            date:'2018.09.04',
            time: '8.45'
        },
        {
            subject: 'Germany language A2',
            date:'2018.09.05',
            time: '13.15'
        }]


    const state = testState(SET_LECTURE_DETAILS, lectures)

    expect(state.lectures).toEqual(lectures)
})