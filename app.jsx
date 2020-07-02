import React from 'react';
import ReactDOM from 'react-dom';

class EasyForm extends React.Component{

    constructor(props){
        super(props)
        this._submitForm = this._submitForm.bind(this)
        this._filebox = React.createRef()
    }
    _submitForm(){
        console.log(`選擇檔案為:${this._filebox.current.files[0].name}`)
        event.preventDefault()
    }

    render(){
        const uploadFileTitle = (
            <h1>上傳檔案：</h1>
        )
        const submit = (
            <input type="submit" value="submitForm"/>
        )
        const uploadFile = (
            <input type="file" ref={this._filebox}/>
        )
        return (
            <form onSubmit={this._submitForm}>
                {uploadFileTitle}
                {uploadFile}
                <br/>
                {submit}
            </form>
        )
    }
}
ReactDOM.render(<EasyForm/>,document.getElementById('root'));