import React from "react"
import { ToDoLists } from "../ToDoLists"

class InProgress extends React.Component{
    render(){
        return (
            <div className="inputTasksForm">
                <ToDoLists page="progress"/>
            </div>
        )
    }
}

export {InProgress}