import React from 'react'
import {connect} from 'react-redux'
import List from '@material-ui/core/List'
import Lecture from './Lecture'


@connect(({lectures}) => ({lectures}))
export default class LectureDetailsResults extends React.Component {
    render () {
        let lecture = []
        for (var i = 0; i < this.props.lectures.length; i++) {
            let lectureKey = `lecture_${i}`
            lecture.push(<Lecture
                lecture={this.props.lectures[i]}
                lectureKey={lectureKey}
                key={lectureKey}
            />)
        }

        return <List>
            {lecture}
        </List>
    }
}
