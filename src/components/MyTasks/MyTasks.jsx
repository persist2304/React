import React from 'react'
import {AddTask} from '../AddTask'
import { ToDoLists } from "../TodoLists"

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