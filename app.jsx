import React from 'react';
import ReactDOM from 'react-dom';

//判斷溫度是否達沸點
class Title extends React.Component {
    render(){
        //溫度100度以上就到達沸點
        return <h1>{(this.props.temperature>=100 ? '達到沸點!!!':'未到沸點...')}</h1>
    }
}

class InputTemperature extends React.Component{
    render(){
        return (
            <div>
                <span>目前輸入溫度是：{this.props.temperature}度{this.props.type}</span>
                <input type="text"
                       name="temperature"
                       value={this.props.temperature}
                       onChange={this.props.changeState}
                />度{this.props.type}
            </div>
        )
    }
}

class EasyForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            temperature : 0,
            type: ``,
        })
        this.changeState = this.changeState.bind(this)
    }

    toConvert(temperature,type){
        return type == 'C'?
            (temperature - 32) * 5 / 9:
            (temperature * 9 / 5) + 32
    }

    changeState(type){
        let temperature = window.event.target.value
        this.setState({
            [event.target.name]: temperature,
            type: type
        })
    }

    render() {
        let temperature_C = this.state.type == "F"?
            this.toConvert(this.state.temperature,'C'):
            this.state.temperature
        let temperature_F = this.state.type == "C"?
            this.toConvert(this.state.temperature,'F'):
            this.state.temperature
        return(
            <div>
                <Title temperature={temperature_C} />
                <InputTemperature type="C"
                                  temperature={temperature_C}
                                  changeState={this.changeState.bind(this,'C')}
                />
                <InputTemperature type="F"
                                  temperature={temperature_F}
                                  changeState={this.changeState.bind(this,'F')}
                />
            </div>
        )
    }
}

ReactDOM.render(<EasyForm/>, document.getElementById('root'))

