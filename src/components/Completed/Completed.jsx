import React from "react"
import { ToDoLists } from "../ToDoLists"

class Completed extends React.Component{
    render(){
        return (
            <div className="inputTasksForm">
                <ToDoLists page="completed"/>
            </div>
        )
    }
}

export { Completed }