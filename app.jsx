import React from 'react';
import ReactDOM from 'react-dom';

class AddButton extends React.Component{
    constructor(props){
        super(props)
        this.state = ({clickCount: 0})
        this.addCount = this.addCount.bind(this)
    }

    addCount(count){
        console.log(`每次增加:${count}`)
        this.setState({clickCount: this.state.clickCount+count},()=>{console.log(`點惹:${this.state.clickCount}下`)})
        console.log(`點惹:${this.state.clickCount}下`)

    }

    componentDidUpdate(){
        console.log(`Update點惹:${this.state.clickCount}下`)
    }

    render(){
        return <input type="button"
                      onClick={this.addCount.bind(this,1)}
                      value="click me"/>
    }
}
ReactDOM.render(<AddButton/>,document.getElementById('root'));



