import React from 'react'

import Typography from '@material-ui/core/Typography'

export default class TravelRouteStation extends React.Component {
    render () {
        return <React.Fragment>
            <Typography>
                { this.props.name }
            </Typography>
            <Typography color="textSecondary">
                &nbsp; { this.props.time }
            </Typography>
        </React.Fragment>
    }
}
