import React, { useState, useEffect, useRef } from "react"
import { useHistory } from "react-router-dom"
import { API_BASE_URL } from "../../constants/apiConstants"
import styles from "../../style/Login.scss"
import axios from 'axios';

const InputForm = (props) => {
    const { id, type, title, value, inputRef, onChange, placeholder } = props
    return (
        <div>
            <div className={ styles.font }> { title } </div>
            <input id={ id } type={ type } className={ styles.padding } onChange={ onChange } value={ value } ref={ inputRef }/>
        </div>
    )
}

const InputBtn = (props) => {
    const { name, disabled, onClick } = props;
    return (
        <div className={ styles.centerBtn }>
            <button className={ disabled ? styles.disableBtn : styles.btn } disabled={ disabled } onClick={ onClick }> { name }</button>
        </div>
    )
}

const Login = (props) => {
    const [state, setState] = useState({ email: "", password: "" })
    const isDisabledBtn = () => {
        return (
            state.email.length == 0 || state.password.length == 0 ? true : false
        )
    }

    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus();
    },[])

    const handleSubmitClick = (e) => {
        e.preventDefault();
        console.log('handleSubmitClick');
        const payload = { "email" : state.email, "password" : state.password }
        axios.post("localhost:4000/user/login", payload)
            .then(function(response){
                if(response.status === 200){
                    setState(prevState => ({ ...prevState, "successMessage" : "Login successful.Redirecting to home page..."}))
                    localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
                    redirectToHome();
                    showError(null)
                } else if (response.code == 204) {
                    showError("Username and password do not match");
                } else {
                    showError("Username does not exists");
                }
            })
            .catch(function(error){
                console.log(error)
            })
    }

    let history = useHistory()

    const toRegisterBtn = (e) => {
        e.preventDefault();
        history.push("/register")
    }

    const handleChange = (e) => {
        const { id, value } = e.target
        setState(preState => ({ ...preState, [id] : value }))
    }

    return (
        <div className={ styles.center }>
            <InputForm id="email" type="text" title="Email" value={ state.email } inputRef={ inputRef } onChange={ handleChange }/>
            <div className={ styles.margin }>
                <InputForm id="password" type="password" title="Password" value={ state.password } onChange={ handleChange }/>
            </div>
            <div className={ styles.margin } >
                <InputBtn name="Login" disabled={ isDisabledBtn() } onClick={ handleSubmitClick } />
            </div>
            <div className={ styles.margin } >
                <InputBtn name="Register Page" onClick={ toRegisterBtn } />
            </div>
        </div>
    )
}

export { InputForm, Login, InputBtn };