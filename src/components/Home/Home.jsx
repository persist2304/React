import React from "react"
import { ImageSource } from "../ImageSource"
import { ImageForm } from "../ImageForm"
import Step from "../Step"
import styles from "../../index.scss"

class Home extends React.Component {
    render(){
        return (
            <div className={styles.main}>
                <ImageSource className={styles.banner} src="https://picsum.photos/2000/300"/>
                <Step/>
                {/*<ImageForm/>*/}
            </div>
        )
    }
}

export { Home }