import React from 'react'
import {InputTask} from '../InputTask'
import styles from "../../index.scss"

class AddTask extends React.Component{
    openAdd(){
        document.getElementById(styles.addTask).style.display = 'none'
        document.getElementById(styles.inputTask).style.display = ''
    }

    closeAdd(){
        document.getElementById(styles.addTask).style.display = ''
        document.getElementById(styles.inputTask).style.display = 'none'
    }

    render(){
        return (
            <div>
                <div>
                    <input id={ styles.addTask }
                           value=' + Add Task'
                           onClick={this.openAdd}/>
                </div>
                <div id={ styles.inputTask } style={{display: 'none'}}>
                    <InputTask closeAdd={this.closeAdd}/>
                </div>
            </div>
        )
    }
}

export {AddTask}