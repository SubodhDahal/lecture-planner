import React from 'react'
import Grid from '@material-ui/core/Grid'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import LectureComponents from './LectureComponents'

export default class Lecture extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return <React.Fragment>
            <ListItem>
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <LectureComponents
                        text='subject' subject={ this.props.lecture.subject }
                        date={ this.props.lecture.date }
                        time={this.props.lecture.time}
                    />
                    <Button
                        variant="raised"
                        color="primary"
                        fullWidth={false}
                        onClick={this._handleRouteSearch}>
                        Find routes
                    </Button>
                </Grid>
            </ListItem>


        </React.Fragment>
    }
}
