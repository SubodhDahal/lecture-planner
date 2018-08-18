import {
    SET_TITLE,
    SET_SOURCE_ADDRESS,
    SET_DESTINATION_ADDRESS,
    SET_UNIVERSITIES,
    SET_TRAVEL_ROUTES,
    CLEAR_MESSAGE,
    SET_ERROR_MESSAGE,
    HIDE_SIDE_MENU,
    TOGGLE_SIDE_MENU
} from './action-types'

const initialState = () => ({
    address: {
        source: '',
        destination: ''
    },
    travelRoutes: [],
    universities: {},
    message: initialMessage(),
    title: 'Home',
    showSideMenu: false
})

const initialMessage = () => ({
    type: '',
    text: ''
})

export default function reducer(state = initialState(), action) {
    const {type, payload} = action

    switch (type) {
        case SET_TITLE:
            return setTitle(state, payload)

        case SET_SOURCE_ADDRESS:
            return setSourceAddress(state, payload)

        case SET_DESTINATION_ADDRESS:
            return setDestinationAddress(state, payload)

        case SET_TRAVEL_ROUTES:
            return setTravelRoutes(state, payload)

        case SET_UNIVERSITIES:
            return setUniversities(state, payload)

        case CLEAR_MESSAGE:
            return clearMessage(state)

        case SET_ERROR_MESSAGE:
            return setErrorMessage(state, payload)

        case HIDE_SIDE_MENU:
            return hideSideMenu(state)

        case TOGGLE_SIDE_MENU:
            return toggleSideMenu(state)

        default:
            return state
    }
}

function setTitle(state, payload) {
    return {
        ...state,
        title: payload
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

function setUniversities(state, payload) {
    return {
        ...state,
        universities: payload
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

function toggleSideMenu(state) {
    return {
        ...state,
        showSideMenu: !state.showSideMenu
    }
}

function hideSideMenu(state) {
    return {
        ...state,
        showSideMenu: false
    }
}
