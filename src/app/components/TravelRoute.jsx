import React from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

export default class TravelRoute extends React.Component {
    render () {
        return <ListItem button>
            <Typography>{this.props.route.from.name} ({this.props.route.from.time})</Typography><br />
            <Typography>{this.props.route.to.name} ({this.props.route.to.time})</Typography>
        </ListItem>
    }
}
