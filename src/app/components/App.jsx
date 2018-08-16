import React from 'react'
import {Route} from 'react-router-dom'

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

            <Route path="/" component={TravelRouteSearch} />
            <Route path="/search" component={TravelRouteSearch} />

            <TravelRouteResults />
        </div>
    }
}