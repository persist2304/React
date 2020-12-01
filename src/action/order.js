import { ADD_ORDER, EDIT_ORDER, DELETE_ORDER } from '../constants/orderAction-type.js'

export const addOrder = order => ({
    type: ADD_ORDER,
    payload: order
})

export const editOrder = order => ({
    type: EDIT_ORDER,
    payload: order
})

export const deleteOrder = order => ({
    type: DELETE_ORDER,
    payload: order
})