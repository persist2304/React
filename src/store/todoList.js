import {createStore} from 'redux'
import {todoListReducer} from '../reducers/index'

const store = createStore(todoListReducer)

console.log('store',store)

export {store}