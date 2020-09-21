import React from 'react'
import {Route, Link} from 'react-router-dom'
import styles from "../../index.scss"

class BookMark extends React.Component{
    render(){
        return (
            <Route exact path={this.props.to}
                   children={props => {
                       let className = styles.bookMark
                       if(this.props.isToDoList){
                           {props.match?
                               className += " " + styles.select_bookMark:
                               className = styles.bookMark}
                       }
                           return (
                               <Link to={this.props.to}>
                                   <button className={ this.props.isToDoList? className : this.props.className }>{ this.props.name }</button>
                               </Link>
                           )
                   }}/>
        )
    }
}

export {BookMark}