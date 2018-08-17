import axios from 'axios'

import {
    SET_SOURCE_ADDRESS,
    SET_DESTINATION_ADDRESS,
    SET_TRAVEL_ROUTES,
    CLEAR_MESSAGE,
    SET_ERROR_MESSAGE
} from './action-types'

export const setSourceAddress = address => ({
    type: SET_SOURCE_ADDRESS,
    payload: address
})

export const setDestinationAddress = address => ({
    type: SET_DESTINATION_ADDRESS,
    payload: address
})

export const setRoutes = (routes) => ({
    type: SET_TRAVEL_ROUTES,
    payload: routes
})

export const clearMessage = () => ({
    type: CLEAR_MESSAGE
})

export const setErrorMessage = (message) => ({
    type: SET_ERROR_MESSAGE,
    payload: message
})

export const performRouteSearch = (source, destination) => async dispatch => {
    try {
        dispatch(clearMessage())

        const res = await axios.post('http://localhost:3000/route-plan', {
            from: source,
            destination: destination,
            date: '2018-08-17',
            time: '10:20'
        })

        dispatch(setRoutes(res.data.data))
    } catch (e) {
        dispatch(setErrorMessage(e.response.data.message))
    }
}
