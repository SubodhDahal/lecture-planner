import React from 'react'
import { connect } from 'react-redux'

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
    performRouteSearch
} from '../store/actions'

function initialState() {
    return {
        source: '',
        destination: ''
    }
}

@connect(({title, universities, address}) => ({title, universities, address}))
export default class TravelRouteSearch extends React.Component {
    constructor (props) {
        super(props)

        this.state = initialState()

        props.dispatch(setTitle('Route Search'))
        props.dispatch(hideSideMenu())
        props.dispatch(getUniversities())

        this._handleDestinationAddressChange = this._handleDestinationAddressChange.bind(this)

        this._handleRouteSearch = this._handleRouteSearch.bind(this)
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
                    disabled={this.props.address.source === '' || this.props.address.destination === ''}
                    onClick={this._handleRouteSearch}>
                  Find routes
                </Button>
            </Grid>
        </Grid>
    }

    _handleDestinationAddressChange (event) {
        const {dispatch} = this.props

        this.setState({destination: event.target.value})
        dispatch(setDestinationAddress(event.target.value))
    }

    _handleRouteSearch (event) {
        event.preventDefault()
        const {dispatch} = this.props
        const {source, destination} = this.props.address

        dispatch(performRouteSearch(source, destination))
    }
}
