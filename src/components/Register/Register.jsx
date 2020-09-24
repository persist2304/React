import React,{ useState } from "react"
import { InputForm, InputBtn } from "../Login"
import styles from "../../style/Login.scss"

const Register = (props) => {
    const [state, setState] = useState({ email: "", password: "", confirmPassword: ""})

    const handleChange = (e) => {
        const { id, value } = e.target
        setState(preState => ({ ...preState, [id] : value }))
    }

    const handleSubmitClick = (e) => {
        console.log("handleSubmitClick", state)
        e.preventDefault()
        const { showError } = props
        if(state.password === state.confirmPassword) {
            sendDetailToServer()
        } else {
            showError("Passwords do not match")
        }
    }

    const sendDetailToServer = () => {
        console.log('sendDetailToServer')
    }

    return (
        <div className={ styles.center }>
            <InputForm id="email" type="text" title="Email" inputValue={ state.email } onChange={ handleChange }/>
            <small className="form-text text-muted">We'll never share your email with anyone else.</small>
            <div className={ styles.margin }>
                <InputForm id="password" type="password" title="Password" onChange={ handleChange }/>
            </div>
            <div className={ styles.margin }>
                <InputForm id="confirmPassword" type="password" title="Confirm Password" onChange={ handleChange }/>
            </div>
            <div className={ styles.margin } >
                <InputBtn name="Register" onClick={ handleSubmitClick }/>
            </div>
        </div>
    )
}

export default Register;