import React from 'react'
import {Route, Link} from 'react-router-dom'

class About extends React.Component{
    render(){
        console.log(this.props.match)
        return (
            <div>
                <h2>關於我們選單</h2>
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/introd`}>理念介紹</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/his`}>歷史改革</Link>
                    </li>
                </ul>
                <Route exact path={`${this.props.match.path}/:type`} component={AboutContent}/>
            </div>
        )
    }
}

class AboutContent extends React.Component{
    render(){
        console.log(this.props.match)
        let content
        this.props.match.params.type == 'introd'?
            content = '這裡是理念介紹':
            content = '這裡是歷史改革'
        return (
            <p>{content}</p>
        )
    }
}

export {About}