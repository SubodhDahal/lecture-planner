import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'
import store from './store/index'

import axios from 'axios'

import './style.css'
import App from './App'

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App/>
        </div>
    </Provider>,
    document.getElementById('app')
)
