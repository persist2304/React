import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect, Route } from 'react-router-dom'
import { API_BASE_URL, ACCESS_TOKEN_NAME } from '../constants/apiConstants';

const PrivateRoute = ({ component: Component, ...rest }) => {

    let isToken = localStorage.getItem(ACCESS_TOKEN_NAME);
    // console.log(isToken);





    let loggedIn = false;



    // if(isToken){
    //     loggedIn = true;
    // }

    // console.log("NOWLOGIN??", loggedIn)

    // if(!isToken){
    //     loggedIn = false
    // }

    // console.log('check', !loggedIn)


    useEffect(() => {
        // console.log('run')
        if(isToken){
            loggedIn = true;
        }
    }, [])

    // useEffect(() => {
    //     axios.get(API_BASE_URL + '/userlist')
    //         .then((res) => {
    //             if(res.status !== 200){
    //                 loggedIn = false
    //             }
    //         })
    //         .catch((err) => {
    //             redirectToLogin()
    //             loggedIn = false
    //         })
    // })
    return (
        <div>
            <Route {...rest} render={ props => (loggedIn ? <Component {...props}/> : <Redirect to ="/login"/> ) } />
        </div>


    )
}




// const PrivateRoute = ({ children, ...rest }) => {
//     console.log('PrivateRoute', children)
//     return (
//         <Route { ...rest } render={ ({ location }) => {
//             localStorage.getItem(ACCESS_TOKEN_NAME) ? (children) : (<Redirect to={ { pathname:'/login', state: { from: location } } }/>)
//         }}/>
//     )
// }

export default PrivateRoute;