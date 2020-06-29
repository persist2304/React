import React from 'react';
import ReactDOM from 'react-dom';

class ShowTime extends React.Component{
    constructor(props){
        super(props)
        this.state = {time: new Date().toLocaleTimeString()}
    }

    componentDidMount(){
        const upTime = () => {
            this.setState({time: new Date().toLocaleTimeString()})
        }
        setInterval(upTime,2000)
    }

    componentDidUpdate(){
        console.log(`大概兩秒的時候一直更新${this.state.time}`);
    }

    componentWillUnmount(){
        console.log(`移除套件的時候大概是:${this.state.time}`);
    }

    render(){
        return <h1>現在時間是：{this.state.time}</h1>
    }
}

ReactDOM.render(<ShowTime />,document.getElementById('root'))

const removeComponent = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
}

setTimeout(removeComponent,5000);