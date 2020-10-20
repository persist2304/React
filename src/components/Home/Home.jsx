import React from "react"
import ImageForm from "../ImageForm"
import Step from "../Step"
import CssWorld from "../CssWorld";
import styles from "../../index.scss"

class Home extends React.Component {
    render(){
        return (
            <div>
                <img src="https://picsum.photos/2000/300" alt="" className={ styles.banner }/>
                    <div className={styles.main}>
                        <Step/>
                        <ImageForm/>
                        <CssWorld/>
                    </div>
            </div>
        )
    }
}

export { Home }