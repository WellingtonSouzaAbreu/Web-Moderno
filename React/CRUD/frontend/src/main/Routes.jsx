import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/home.jsx'
import UserCrud from '../components/user/UserCrud.jsx'

export default props =>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/users" component={UserCrud}/>
        <Redirect from="*" to="/"/>
    </Switch>