import React from "react"
import { InputTasksForm } from "../InputTasksForm"
import {addTodoList} from '../actions'
import {connect} from 'react-redux'

class ConnectInputTask extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: '', name: '', date: '',
            time: '', file: '', commit: '',
            important: '', complete: false
        }
        this.filebox = React.createRef()
        this._changeState = this._changeState.bind(this)
        this._tagImportant = this._tagImportant.bind(this)
        this._submitTodo = this._submitTodo.bind(this)
    }
    _changeState(){
        let value = event.target.value
        if (event.target.name == 'file'){
            value = value.substring(value.lastIndexOf('\\')+1)
        } else if (event.target.name === 'complete'){
            value = event.target.checked
        }
        this.setState({
            [event.target.name]: value
        })

    }
    _tagImportant(){
        if (this.state.important == ''){
            this.setState({
                important: 'Y'
            })
        } else {
            this.setState({
                important: ''
            })
        }
    }
    _submitTodo(){
        if (this.state.name === ''){
            alert('代辦事項名稱未輸入')
        } else {
            console.log(this.state)
            this.props.addTodoList(this.state)
            alert('successful')
            this.props.closeAdd()
            this.setState({
                id: '',name: '',
                date: '',time: '',
                file: '',commit: '',
                important: '',complete: false
            })
            this.filebox.current.value = ''
        }
    }
    render() {
        return (
            <div>
                <div className={this.state.important == 'Y'?
                    'important inputTaskTitle':
                    ' inputTaskTitle'}>
                        <input name='complete' type="checkbox"
                               className="taskChk" checked={this.state.complete}
                               onChange={this._changeState} />
                        <input name='name' type="text"
                               className={(this.state.important == 'Y'?'important taskTitle': 'taskTitle') + (this.state.complete ? ' complete': '')}
                               value={this.state.name} onChange={this._changeState}
                               placeholder="Type Something Here…"/>
                        <i className={this.state.important == 'Y'?'far fa-star fa-lg icon iconImportant': 'far fa-star fa-lg icon'} onClick={this._tagImportant}></i>
                        <i className="fas fa-pen fa-lg icon icon_edit"></i>

                </div>
                <InputTasksForm closeAdd={this.props.closeAdd}
                                stateData={this.state}
                                _changeState={this._changeState}
                                _submitTodo={this._submitTodo}
                                filebox={this.filebox}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodoList: todoList => dispatch(addTodoList(todoList))
    }
}

const InputTask = connect(null, mapDispatchToProps)(ConnectInputTask)

export { InputTask }