import React from "react"
import { ImageSource } from "../ImageSource"
import Article from "../Article"

class ImageForm extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <ImageSource src="https://picsum.photos/300/400" className="BannerSize"/>
                    <ImageSource src="https://picsum.photos/300/400" className="BannerSize"/>
                    <ImageSource src="https://picsum.photos/300/400" className="BannerSize"/>
                </div>
                <div>
                    <Article/>
                </div>
            </div>
        )
    }
}

export { ImageForm }