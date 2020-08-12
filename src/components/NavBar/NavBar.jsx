import React from "react"
import { BookMark } from "../BookMark"

class NavBar extends React.Component{
    render(){
        return (
            <div id="NavBar">
                <BookMark to="/ToDoList"
                          name="ToDoList"
                          className="HomeBookMark"/>
            </div>
        )
    }
}

export { NavBar }