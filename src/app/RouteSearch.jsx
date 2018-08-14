import React from 'react'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

export default class RouteSearch extends React.Component {
    render () {
        return <Grid container spacing={24}>
            <Grid item xs={12}>
                <TextField
                    id="source"
                    placeholder="Start location"
                    fullWidth={true}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="destination"
                    placeholder="Destination"
                    fullWidth={true}
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="raised"
                    color="primary"
                    fullWidth={true}>
                  Find routes
                </Button>
            </Grid>
        </Grid>
    }
}