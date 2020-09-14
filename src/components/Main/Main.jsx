import React from 'react'
import {MyTasks} from '../MyTasks'
import {HashRouter, Route} from 'react-router-dom'
import {store} from '../../store'
import {addTodoList} from '../../action'
import {Provider} from 'react-redux'
import { InProgress } from "../InProgress"
import { Completed } from "../Completed"
import { Home } from "../Home"
import { NavBar } from "../NavBar"

class Main extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <HashRouter>
                    <NavBar/>
                    <Route exact path="/" component={Home}/>
                    <div className="alignCenter">
                        <Route exact path="/ToDoList" component={MyTasks} />
                        <Route exact path="/inProgress" component={InProgress} />
                        <Route exact path="/completed" component={Completed} />
                    </div>
                </HashRouter>
            </Provider>
        )
    }
}

window.store = store

export {Main}