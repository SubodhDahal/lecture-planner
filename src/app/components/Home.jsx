import React from 'react'
import { connect } from 'react-redux'

import Typography from '@material-ui/core/Typography'

import {
    hideSideMenu,
    setTitle
} from '../store/actions'

@connect()
export default class Home extends React.Component {
    constructor (props) {
        super(props)
        props.dispatch(setTitle('Home'))
        props.dispatch(hideSideMenu())
    }

    render () {
        return <Typography>
            Welcome to Lecture Planner!
        </Typography>
    }
}
