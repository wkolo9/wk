import React from 'react'
import './Container.css';
import Me from './Me'
import Projects from './Projects'
import Cv from './Cv'
import Contact from './Contact'
import {Route, Switch, Redirect} from 'react-router-dom'

const mainContainer = (props) =>(
    <div className="Main">
        <Switch>
        <Route path="/about-me" component={Me} />
        <Route path="/projects" component={Projects} />
        <Route path="/cv" component={Cv} />
        <Route path="/contact" component={Contact} />
        <Route path="*" >
            <Redirect to="/projects" />
        </Route>
        </Switch>
    </div>
    
)
export default mainContainer