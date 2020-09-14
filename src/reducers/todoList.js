import { todoData, ArticleData } from '../constants/todoLists.js'
import { ADD_TODOLIST, EDIT_TODOLIST, GET_ARTICLE} from '../constants/todoAction-type.js'

const todoListReducer = (state = todoData, action) => {
    switch(action.type){
        case ADD_TODOLIST: {
            action.payload.id = state.length + 1
            return [...state, action.payload]
        }
        case EDIT_TODOLIST: {
            let newState = [...state]
            for (let i = 0 ; i <= newState.length-1; i++ ){
                if(newState[i].id == action.payload.id){
                    newState.splice(i, 1, action.payload)
                    break;
                }
            }
            return newState
        }
        default: {
            return state
        }
    }
}

const ArticleListReducer = (state = ArticleData, action) => {
    switch(action.type){
        case GET_ARTICLE: {
            return [...state, action.payload]
        }
        default: {
            return state
        }
    }
}

export { todoListReducer, ArticleListReducer }