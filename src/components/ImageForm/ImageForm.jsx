import React from "react"
import Article from "../Article"
import styles from "../../style/ImageForm.scss"

const ImageData = [
    { "url": "https://picsum.photos/300/400"}
]

const Image = (props) => {
    return (
        <div>
            <img src={ props.img } alt="Img" className={ styles.img }/>
            <Article/>
        </div>
    )
}

const ImageForm = () => {
    return (
        <div className={ styles.container }>
            <Image img={ ImageData[0].url }/>
            <Image img={ ImageData[0].url }/>
            <Image img={ ImageData[0].url }/>
        </div>
    )
}

export default ImageForm;