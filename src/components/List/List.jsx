import React from 'react'
import { InputTask } from "../InputTask"
import { editToDoList } from "../../action/todoList"
import { connect } from "react-redux"
import styles from "../../index.scss"

class ConnectList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            important: this.props.listData.important,
            complete: this.props.listData.complete,
            editTasks: null
        }
        this._changeState = this._changeState.bind(this)
        this._openEdit = this._openEdit.bind(this)
        this._closeEdit = this._closeEdit.bind(this)
        this._updateToDoList = this._updateToDoList.bind(this)
        this._list = React.createRef()
    }

    _updateToDoList(){
        let updateList = {...this.props.listData}
        updateList = {...updateList,
            complete: this.state.complete,
            important: this.state.important}
        this.props.editToDoList(updateList)
    }
    
    _changeState(type){
        switch(type){
            case "complete": {
                this.setState({ complete: window.event.target.checked }, this._updateToDoList)
                break;
            }
            case "important": {
                if (this.state.important == "")
                    this.setState({ important: "Y" }, this._updateToDoList)
                else
                    this.setState({ important: "" }, this._updateToDoList)
                break;
            }
        }
    }

    _openEdit(){
        console.log('111',this.props.listData)
        console.log('222',this.props.editToDoList)


        if(event.target.className.indexOf('fa-star') === -1 && event.target.className.indexOf("taskChk") === -1) {
            this._list.current.style.display = "none"
            this.setState({
                editTasks: (<InputTask listData={this.props.listData} closeAdd={this._closeEdit}
                                       changeState={this._changeState.bind(this)} editToDoList={this.props.editToDoList} />)
            })
        }
    }

    _closeEdit(){
        this._list.current.style.display = ""
        this.setState({
            editTasks: null
        })
    }
    render(){
        return (
            <div className={ styles.listBlock }>
                <div className={ styles.list + (this.state.important == "Y" ? " " + styles.important : "  " )} onClick={this._openEdit} ref={this._list}>
                    <input type="checkbox" className={ styles.taskChk } checked={this.state.complete}
                           onChange={this._changeState.bind(this,'complete')}/>

                    <input type="text" className={ styles.taskTitle +
                            (this.state.important == "Y" ? " " + styles.important : " ") +
                            (this.state.complete ? " complete": " ")}
                           value={this.props.listData.name}/>

                    <i className={ styles + this.state.important == "Y" ?
                        "fas fa-star fa-lg" + styles.icon + " " + styles.iconImportant:
                        "far fa-star fa-lg" + styles.icon }
                       onClick={this._changeState.bind(this,"important")}></i>

                    {/*<i className="fas fa-pen fa-lg icon"></i>*/}
                    <i className={"fas fa-pen fa-lg" + styles.icon} ></i>
                    <div className={ styles.listIcon }>
                        {this.props.listData.date != ''?
                            <i className={"fa fa-calendar-alt" + " " + styles.icon }></i>: " "}
                        {this.props.listData.date != ""? ` ${this.props.listData.date.substring(5).replace(/-/gi,'/')}` : ""}

                        {this.props.listData.file != ""?
                            <i className="fas fa-file icon"></i>: " "}

                        {this.props.listData.commit != ""? <i className="far fa-comment-dots icon"></i>: " "}

                    </div>
                </div>
                <div>
                    {this.state.editTasks}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editToDoList: toDoList => dispatch(editToDoList(toDoList))
    }
}

const List = connect(null, mapDispatchToProps)(ConnectList)

export {List}