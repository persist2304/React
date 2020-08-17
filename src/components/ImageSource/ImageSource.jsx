import React from "react"

class ImageSource extends React.Component{
    render(){
        return (
            <div>
                <img src={this.props.src}
                     alt={this.props.alt}
                     className={this.props.className}/>
            </div>
        )
    }
}

export { ImageSource }