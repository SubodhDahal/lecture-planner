import React from 'react'
import {Link, Route} from 'react-router-dom'

import AppHeader from './AppHeader'
import RouteSearch from './RouteSearch'

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <AppHeader />

            <Link to="/search">Search</Link>

            <Route path="/search" component={RouteSearch} />
        </div>
    }
}