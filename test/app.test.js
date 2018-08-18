import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
import React from 'react'
import {shallow} from 'enzyme'

// import Typography from '@material-ui/core/Typography'

// import AppHeader from '../src/app/components/AppHeader'

// test('Shows hello world message', () => {
//   // Render a checkbox with label in the document
//   const app = shallow(<AppHeader />)

//   expect(app.find(Typography)).toEqual('Lecture Planner')
// })
