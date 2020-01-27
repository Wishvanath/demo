import React, { Component, Fragment } from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './component/home'
import About from './component/about'
import ContactUs from './component/contact-us'

export default class App extends Component {
  render() {
    return (
     <Fragment>
       <Switch>
        <Route exact path ="/" component = {Home} />
        <Route exact path = "/about" component ={About} />
        <Route exact path = "/contact-us" component ={ContactUs} />
       </Switch>
     </Fragment>
    )
  }
}
