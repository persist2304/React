import React,{ useState } from "react"
import { InputForm, InputBtn } from "../Login"
import styles from "../../style/Login.scss"
import axios from 'axios';
import { API_BASE_URL, ACCESS_TOKEN_NAME } from '../../constants/apiConstants'
import { useHistory } from "react-router-dom"

const Register = (props) => {
    //建立初始值
    const [state, setState] = useState({ email: "", password: "", confirmPassword: ""})

    //使用 preState 直接將 id 取得值覆蓋上去，就不用每個值都寫一個 useState
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(preState => ({ ...preState, [id] : value }))
    }

    //驗證密碼是否一樣，一樣則呼叫 sendDetailToServer，錯誤則顯示錯誤訊息。
    const handleSubmitClick = (e) => {
        console.log("handleSubmitClick")
        e.preventDefault()
        const { showError } = props
        if(state.password === state.confirmPassword) {
            sendDetailToServer()
        } else {
            showError("Passwords do not match")
        }
    }

    //將資料傳給 Server。
    const sendDetailToServer = () => {
        console.log('sendDetailToServer')
        const { showError } = props
        //先確定 email 和 password 都有值，沒有的話則會顯示錯誤訊息。
        if(state.email.length && state.password.length) {
            showError(null)
            //將目前的值存在 payload 內。
            const payload = { "email" : state.email, "password" : state.password }
            //傳值到後台
            axios.post(API_BASE_URL+'/adduser', payload)
                //等待後台回應
                .then(function(response){
                    let getNewCount = response.data.data.length-1
                    console.log('getNewCount', getNewCount)
                    console.log('resValue', response.data.data[getNewCount]._id);

                    //如果回應是 200，則去把值更改，並呼叫 redirectToHome，不顯示錯誤
                    if(response.status === 200){
                        // setState(prevState => ({ ...prevState, "successMessage" : "Registration successful. Redirecting to home page..'"}))
                        localStorage.setItem(ACCESS_TOKEN_NAME, response.data.data[getNewCount]._id)
                        redirectToHome();
                        showError(null)
                    } else {
                        showError("Some error ocurred")
                    }
                })
                //如果不是的話就印出錯誤
                .catch(function(error){
                    console.log(error)
                })
        } else {
            showError("Please enter valid username and password")
        }
    }

    let history = useHistory()

    const redirectToHome = () => {
        history.push("/login")
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