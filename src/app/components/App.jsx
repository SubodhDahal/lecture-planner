import React from 'react'
import {Route} from 'react-router-dom'

import AlertMessage from './AlertMessage'
import AppHeader from './AppHeader'
import Home from './Home'
import TravelRouteSearch from './TravelRouteSearch'
import UserDetails from './UserDetails'
import LectureDetails from './LectureDetails'

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
            <Route path="/lecture-details" component={LectureDetails} />
        </div>
    }
}