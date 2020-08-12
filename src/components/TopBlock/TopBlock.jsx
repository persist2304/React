import React from 'react'
import {BookMark} from '../BookMark'

class TopBlock extends React.Component{
    render(){
        return (
            <div id="topBlock">
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