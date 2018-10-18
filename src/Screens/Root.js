import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';

class ScreenRoot extends Component {
  render() {
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default ScreenRoot;
