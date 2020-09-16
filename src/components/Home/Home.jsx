import React from "react"
import { ImageSource } from "../ImageSource"
import { ImageForm } from "../ImageForm"
import styles from "../../index.scss"

class Home extends React.Component {
    render(){
        return (
            <div>
                <span className={styles.hi}>123123</span>
                {/*<ImageSource className="HomeBanner" src="https://picsum.photos/2000/300"/>*/}
                <ImageSource className="HomeBanner" src=""/>
                <ImageForm/>
            </div>
        )
    }
}

export { Home }