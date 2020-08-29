import {createStore} from 'redux'

import postReducer from '../redux/reducers/postReducer.js'


const store = createStore(postReducer)

export default store;

