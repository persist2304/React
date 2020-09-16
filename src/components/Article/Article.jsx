import React from "react"
import { useSelector } from "react-redux";

const _ShowArticle = () => {
    const data = useSelector(state => state.ArticleReducer)
    return (
        data.map((item, index) => (
            <div key={index}>
                <li>{item.title}</li>
                <li>{item.content}</li>
            </div>
        ))
    )
}

const Article = () => {
    const data = useSelector(state => state.ArticleReducer)
    return (
        <div>
            <_ShowArticle />
        </div>
    )
}

export default Article;

