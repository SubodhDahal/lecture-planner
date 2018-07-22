import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import React from 'react';
import {shallow} from 'enzyme';
import App from '../src/app/App';

test('Shows hello world message', () => {
  // Render a checkbox with label in the document
  const app = shallow(<App />)

  expect(app.text()).toEqual('Hello World!')
})
