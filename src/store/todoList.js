import {createStore} from 'redux'
import todoListReducer from '../reducers/todoList'

const store = createStore(todoListReducer)

export default store;