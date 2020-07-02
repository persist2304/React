import React from 'react';
import ReactDOM from 'react-dom';

class EasyForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: ``,
            gender: `M`,
            introduction:``,

        }
        this._changeState = this._changeState.bind(this)
        this._submitForm = this._submitForm.bind(this)
    }

    _changeState(){
        let changeName = event.target.name
        this.setState({[changeName]: event.target.value})
    }

    _submitForm(){
        console.log(`現在name是${this.state.name}`)
        console.log(`現在gender是${this.state.gender}`)
        console.log(`現在introduction是${this.state.introduction}`)
        event.preventDefault()
    }

    render(){
        const name = (
            <div>
                <label>Name:</label>
                <input type="text"
                       id="name"
                       name="name"
                       onChange={this._changeState}
                       value={this.state.name}
                />
            </div>
        )

        const gender = (
            <div>
                <label>gender:</label>
                <select name="gender"
                        id="gender"
                        onChange={this._changeState}
                        value={this.state.gender}
                >
                        <option value="M">male</option>
                        <option value="W">female</option>
                </select>
            </div>
        )

        const textarea = (
            <div>
                <label>introduction:</label>
                <br/>
                <textarea name="introduction"
                          id="introduction"
                          cols="30"
                          rows="10"
                          onChange={this._changeState}
                          value={this.state.introduction}
                >
                </textarea>
            </div>
        )

        const easyForm = (
                <form onSubmit={this._submitForm}>
                    {name}
                    {gender}
                    {textarea}
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