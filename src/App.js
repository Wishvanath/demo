import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './component/home';
import About from './component/about';
import ContactUs from './component/contact-us';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
          <Route exact path ="/" component ={Home} />
          <Route exact path ="/about" component ={About} />
          <Route exact path ="/contact" component ={ContactUs} />

      </Switch>
    </BrowserRouter>
    )
  }
}
