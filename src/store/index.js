import { createStore, combineReducers} from 'redux'
import todoListReducer from '../reducers/todoList'
import ArticleReducer from '../reducers/article'
import StepReducer from '../reducers/step'
import orderReducer from '../reducers/order'

const rootReducer = combineReducers({
    todoListReducer,
    ArticleReducer,
    StepReducer,
    orderReducer,
})

const store = createStore(rootReducer)

export default store;