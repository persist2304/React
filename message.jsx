import React from 'react'
import ReactDOM from 'react-dom'
import {Provider, connect} from 'react-redux'
import {store, addMessage} from './index.js'

const mapDispatchToProps = dispatch => {
    return {
        addMessage: article => dispatch(addMessage(article))
    }
}

class InputMessage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: ``,
            message: ``
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
            message: ``
        })
    }

    _submitMessage(){
        let messageData = {
            key: ``,
            name: this.state.name,
            message: this.state.message
        }
        this.props.addMessage(messageData)
        this._clearMessage()
    }

    render(){
        return(
            <div>
                暱稱：<input type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this._changeState}
                     />
                <br/><br/>
                訊息：<br/>
                <textarea name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          value={this.state.message}
                          onChange={this._changeState}
                >
                </textarea>
                <input type="button"
                       value="送出留言"
                       onClick={this._submitMessage}
                />
            </div>
        )
    }
}

class MessageList extends React.Component{
    render(){
        let message = this.props.data.map(item => {
            return (
                <li key={item.key}>
                    {item.name}:{item.message}
                </li>
            )
        })
        return (
            <ul>
                {message}
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return { data: state.message}
}


class ConnectMessageForm extends React.Component{
    render(){
        return (
            <div>
                <InputMessage addMessage={this.props.addMessage}/>
                <MessageList data={this.props.data}/>
            </div>
        )
    }
}
const MessageForm = connect(mapStateToProps, mapDispatchToProps)(ConnectMessageForm)

ReactDOM.render(<Provider store={store}>
                    <MessageForm/>
                </Provider>,
                document.getElementById('root'))

