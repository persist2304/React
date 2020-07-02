import React from 'react';
import ReactDOM from 'react-dom';

class EasyForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            lists: [
                {id: '01',listName: '吃飯',check: false},
                {id: '02',listName: '睡覺',check: false},
                {id: '03',listName: '打東東',check: true}
            ]
        }
        this._changeState = this._changeState.bind(this)
        this._submitForm = this._submitForm.bind(this)
    }

    _changeState(index){
        let arrList = this.state.lists
        arrList[index].check == true?
            arrList[index].check = false:
            arrList[index].check = true
        this.setState({lists: arrList})
    }

    _submitForm(){
        let status = `目前做了`
        this.state.lists.map(list =>
            list.check?
                status += `${list.listName}`:
                ``
        )
        console.log(status);
        event.preventDefault()
    }

    render(){
        let lists = this.state.lists.map((list,index) =>
            <div key={list.id}>
                <input type="checkbox"
                       checked={list.check}
                       onChange={this._changeState.bind(this,index)}
                       key={list.id}
                />
                <label>{list.listName}</label>
            </div>
        )
        const checkBox = (
            <div>
                <label>daily list:</label>
                {lists}
                <br/>
            </div>
        )
        const easyForm = (
                <form onSubmit={this._submitForm}>
                    <input type="submit" value="submit"/>
                </form>
        )
        return(
            <div>
                {checkBox}
                {easyForm}
            </div>
        )
    }
}
ReactDOM.render(<EasyForm/>,document.getElementById('root'));