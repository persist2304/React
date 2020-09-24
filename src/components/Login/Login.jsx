import React, { useState, useEffect, useRef } from "react"
import { useHistory } from "react-router-dom"
import styles from "../../style/Login.scss"

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

    const clickBtn = () => {
        event.preventDefault();
        console.log('click');
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
                <InputBtn name="Login" disabled={ isDisabledBtn() } onClick={ clickBtn } />
            </div>
            <div className={ styles.margin } >
                <InputBtn name="Register Page" onClick={ toRegisterBtn } />
            </div>

        </div>
    )
}

export { InputForm, Login, InputBtn };