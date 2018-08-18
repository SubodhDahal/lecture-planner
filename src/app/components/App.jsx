import React from 'react'
import {Route} from 'react-router-dom'

import AlertMessage from './AlertMessage'
import AppHeader from './AppHeader'
import Home from './Home'
import TravelRouteSearch from './TravelRouteSearch'
import TravelRouteResults from './TravelRouteResults'
import UserDetails from './UserDetails'

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <AppHeader />

            <AlertMessage />

            <Route path="/" component={Home} exact />
            <Route path="/user-details" component={UserDetails} />
            <Route path="/search" component={TravelRouteSearch} />

            <TravelRouteResults />
        </div>
    }
}