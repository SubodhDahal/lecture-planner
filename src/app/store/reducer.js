import {
    SET_SOURCE_ADDRESS,
    SET_DESTINATION_ADDRESS,
    SET_TRAVEL_ROUTES,
    CLEAR_MESSAGE,
    SET_ERROR_MESSAGE
} from './action-types'

const initialState = () => ({
    address: {
        source: '',
        destination: ''
    },
    travelRoutes: [],
    message: initialMessage()
})

const initialMessage = () => ({
    type: '',
    text: ''
})

export default function reducer(state = initialState(), action) {
    const {type, payload} = action

    switch (type) {
        case SET_SOURCE_ADDRESS:
            return setSourceAddress(state, payload)

        case SET_DESTINATION_ADDRESS:
            return setDestinationAddress(state, payload)

        case SET_TRAVEL_ROUTES:
            return setTravelRoutes(state, payload)

        case CLEAR_MESSAGE:
            return clearMessage(state)

        case SET_ERROR_MESSAGE:
            return setErrorMessage(state, payload)

        default:
            return state
    }
}

function setSourceAddress(state, payload) {
    const {address} = state

    const newAddress = Object.assign({}, address, {
        source: payload,
        destination: address.destination
    })

    return {
        ...state,
        address: newAddress
    }
}

function setDestinationAddress(state, payload) {
    const {address} = state

    const newAddress = Object.assign({}, address, {
        source: address.source,
        destination: payload
    })

    return {
        ...state,
        address: newAddress
    }
}

function setTravelRoutes(state, payload) {
    return {
        ...state,
        travelRoutes: payload
    }
}

function clearMessage(state) {
    return {
        ...state,
        message: initialMessage()
    }
}

function setErrorMessage(state, payload) {
    return {
        ...state,
        message: {
            type: 'error',
            text: payload
        }
    }
}
