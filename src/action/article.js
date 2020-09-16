import { GET_ARTICLE } from "../constants/todoAction-type"

export const getArticle = article => ({
    type: GET_ARTICLE,
    payload: {
        article,
    }
})