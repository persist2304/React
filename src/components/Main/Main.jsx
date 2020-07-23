import React from 'react'
import {TopBlock} from '../TopBlock'
import {MyTasks} from '../MyTasks'
import {HashRouter, Route} from 'react-router-dom'

import {todoListStore} from '../store'
import {addTodoList} from '../actions'

class Main extends React.Component{
    render(){
        return (
            <HashRouter>
                <TopBlock/>
                <Route exact path='/'
                       component={MyTasks} />
            </HashRouter>
        )
    }
}

window.store = todoListStore
window.addTodoList = addTodoList

export {Main}