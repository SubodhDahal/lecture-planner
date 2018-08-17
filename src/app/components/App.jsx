import React from 'react'
import {Route} from 'react-router-dom'

import AlertMessage from './AlertMessage'
import AppHeader from './AppHeader'
import TravelRouteSearch from './TravelRouteSearch'
import TravelRouteResults from './TravelRouteResults'

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <AppHeader />

            <AlertMessage />

            <Route path="/" component={TravelRouteSearch} />
            <Route path="/search" component={TravelRouteSearch} />

            <TravelRouteResults />
        </div>
    }
}