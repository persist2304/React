import React from 'react'
import {AddTask} from '../AddTask'
import { ToDoLists } from "../TodoLists"
import {TopBlock} from '../TopBlock'

class MyTasks extends React.Component{
    render(){
        return (
            <div>
                <TopBlock />
                <div className='inputTasksForm'>
                    <AddTask/>
                    <ToDoLists/>
                </div>
            </div>
        )
    }
}

export {MyTasks}