import React from 'react'
import {HashRouter, Route, Link} from 'react-router-dom'
import {Title} from '../Title'
import {Home} from '../Home'
import {About} from '../About'

class Main extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Title title="功能選單" />
                    <ul>
                        {/*Link組件中的to會改變網址，但不會刷新頁面*/}
                        <li><Link to="/">回到首頁</Link></li>
                        <li><Link to="/about">關於我們</Link></li>
                    </ul>
                    <hr/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                </div>
            </HashRouter>
        )
    }
}

export {Main}