import React,{ useState, useEffect } from "react"
import styles from "../../style/Alert.scss"

const Alert = (props) => {
    const [modalDisplay, toggleDisplay] = useState("none")
    const { errorMessage, hideError } = props

    const closeModal = () => {
        toggleDisplay("none");
        hideError(null);
    }

    const openModal = () => {
        toggleDisplay('block')
    }

    useEffect(() => {
        if(errorMessage !== null){
            openModal()
        } else {
            closeModal()
        }
    })

    return (
        <div className={ "alert alert-danger alert-dismissable mt-4" } id="alertPopUp" style={{ display: modalDisplay }}>
            <div className={ styles.displayCenter }>
                <span>{ errorMessage }</span>
                <button type="button" className={ "close" } style={{paddingLeft: "2%"}} aria-label="Close" onClick={ () => { closeModal() }}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>

    )
}

export default Alert;