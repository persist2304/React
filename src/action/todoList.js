import { ADD_TODOLIST, EDIT_TODOLIST, GET_ARTICLE} from '../constants/todoAction-type.js'

export const addTodoList = todoList => ({
    type: ADD_TODOLIST,
    payload: todoList
})

export const editToDoList = toDoList => ({
    type: EDIT_TODOLIST,
    payload: toDoList
})

export const GetArticle = ArticleList => ({
    type: GET_ARTICLE,
    payload: ArticleList
})