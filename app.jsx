import React from 'react';
import ReactDOM from 'react-dom';

class EasyForm extends React.Component{

    constructor(props){
        super(props)
        this.state = ({name: ``})
        this._changeState = this._changeState.bind(this)
        this._submitForm = this._submitForm.bind(this)
    }

    _changeState(){
        console.log(`輸入:${event.target.value}`)
        this.setState({name: event.target.value})
    }

    _submitForm(){
        console.log(`現在輸入是${this.state.name}`)
        event.preventDefault()
    }

    render(){
        const easyForm = (
                <form onSubmit={this._submitForm}>
                    <label>Name:</label>
                    <input type="text"
                           id="name"
                           name="name"
                           onChange={this._changeState}
                           value={this.state.name}
                    />
                    <br/>
                    <input type="submit"
                           value="submit"
                    />
                </form>
        )
        return(
            <div>
                {easyForm}
            </div>
        )
    }
}
ReactDOM.render(<EasyForm/>,document.getElementById('root'));