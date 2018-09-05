import React from 'react'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import { isAddressSet } from '../utilities'

import TravelRouteResults from './TravelRouteResults'

import {
    hideSideMenu,
    setTitle,
    performRouteSearchWithDateTime,
    setLectureDateTime
} from '../store/actions'

@connect(({title, universities, address,dateTime}) => ({title, universities, address,dateTime}))
export default class TravelRouteSearch extends React.Component {
    constructor (props) {
        super(props)
        const {source, destination} = this.props.address
        const {date,time}=this.props.dateTime
        props.dispatch(performRouteSearchWithDateTime(source, destination,date,time))
        props.dispatch(setTitle('Route Search'))
        props.dispatch(hideSideMenu())
    }

    render () {
        return <Grid container spacing={8}>
            <Grid item xs={12}>

            </Grid>
            <Grid item xs={12}>
                <TravelRouteResults />
            </Grid>
        </Grid>
    }
}
