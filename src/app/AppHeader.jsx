import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'

const styles = {
    header: {
        marginBottom: 25
    }
}

class AppHeader extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            classes: props.classes
        }
    }

    render () {
        return <Grid container spacing={24} className={this.state.classes.header}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit">
                    Route Search
                    </Typography>
                </Toolbar>
            </AppBar>
        </Grid>
    }
}

export default withStyles(styles)(AppHeader)
