import React from 'react'
import {Route} from 'react-router-dom'

import AppHeader from './AppHeader'
import RouteSearch from './RouteSearch'

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <AppHeader />

            <Route path="/search" component={RouteSearch} />
        </div>
    }
}