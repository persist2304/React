import { todoData } from '../constants/todoLists.js'
import { ADD_TODOLIST, EDIT_TODOLIST, GET_ARTICLE} from '../constants/todoAction-type.js'
import * as actions from "../action/todoList"

const todoListReducer = (state = todoData, action) => {
    switch(action.type){
        case ADD_TODOLIST: {
            actions.payload.id = state.length + 1
            return [...state, action.payload]
        }
        case EDIT_TODOLIST: {
            let newState = [...state]
            for (let i = 0 ; i <= newState.length-1; i++ ){
                if(newState[i].id == actions.payload.id){
                    newState.splice(i, 1, actions.payload)
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

export default todoListReducer;