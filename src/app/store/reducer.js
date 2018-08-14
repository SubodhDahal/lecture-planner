import {
    SET_SOURCE_ADDRESS,
    SET_DESTINATION_ADDRESS
} from './action-types'

const initialState = () => ({
    address: {
        source: '',
        destination: ''
    }
})

export default function reducer(state = initialState(), action) {
    const {type, payload} = action

    switch (type) {
        case SET_SOURCE_ADDRESS:
            return setSourceAddress(state, payload)

        case SET_DESTINATION_ADDRESS:
            return setDestinationAddress(state, payload)

        default:
            return state
    }
}

function setSourceAddress(state, payload) {
    const {address} = state

    const newAddress = Object.assign({}, address, {
        source: payload.address,
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
        destination: payload.address
    })

    return {
        ...state,
        address: newAddress
    }
}
