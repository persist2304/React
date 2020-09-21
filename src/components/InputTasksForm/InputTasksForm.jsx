import React from "react"
import { InputName } from "../InputName"
import styles from "../../index.scss"

class InputTasksForm extends React.Component {
    render() {
        return (
            <div className={ styles.inpuTasksForm }>
                <div className={ styles.inputTask }>
                    <InputName className="fas fa-calendar-alt" inputName={ styles.Deadline } />
                    <div className={ styles.inputForm }>
                        <input name='date' type="date" className={ styles.inputStyle + " " + styles.inputDataTime }
                               value={this.props.stateData.date} onChange={this.props._changeState}/>
                        &nbsp;&nbsp;
                        <input name='time' type="time" className={ styles.inputStyle + " " + styles.inputDataTime }
                               value={this.props.stateData.time} onChange={this.props._changeState}/>
                    </div>
                    <InputName className="fas fa-file" inputName="File" />
                    <div className={ styles.inputFomr}>
                        <input name='file' type="file" class={ styles.inputStyle} ref={this.props.filebox}
                               onChange={this.props._changeState} /><br/>
                        <span className={ styles.inputStyle }>{this.props.stateData.file}</span>
                    </div>
                    <InputName className="far fa-comment-dots" inputName="Comment" />
                    <div className={ styles.inputForm }>
                        <textarea name="commit" rows="7" cols="55" class="inputStyle"
                                  value={this.props.stateData.commit} onChange={this.props._changeState}>
                            {this.props.comment}
                        </textarea>
                    </div>
                </div>
                <div>
                    <button type="button"
                            className={ styles.addButton + " " + styles.cancelButton}
                            onClick={this.props.closeAdd}>
                                Ｘ Cancel
                    </button>
                    <button type="button" className={ styles.addButton + " " + styles.saveButton } onClick={this.props._submitTodo}> ＋ Save</button>
                </div>
            </div>
        )
    }
}

export { InputTasksForm }