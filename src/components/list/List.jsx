import React from 'react'

class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            important: this.props.listData.important,
            complete: this.props.listData.complete
        }
        this._changeState = this._changeState.bind(this)
    }


    _changeState(type){
        switch(type){
            case "complete": {
                this.setState({ complete: window.event.target.checked })
                break;
            }
            case "important": {
                if (this.state.important == "")
                    this.setState({ important: "Y" })
                else
                    this.setState({ important: "" })
                break;
            }
        }
    }

    render(){
        return (
            <div className="listBlock">

                <div className={" list " + (this.state.important == "Y" ? " important": "  " )}>
                    <input type="checkbox" className="taskChk" checked={this.state.complete}
                           onChange={this._changeState.bind(this,'complete')}/>

                    <input type="text" className={ "taskTitle" +
                            (this.state.important == "Y" ?" important": " ") +
                            (this.state.complete ? " complete": " ")}
                           value={this.props.listData.name}/>
                    
                    <i className={this.state.important == "Y" ?
                        "fas fa-star fa-lg icon iconImportant":
                        "far fa-star fa-lg icon"}
                       onClick={this._changeState.bind(this,"important")}></i>

                    <i className="fas fa-pen fa-lg icon"></i>

                    <div className="listIcon">
                        {this.props.listData.date != ''?
                            <i className="fa fa-calendar-alt icon"></i>: " "}
                        {this.props.listData.date != ""? ` ${this.props.listData.date.substring(5).replace(/-/gi,'/')}` : ""}

                        {this.props.listData.file != ""?
                            <i className="fas fa-file icon"></i>: " "}

                        {this.props.listData.commit != ""? <i className="far fa-comment-dots icon"></i>: " "}

                    </div>
                </div>

            </div>
        )
    }
}

export {List}