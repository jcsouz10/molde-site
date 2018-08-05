import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import HomePage from './page/home/home.js';
import Cardapio from './page/cardapio/cardapio.js';
import PageItem from './page/itemPage/itemPage.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={HomePage} />  
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/cardapio" component={Cardapio} />
          <Route exact path="/cardapio/:id" component={PageItem} />
        </div>  
      </Router>

    );
  }
}

export default App;
