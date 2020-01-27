import React, { Component, Fragment } from 'react'
import Home from './component/home'
import About from './component/about'
import ContactUs from './component/contact-us'

export default class App extends Component {
  render() {
    return (
     <Fragment>
       <Home />
       <About />
       <ContactUs />
     </Fragment>
    )
  }
}
