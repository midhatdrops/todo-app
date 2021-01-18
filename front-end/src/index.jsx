import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app.jsx'

import promise from 'redux-promise'

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducers from './main/store/reducers'

const store = applyMiddleware(promise)(createStore)(reducers)

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'))