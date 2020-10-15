import { createStore, combineReducers} from 'redux'
import todoListReducer from '../reducers/todoList'
import ArticleReducer from '../reducers/article'
import StepReducer from '../reducers/step'

const rootReducer = combineReducers({
    todoListReducer,
    ArticleReducer,
    StepReducer,
})

const store = createStore(rootReducer)

export default store;