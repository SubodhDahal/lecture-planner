import React from 'react'
import {connect} from 'react-redux'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'

import {
    setSourceAddress,
    setDestinationAddress,
    getUniversities,
    performRouteSearch
} from '../store/actions'

function initialState() {
    return {
        source: '',
        destination: ''
    }
}

@connect(({universities}) => ({universities}))
export default class TravelRouteSearch extends React.Component {
    constructor (props) {
        super(props)

        this.state = initialState()

        props.dispatch(getUniversities())

        this._handleSourceAddressChange = e => this.setState({source: e.target.value})
        this._handleDestinationAddressChange = e => this.setState({destination: e.target.value})

        this._handleRouteSearch = this._handleRouteSearch.bind(this)
    }

    render () {
        let universities = []

        for (let key in this.props.universities) {
            universities.push(<MenuItem value={key} key={key}>{this.props.universities[key]}</MenuItem>)
        }

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
                <Select
                    onChange={this._handleDestinationAddressChange}
                    value={this.state.destination}
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
                    disabled={this.state.source === '' || this.state.destination === ''}
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
