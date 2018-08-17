import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

import TravelRouteDetails from './TravelRouteDetails'
import TravelRouteStation from './TravelRouteStation'

export default class TravelRoute extends React.Component {
    render () {
        return <React.Fragment>
            <ListItem button>
                <TravelRouteStation name={ this.props.route.from.name } time={ this.props.route.from.time } />
                <TravelRouteStation name={ this.props.route.to.name } time={ this.props.route.to.time } />
            </ListItem>

            <TravelRouteDetails routeKey={this.props.routeKey} stations={this.props.route.stops} />
        </React.Fragment>
    }
}
