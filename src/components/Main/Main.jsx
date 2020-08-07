import React from 'react'
import {TopBlock} from '../TopBlock'
import {MyTasks} from '../MyTasks'
import {HashRouter, Route} from 'react-router-dom'
import {todoListStore} from '../store'
import {addTodoList} from '../actions'
import {Provider} from 'react-redux'
import { InProgress } from "../InProgress"
import { Completed } from "../Completed"

class Main extends React.Component{
    render(){
        return (
            <Provider store={todoListStore}>
                <HashRouter>
                    <div className="alignCenter">
                        <TopBlock />
                        <Route exact path="/" component={MyTasks} />
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