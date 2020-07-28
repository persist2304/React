import React from "react"
import { InputName } from "../InputName"

class InputTasksForm extends React.Component {
    render() {
        return (
            <div className="inputTasksForm">
                <div className="inputTask">
                    <InputName className="fas fa-calendar-alt" inputName="Deadline" />
                    <div className="inputForm">
                        <input name='date' type="date" class="inputStyle inputDateTime"
                               value={this.props.stateData.date} onChange={this.props._changeState}/>
                        &nbsp;&nbsp;
                        <input name='time' type="time" class="inputStyle inputDateTime"
                               value={this.props.stateData.time} onChange={this.props._changeState}/>
                    </div>
                    <InputName className="fas fa-file" inputName="File" />
                    <div className="inputForm">
                        <input name='file' type="file" class="inputStyle" ref={this.props.filebox}
                               onChange={this.props._changeState} /><br/>
                        <span className="inputStyle">{this.props.stateData.file}</span>
                    </div>
                    <InputName className="far fa-comment-dots" inputName="Comment" />
                    <div className="inputForm">
                        <textarea name="commit" rows="7" cols="55" class="inputStyle"
                                  value={this.props.stateData.commit} onChange={this.props._changeState}>
                            {this.props.comment}
                        </textarea>
                    </div>
                </div>
                <div>
                    <button type="button"
                            className="addButton cancelButton"
                            onClick={this.props.closeAdd}>
                                Ｘ Cancel
                    </button>
                    <button type="button" className="addButton saveButton" onClick={this.props._submitTodo}> ＋ Save</button>
                </div>
            </div>
        )
    }
}

export { InputTasksForm }