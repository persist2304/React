import { OrderData } from '../constants/todoLists.js' 
import { ADD_ORDER, EDIT_ORDER, DELETE_ORDER } from '../constants/orderAction-type.js'

// Reducer 會有兩個參數, initData 給 Reducer 保管, action 做什麼狀態
const orderReducer = (state = OrderData, action) => {
    switch (action.type){
        // 如果 action.type == ADD_ORDER
        case ADD_ORDER: {
            action.payload.id = state.length
            return [...state, action.payload]
        }
        // edit function
        case EDIT_ORDER: {
            let newState = [...state]
            // run loop to check id that id the same is going to change. 
            for(let i = 0; i <= newState.length-1; i++){
                if(newState[i].id == action.payload.id){
                    newState[i].name = action.payload.name
                    break;
                }
            }
            return newState;
        }        
        // delete function 
        case DELETE_ORDER: {
            let newState = [...state]
            newState.splice(action.payload, 1);
            return newState;
        }
        // 如果沒有 action.type 就回傳 state 
        default:
            return state
    }
}

export default orderReducer;