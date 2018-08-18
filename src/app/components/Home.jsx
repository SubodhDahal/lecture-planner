import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Typography from '@material-ui/core/Typography'

import {
    getUserDetails,
    hideSideMenu,
    setTitle
} from '../store/actions'

@connect(({address}) => ({address}))
export default class Home extends React.Component {
    constructor (props) {
        super(props)
        props.dispatch(getUserDetails())
        props.dispatch(setTitle('Home'))
        props.dispatch(hideSideMenu())
    }

    render () {
        let infoMessage
        if (this.props.address.source === '' || this.props.address.destination === '') {
            infoMessage = <Typography>
                You don't have addresses set. Visit <Link to="/user-details">User Details</Link> to set them.
            </Typography>
        }

        return <React.Fragment>
            <Typography>
                Welcome to Lecture Planner!
            </Typography>
            { infoMessage }
        </React.Fragment>
    }
}
