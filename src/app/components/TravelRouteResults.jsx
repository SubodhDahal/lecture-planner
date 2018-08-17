import React from 'react'
import {connect} from 'react-redux'

import List from '@material-ui/core/List'

import TravelRoute from './TravelRoute'

@connect(({travelRoutes}) => ({travelRoutes}))
export default class TravelRouteResults extends React.Component {
    render () {
        let routes = []

        for (var i = 0; i < this.props.travelRoutes.length; i++) {
            let routeKey = `route_${i}`
            routes.push(<TravelRoute
                route={this.props.travelRoutes[i]}
                routeKey={routeKey}
                key={routeKey}
            />)
        }

        return <List>
            {routes}
        </List>
    }
}
