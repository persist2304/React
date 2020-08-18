import React from "react"
import { connect } from "react-redux"

class ConnectArticle extends React.Component{
    render(){
        console.log('122',this.props.data)
        return (
            <div>
                Article222
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { data: state}
}

const Article = connect(mapStateToProps)(ConnectArticle)

export { Article }