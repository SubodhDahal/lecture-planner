import React from 'react'
import {connect} from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const styles = {
    root: {
        marginBottom: 20
    }
}

@connect(({message}) => ({message}))
class AlertMessage extends React.Component {
    render () {
        if (this.props.message.type === '' && this.props.message.text === '') {
            return <div></div>
        }

        const color = this.props.message.type === 'error' ? 'error' : 'primary'

        return <Card className={this.props.classes.root}>
            <CardContent>
                <Typography color={color}>
                    { this.props.message.text }
                </Typography>
            </CardContent>
        </Card>
    }
}

export default withStyles(styles)(AlertMessage)
