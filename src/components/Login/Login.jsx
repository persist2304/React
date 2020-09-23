import React, { useState, useEffect, useRef } from "react"
import { useHistory } from "react-router-dom"
import styles from "../../style/Login.scss"

const InputForm = (props) => {
    const { type, title, inputValue, setInputValue, inputRef } = props
    return (
        <div>
            <div className={ styles.font }> { title } </div>
            <input type={ type } className={ styles.padding } onChange={(e) => { setInputValue(e.target.value) }} value={ inputValue } ref={ inputRef }/>
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
    const [inputValue, setInputValue] = useState("");
    const [inputPasswordValue, setInputPasswordValue] = useState("");
    const isDisabledBtn = () => {
        return (
            inputValue.length == 0 || inputPasswordValue.length == 0 ? true : false
        )
    }

    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus();
    },[])

    const clickBtn = () => {
        event.preventDefault();
        console.log('click');
    }


    let history = useHistory()

    const toRegisterBtn = () => {
        event.preventDefault();
        history.push("/register")
    }

    return (
        <div className={ styles.center }>
            <InputForm type="text" title="Account" inputValue={ inputValue } setInputValue={ setInputValue } inputRef={ inputRef }/>
            <div className={ styles.margin }>
                <InputForm type="password" title="Password" inputValue={ inputPasswordValue } setInputValue={ setInputPasswordValue }/>
            </div>
            <div className={ styles.margin } >
                <InputBtn name="Login" disabled={ isDisabledBtn() } onClick={ clickBtn } />
            </div>
            <div className={ styles.margin } >
                <InputBtn name="Register Page" onClick={ toRegisterBtn } />
            </div>

        </div>
    )
}

export default Login;