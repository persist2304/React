import {createStore} from 'redux'
import {todoListReducer} from '../reducers'

const store = createStore(todoListReducer)

console.log('store',store)

export {store}