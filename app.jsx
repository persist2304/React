import React from 'react';
import ReactDOM from 'react-dom';

class CheckButton extends React.Component{

    writeButton(){
        console.log('click it');
    }

    render(){
        return <input type="button" onClick={this.writeButton} value="點我看 console"/>
    }
}
ReactDOM.render(<CheckButton/>,document.getElementById('root'))



