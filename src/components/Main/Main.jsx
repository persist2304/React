import React from 'react'
import {MyTasks} from '../MyTasks'
import {HashRouter, Route} from 'react-router-dom'
import {todoListStore} from '../store'
import {addTodoList} from '../actions'
import {Provider} from 'react-redux'
import { InProgress } from "../InProgress"
import { Completed } from "../Completed"
import { Home } from "../Home"

class Main extends React.Component{
    render(){
        return (
            <Provider store={todoListStore}>
                <HashRouter>
                        <Route exact paht="/" component={Home}/>
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

window.store = todoListStore

export {Main}