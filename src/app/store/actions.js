import {
    SET_SOURCE_ADDRESS,
    SET_DESTINATION_ADDRESS
} from './action-types'

export const setSourceAddress = address => ({
    type: SET_SOURCE_ADDRESS,
    payload: {address}
})

export const setDestinationAddress = address => ({
    type: SET_DESTINATION_ADDRESS,
    payload: {address}
})
