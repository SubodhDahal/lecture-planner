import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'

import UserLocationSelect from './UserLocationSelect'

import {
    hideSideMenu,
    setTitle,
    setSourceAddress,
    setDestinationAddress,
    getUniversities,
    performRouteSearch,
    setSuccessMessage,
    setErrorMessage
} from '../store/actions'

@connect(({title, universities, address, userId}) => ({title, universities, address, userId}))
export default class UserDetails extends React.Component {
    constructor (props) {
        super(props)

        props.dispatch(setTitle('User Details'))
        props.dispatch(hideSideMenu())
        props.dispatch(getUniversities())

        this._handleDestinationAddressChange = this._handleDestinationAddressChange.bind(this)

        this._saveUserDetails = this._saveUserDetails.bind(this)
    }

    render () {
        let universities = []

        for (let key in this.props.universities) {
            universities.push(<MenuItem value={key} key={key}>{this.props.universities[key]}</MenuItem>)
        }

        return <Grid container spacing={24}>
            <Grid item xs={12}>
                <UserLocationSelect />
            </Grid>
            <Grid item xs={12}>
                <Select
                    onChange={this._handleDestinationAddressChange}
                    value={this.props.address.destination}
                    fullWidth
                >
                    {universities}
                </Select>
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="raised"
                    color="primary"
                    fullWidth={true}
                    disabled={this.props.address.source === '' || this.props.address.destination === ''}
                    onClick={this._saveUserDetails}>
                  Save
                </Button>
            </Grid>
        </Grid>
    }

    _handleDestinationAddressChange (event) {
        const {dispatch} = this.props

        dispatch(setDestinationAddress(event.target.value))
    }

    async _saveUserDetails (event) {
        event.preventDefault()
        const {dispatch} = this.props
        const {source, destination} = this.props.address

        try {
            const res = await axios.post('http://localhost:3000/user-details', {
                location: source,
                university: destination,
                userId: this.props.userId
            })

            dispatch(setSuccessMessage(res.data.data.message))
        } catch (e) {
            dispatch(setErrorMessage(e.response.data.message))
        }
    }
}
