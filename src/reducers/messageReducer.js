import {ADD_MESSAGE} from '../constants/action-types'
import {data} from "../constants/models"

const messageReducer = (state = data, action) => {
    switch(action.type){
        case ADD_MESSAGE:{
            action.payload.id = String(state.message.length+1)
            return {...state, message: [...state.message, action.payload]}
            break
        }
        default: {
            return state
            break
        }
    }
}

export {messageReducer}