import React from 'react'
import {MyTasks} from '../MyTasks'
import { Route } from 'react-router-dom'
import store from '../../store/todoList'
import { addTodoList } from '../../action/todoList'
import { InProgress } from "../InProgress"
import { Completed } from "../Completed"
import { Home } from "../Home"
import { NavBar } from "../NavBar"

class Main extends React.Component{
    render(){
        return (
            <div>
                <NavBar/>
                    <Route exact path="/" component={Home}/>
                <div className="alignCenter">
                    <Route exact path="/ToDoList" component={MyTasks} />
                    <Route exact path="/inProgress" component={InProgress} />
                    <Route exact path="/completed" component={Completed} />
                </div>
            </div>
        )
    }
}

window.store = store

export {Main}