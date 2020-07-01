import React from 'react';
import ReactDOM from 'react-dom';

class HelloTitle extends React.Component{

    componentDidUpdate(){
        console.log(`這次是${this.props.title}`)
    }

    render(){

        let titleName = this.props.title == '先生'?
            <h1>{this.props.title}!你好</h1>:
            null


        return <div>{titleName}</div>
    }
}

class InputGender extends React.Component{
    constructor(props){
        super(props)
        this.state = ({gender: 'M'})
        this.changeGender = this.changeGender.bind(this)
    }

    changeGender(){
        console.log(event.target)

        this.setState({gender: event.target.value})
    }

    componentDidUpdate(){
        console.log(`state目前狀態是：${this.state.gender}`)
    }

    render(){

        let title;
        this.state.gender == 'M'?
            title = <HelloTitle title="先生"/>:
            title = <HelloTitle title="小姐"/>

        return (
            <div>
                {title}
                <select onChange={this.changeGender.bind(this)}>
                    <option value="M">male</option>
                    <option value="W">Female</option>
                </select>
            </div>

        )
    }
}
ReactDOM.render(<InputGender/>,document.getElementById('root'));

