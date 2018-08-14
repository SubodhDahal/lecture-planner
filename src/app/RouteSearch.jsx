import React from 'react'
import {connect} from 'react-redux'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

import {
    setSourceAddress,
    setDestinationAddress
} from '../store/actions'

@connect()
export default class RouteSearch extends React.Component {
    constructor (props) {
        super(props)

        this._handleSourceAddressChange = this._handleSourceAddressChange.bind(this)
        this._handleDestinationAddressChange = this._handleDestinationAddressChange.bind(this)
    }

    render () {
        return <Grid container spacing={24}>
            <Grid item xs={12}>
                <TextField
                    id="source"
                    placeholder="Start location"
                    fullWidth={true}
                    onChange={this._handleSourceAddressChange}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="destination"
                    placeholder="Destination"
                    fullWidth={true}
                    onChange={this._handleDestinationAddressChange}
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="raised"
                    color="primary"
                    fullWidth={true}>
                  Find routes
                </Button>
            </Grid>
        </Grid>
    }

    _handleSourceAddressChange (event) {
        const {dispatch} = this.props

        dispatch(setSourceAddress(event.target.value))
    }

    _handleDestinationAddressChange (event) {
        const {dispatch} = this.props

        dispatch(setDestinationAddress(event.target.value))
    }
}