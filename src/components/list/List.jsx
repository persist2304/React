import React from 'react'
import { InputTask } from "../InputTask"
import { editToDoList } from "../actions"
import { connect } from "react-redux"

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
            <div className="listBlock">

                <div className={" list " + (this.state.important == "Y" ? " important": "  " )} onClick={this._openEdit} ref={this._list}>
                    <input type="checkbox" className="taskChk" checked={this.state.complete}
                           onChange={this._changeState.bind(this,'complete')}/>

                    <input type="text" className={ "taskTitle" +
                            (this.state.important == "Y" ?" important": " ") +
                            (this.state.complete ? " complete": " ")}
                           value={this.props.listData.name}/>

                    <i className={this.state.important == "Y" ?
                        "fas fa-star fa-lg icon iconImportant":
                        "far fa-star fa-lg icon"}
                       onClick={this._changeState.bind(this,"important")}></i>

                    <i className="fas fa-pen fa-lg icon"></i>

                    <div className="listIcon">
                        {this.props.listData.date != ''?
                            <i className="fa fa-calendar-alt icon"></i>: " "}
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