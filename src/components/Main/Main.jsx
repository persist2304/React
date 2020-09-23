import React from 'react'
import { NavBar } from "../NavBar"
import store from '../../store/index'
import ToDo from "../ToDo"

class Main extends React.Component{
    render(){
        return (
            <div>
                <NavBar/>
                <ToDo/>
            </div>
        )
    }
}

window.store = store;

export {Main}