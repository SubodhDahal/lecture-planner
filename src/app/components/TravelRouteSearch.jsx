import React from 'react'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import { isAddressSet } from '../utilities'

import TravelRouteResults from './TravelRouteResults'

import {
    hideSideMenu,
    setTitle,
    performRouteSearch
} from '../store/actions'

@connect(({title, universities, address}) => ({title, universities, address}))
export default class TravelRouteSearch extends React.Component {
    constructor (props) {
        super(props)

        props.dispatch(setTitle('Route Search'))
        props.dispatch(hideSideMenu())

        this._handleRouteSearch = this._handleRouteSearch.bind(this)
    }

    render () {
        return <Grid container spacing={8}>
            <Grid item xs={12}>
                <Button
                    variant="raised"
                    color="primary"
                    fullWidth={true}
                    disabled={!isAddressSet(this.props.address)}
                    onClick={this._handleRouteSearch}>
                  Find routes
                </Button>
            </Grid>
            <Grid item xs={12}>
                <TravelRouteResults />
            </Grid>
        </Grid>
    }

    _handleRouteSearch (event) {
        event.preventDefault()
        const {dispatch} = this.props
        const {source, destination} = this.props.address

        dispatch(performRouteSearch(source, destination))
    }
}
