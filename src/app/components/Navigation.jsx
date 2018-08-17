import React from 'react'
import {Link, Route} from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const styles = {
    root: {
        position: 'absolute',
        top: 50,
        left: 0,
        zIndex: 999,
        background: '#ccc',
        width: '80%',
        height: '100%',
    }
}

class Navigation extends React.Component {
    render () {
        if (!this.props.show) {
            return <div></div>
        }

        return <div className={this.props.classes.root} >
            <List component="nav">
                <ListItem button component={Link} to="/">
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to="/search">
                    <ListItemText primary="Search" />
                </ListItem>
            </List>
        </div>
    }
}

export default withStyles(styles)(Navigation)
