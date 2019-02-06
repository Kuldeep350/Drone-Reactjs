import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import Index from '../src/modules/home/Index';  
import '../src/modules/comman/style.css';
 
// import Contact from './modules/contact/Contact';
// import Explore from './modules/explore/Explore';
// import Listing from './modules/listing/Listing';
// import Singlelisting from './modules/listing/Single-listing';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header/> */}
        <Index/>
        {/* <Explore/> */}
        {/* <Listing/> */}
        {/* <Singlelisting/> */}
        {/* <Contact/> */}
          {/* <Footer/> */}
      

      </div>
    );
  }
}

export default App;
