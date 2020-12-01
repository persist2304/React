import React from "react"
import ImageForm from "../ImageForm"
import Step from "../Step"
import styles from "../../index.scss"

class Home extends React.Component {
    render(){
        return (
            <div>
                <img src="https://picsum.photos/2000/300" alt="" className={ styles.banner }/>
                    <div className={styles.main}>
                        <Step/>
                        <ImageForm/>
                    </div>
            </div>
        )
    }
}

export { Home }