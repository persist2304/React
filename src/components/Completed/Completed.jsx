import React from "react"
import { ToDoLists } from "../ToDoLists"
import {TopBlock} from '../TopBlock'

class Completed extends React.Component{
    render(){
        return (
            <div>
                <TopBlock/>
                <div className="inputTasksForm">
                    <ToDoLists page="completed"/>
                </div>
            </div>
        )
    }
}

export { Completed }