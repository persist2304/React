import React from 'react'
import {AddTask} from '../AddTask'
import { ToDoLists } from "../ToDoLists"

class MyTasks extends React.Component{
    render(){
        return (
            <div className='inputTasksForm'>
                <AddTask/>
                <ToDoLists/>
            </div>
        )
    }
}

export {MyTasks}