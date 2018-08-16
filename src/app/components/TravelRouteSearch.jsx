import React from 'react'
import {connect} from 'react-redux'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

import {
    setSourceAddress,
    setDestinationAddress,
    performRouteSearch
} from '../store/actions'

function initialState() {
    return {
        source: '',
        destination: ''
    }
}

@connect()
export default class TravelRouteSearch extends React.Component {
    constructor (props) {
        super(props)

        this.state = initialState()

        this._handleSourceAddressChange = e => this.setState({source: e.target.value})
        this._handleDestinationAddressChange = e => this.setState({destination: e.target.value})

        this._handleRouteSearch = this._handleRouteSearch.bind(this)
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
                    fullWidth={true}
                    onClick={this._handleRouteSearch}>
                  Find routes
                </Button>
            </Grid>
        </Grid>
    }

    _handleRouteSearch (event) {
        event.preventDefault()
        const {source, destination} = this.state
        const {dispatch} = this.props

        dispatch(setSourceAddress(source))
        dispatch(setDestinationAddress(destination))
        dispatch(performRouteSearch(source, destination))
    }
}