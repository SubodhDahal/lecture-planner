import axios from 'axios'

import {
    SET_TITLE,
    SET_SOURCE_ADDRESS,
    SET_DESTINATION_ADDRESS,
    SET_TRAVEL_ROUTES,
    GET_USER_DETAILS,
    SET_USER_ID,
    SET_UNIVERSITIES,
    SET_LOCATION_SUGGESTIONS,
    CLEAR_MESSAGE,
    SET_SUCCESS_MESSAGE,
    SET_ERROR_MESSAGE,
    HIDE_SIDE_MENU,
    TOGGLE_SIDE_MENU
} from './action-types'

export const setTitle = title => ({
    type: SET_TITLE,
    payload: title
})

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

export const setLocationSuggestions = (suggestions) => ({
    type: SET_LOCATION_SUGGESTIONS,
    payload: suggestions
})

export const setUniversities = (universities) => ({
    type: SET_UNIVERSITIES,
    payload: universities
})

export const setUserId = (userId) => ({
    type: SET_USER_ID,
    payload: userId
})

export const clearMessage = () => ({
    type: CLEAR_MESSAGE
})

export const setSuccessMessage = (message) => ({
    type: SET_SUCCESS_MESSAGE,
    payload: message
})

export const setErrorMessage = (message) => ({
    type: SET_ERROR_MESSAGE,
    payload: message
})

export const hideSideMenu = () => ({
    type: HIDE_SIDE_MENU
})

export const toggleSideMenu = () => ({
    type: TOGGLE_SIDE_MENU
})

export const getUserDetails = () => async dispatch => {
    try {
        dispatch(clearMessage())

        const res = await axios.get('http://localhost:3000/user-details')

        let location = ''
        let university = ''
        let userId = ''

        if (res.data.data) {
            location = res.data.data.location
            university = res.data.data.university
            userId = res.data.data._id
        }

        dispatch(setUserId(userId))
        dispatch(setSourceAddress(location))
        dispatch(setDestinationAddress(university))
    } catch (e) {
        dispatch(setErrorMessage(e.response.data.message))
    }
}

export const getLocationSuggestions = (keyword) => async dispatch => {
    try {
        dispatch(clearMessage())

        const res = await axios.get(`http://localhost:3000/route-suggestions/${keyword}`)

        dispatch(setLocationSuggestions(res.data.data))
    } catch (e) {
        dispatch(setErrorMessage(e.response.data.message))
    }
}

export const getUniversities = () => async dispatch => {
    try {
        dispatch(clearMessage())

        const res = await axios.get('http://localhost:3000/universities')

        dispatch(setUniversities(res.data.data))
    } catch (e) {
        dispatch(setErrorMessage(e.response.data.message))
    }
}

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
