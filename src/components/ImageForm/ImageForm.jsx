import React from "react"
import { ImageSource } from "../ImageSource"
import { Article } from "../Article"

class ImageForm extends React.Component{
    render(){
        return (
            <div>
                <ImageSource src="https://picsum.photos/300/400" className="BannerSize"/>
                <Article/>
            </div>
        )
    }
}

export { ImageForm }