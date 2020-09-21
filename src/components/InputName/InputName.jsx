import React from 'react'
import styles from "../../index.scss"

class InputName extends React.Component{
    render(){
        return (
            <div className={ styles.inputName }>
                <i className={this.props.className}>
                    {this.props.inputName}
                </i>
            </div>
        )
    }
}

export {InputName}