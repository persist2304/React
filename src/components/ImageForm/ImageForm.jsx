import React from "react"
import { ImageSource } from "../ImageSource"
import styles from "../../style/ImageForm.styl"

class ImageForm extends React.Component{
    render(){
        return (
            <div>
                <ImageSource src="https://picsum.photos/300/400" className="BannerSize"/>
            </div>
        )
    }
}

export { ImageForm }