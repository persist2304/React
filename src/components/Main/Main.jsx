import React from 'react'
import {TopBlock} from '../TopBlock'
import {MyTasks} from '../MyTasks'
import {HashRouter, Route} from 'react-router-dom'
import {todoListStore} from '../store'
import {addTodoList} from '../actions'
import {Provider} from 'react-redux'

class Main extends React.Component{
    render(){
        return (
            <Provider store={todoListStore}>
                <HashRouter>
                    <TopBlock/>
                    <Route exact path='/' component={MyTasks} />
                </HashRouter>
            </Provider>
        )
    }
}

window.store = todoListStore

export {Main}