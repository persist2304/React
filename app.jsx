import React from 'react';
import ReactDOM from 'react-dom';

class InputGender extends React.Component{
    constructor(props){
        super(props)
        this.state = ({gender: ''})
        this.changeGender = this.changeGender.bind(this)
    }

    changeGender(strA){
        console.log(event.target)

        this.setState({gender: event.target.value})
    }

    componentDidUpdate(){
        console.log(`state目前狀態是：${this.state.gender}`)
    }

    render(){
        return (
        <select onChange={this.changeGender.bind(this)}>
            <option value="M">male</option>
            <option value="W">Female</option>
        </select>
        )
    }
}
ReactDOM.render(<InputGender/>,document.getElementById('root'));

