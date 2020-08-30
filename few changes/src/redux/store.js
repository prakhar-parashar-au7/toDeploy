import {createStore} from 'redux'

import postReducer from '../redux/reducers/postReducer.js'


const store = createStore(postReducer)

// store.subscribe(()=> {
//     console.log(store.getState())
// })

export default store;

