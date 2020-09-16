import React from "react"
import { ImageSource } from "../ImageSource"
import { ImageForm } from "../ImageForm"

class Home extends React.Component {
    render(){
        return (
            <div>
                {/*<ImageSource className="HomeBanner" src="https://picsum.photos/2000/300"/>*/}
                <ImageSource className="HomeBanner" src=""/>
                <ImageForm/>
            </div>
        )
    }
}

export { Home }