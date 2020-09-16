import { createStore, combineReducers} from 'redux'
import todoListReducer from '../reducers/todoList'
import ArticleReducer from '../reducers/article'

const rootReducer = combineReducers({
    todoListReducer,
    ArticleReducer
})

const store = createStore(rootReducer)

export default store;