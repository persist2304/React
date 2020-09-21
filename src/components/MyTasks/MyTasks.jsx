import React from 'react'
import {AddTask} from '../AddTask'
import { ToDoLists } from "../TodoLists"
import {TopBlock} from '../TopBlock'
import styles from "../../index.scss"

class MyTasks extends React.Component{
    render(){
        return (
            <div>
                <TopBlock />
                <div className={ styles.inputTasksForm }>
                    <AddTask/>
                    <ToDoLists/>
                </div>
            </div>
        )
    }
}

export {MyTasks}