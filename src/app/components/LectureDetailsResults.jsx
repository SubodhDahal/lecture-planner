import React from 'react'
import {connect} from 'react-redux'
import List from '@material-ui/core/List'
import Lecture from './Lecture'
import ListItem from '@material-ui/core/ListItem'
import { Redirect } from 'react-router-dom'


import {
    setLectureDate,
    setLectureTime
} from '../store/actions'

@connect(({lectures}) => ({lectures}))
export default class LectureDetailsResults extends React.Component {
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
                return <Redirect to='/lecture-route'/>
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
                Subject: {item.subject},
                Date:{item.date},
                Time:{item.time}
            </ListItem>
        }, this);
        return <List>
            {this.renderRedirect()}
            {innerNodes}</List>

    }
}
