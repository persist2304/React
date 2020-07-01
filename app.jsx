import React from 'react';
import ReactDOM from 'react-dom';

class TodoList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let lists = this.props.objLists.map(list =>{
            return <li key={list.id}>{list.list}</li>
        })

        return (
            <ul>
                {lists}
            </ul>
        )
    }
}

let objLists = [
    {id:'a',list:'打文章'},
    {id:'b',list:'寫程式'},
    {id:'c',list:'耍廢'}
]

ReactDOM.render(<TodoList objLists={objLists}/>,document.getElementById('root'));

