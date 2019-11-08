import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Homepage from './Home'
import About from './About'
import Contact from './Contact'
import Registration from './Registration'
import Login from './Login'



const  Main = () => (
    <Switch>
        <Route exact path="/" component={Homepage} />
        <Route  path="/about" component={About} />
        <Route  path="/contact" component={Contact} />
        <Route  path="/registration" component={Registration} />
        <Route  path="/login" component={Login} />
    </Switch>

)
export default Main;