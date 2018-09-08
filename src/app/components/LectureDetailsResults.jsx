import React from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import SchoolTwoTone from '@material-ui/icons/SchoolTwoTone'
import { withStyles } from '@material-ui/core/styles'

import Lecture from './Lecture'

import {
    setLectureDate,
    setLectureTime
} from '../store/actions'

const styles = {
    classIcon: {
        marginTop: 10,
        marginRight: 10
    }
}

@connect(({lectures}) => ({lectures}))
export class LectureDetailsResults extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            redirect: false
        }
        this.setRedirect = () => {
            this.setState({
                redirect: true
            })
        }
        this.renderRedirect = () => {
            if (this.state.redirect) {
                return <Redirect to='/route-search'/>
            }
        }

        this._onListItemSelected = (date, time) => {
            this.setRedirect();
            //console.log(date,time);
            props.dispatch(setLectureDate(date))
            props.dispatch(setLectureTime(time))
        }
    }

    render() {

        var autoCompleteList;
        var innerNodes;
        var onListItemSelected = this._onListItemSelected;
        var i = 0;
        innerNodes = this.props.lectures.map(function (item) {
            return <ListItem
                button onClick={this._onListItemSelected.bind(this, item.date, item.time)}
                key={i++} {...item} >
                <Grid container direction="row">
                    <Grid className={this.props.classes.classIcon}>
                        <SchoolTwoTone></SchoolTwoTone>
                    </Grid>
                    <Grid
                      direction="column"
                      justify="flex-start"
                      alignItems="flex-start"
                    >
                        <Typography>
                            { item.subject }
                        </Typography>
                        <Typography color="textSecondary">
                            {item.date}, {item.time}
                        </Typography>
                    </Grid>
                </Grid>
            </ListItem>
        }, this)

        return <List>
            {this.renderRedirect()}
            {innerNodes}</List>
    }
}

export default withStyles(styles)(LectureDetailsResults)
