import React from 'react'
import {BookMark} from '../BookMark'
import styles from "../../index.scss"

class TopBlock extends React.Component{
    render(){
        return (
            <div id={ styles.topBlock }>
                <BookMark to='/ToDoList'
                          name='My Tasks'
                          isToDoList={true}/>
                <BookMark to='/inProgress'
                          name='In Progress'
                          isToDoList={true}/>
                <BookMark to='/completed'
                          name='Completed'
                          isToDoList={true}  />
            </div>

        )
    }
}

export {TopBlock}