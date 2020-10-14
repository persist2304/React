import React from 'react';
import { ACCESS_TOKEN_NAME } from '../../constants/apiConstants';
import { Redirect } from 'react-router-dom'
const DashBoard = () => {

    const handleSubmitClick = (e) => {
        e.preventDefault()
        console.log('handleSubmitClick')
        localStorage.removeItem(ACCESS_TOKEN_NAME);
        <Redirect to ="/login"/>
    }
    return(
        <div>
            DashBoard Page Content...
            <button name="LogOut" onClick={ handleSubmitClick }>LogOut</button>
        </div>
    )
}

export default DashBoard;