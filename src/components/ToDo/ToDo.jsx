import React, { useState } from "react"
import { Route, Switch } from "react-router-dom"
import { MyTasks } from '../MyTasks'
import { InProgress } from "../InProgress"
import { Completed } from "../Completed"
import { Home } from "../Home"
import { Login } from "../Login"
import Register from "../Register"
import styles from "../../index.scss"
import Alert from "../Alert"
import PrivateRoute from "../../utils/PrivateRoute.jsx"
import DashBoard from "../DashBoard"

const ToDo = () => {
    const [errorMessage, updateErrorMessage] = useState(null);

    return (
        <div>
            <Route exact path="/" component={Home}/>
            <div className={ styles.paddingTop }>
                <Route exact path="/ToDoList" component={MyTasks} />
                <Route exact path="/inProgress" component={InProgress} />
                <Route exact path="/completed" component={Completed} />
            </div>
            <Route exact path="/login" component={ Login }/>
            <Route exact path="/register" component={ Register }>
                <Register showError={ updateErrorMessage }/>
            </Route>
            <Alert errorMessage={ errorMessage } hideError={ updateErrorMessage }/>

            {/*Allow User In Private Route*/}

            <PrivateRoute exact path="/dashboard" component={ DashBoard }/>


            {/*<Switch>*/}
                {/*<PrivateRoute exact path="/dashboard" component={ DashBoard }/>*/}
                {/*<PrivateRoute path="/dashboard" component={ DashBoard } exact>*/}

                {/*</PrivateRoute>*/}
            {/*</Switch>*/}
        </div>
    )
}

export default ToDo