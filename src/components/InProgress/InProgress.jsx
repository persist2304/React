import React from "react"
import { ToDoLists } from "../ToDoLists"
import {TopBlock} from '../TopBlock'
import styles from "../../index.scss"

class InProgress extends React.Component{
    render(){
        return (
            <div>
                <TopBlock/>
                <div className={ styles.inputTasksForm }>
                    <ToDoLists page="progress"/>
                </div>
            </div>
        )
    }
}

export {InProgress}