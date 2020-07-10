import React from 'react'
import {connect} from 'react-redux'
import {addMessage} from '../../actions'

class ConnectInputMessage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name : ``,
            message : ``
        }
        this._changeState = this._changeState.bind(this)
        this._clearMessage = this._clearMessage.bind(this)
        this._submitMessage = this._submitMessage.bind(this)
    }
    _changeState(){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    _clearMessage(){
        this.setState({
            name: ``,
            message: ``,
        })
    }
    _submitMessage(){
        let messageData = {
            name: this.state.name,
            message: this.state.message
        }
        this.props.addMessage(messageData)
        this._clearMessage()
    }
    render(){
        return (
            <div>
                暱稱：<input type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this._changeState}
                     />
                <br/>
                訊息：<textarea name="message"
                               value={this.state.message}
                               onChange={this._changeState}
                     >
                </textarea>
                <input type="button"
                       value='送出留言'
                       onClick={this._submitMessage}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addMessage: message => {dispatch(addMessage(message))}
    }
}

const InputMessage = connect(null, mapDispatchToProps)(ConnectInputMessage)

export {InputMessage}