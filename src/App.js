import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './modules/home/Home';  
import '../src/modules/comman/style.css';
 
import Contact from './modules/contact/Contact';
 import Explore from './modules/explore/Explore';
import Listing from './modules/listing/Listing';
 import Singlelisting from './modules/listing/Single-listing';

class App extends Component {
  render() {
    return (
      <div className="">
        <Route exact path="/" component={Home} />
        <Route path="/listing" component={Listing} />
        <Route path="/Singlelisting" component={Singlelisting} />
        <Route path="/explore" component={Explore} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
