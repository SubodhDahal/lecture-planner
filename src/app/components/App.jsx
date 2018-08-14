import React from 'react'
// import {connect} from 'react-redux'

import AppHeader from './AppHeader'
import RouteSearch from './RouteSearch'

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <AppHeader />
            <RouteSearch />
        </div>
    }
}