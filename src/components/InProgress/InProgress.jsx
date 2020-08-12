import React from "react"
import { ToDoLists } from "../ToDoLists"
import {TopBlock} from '../TopBlock'

class InProgress extends React.Component{
    render(){
        return (
            <div>
                <TopBlock/>
                <div className="inputTasksForm">
                    <ToDoLists page="progress"/>
                </div>
            </div>
        )
    }
}

export {InProgress}