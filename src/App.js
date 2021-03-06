import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './page/home/home.js';
import Cardapio from './page/cardapio/cardapio.js';
import PageItem from './page/itemPage/itemPage.js';

import ManagerPage from './managerPage.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/cardapio" component={Cardapio} />
          <Route exact path="/cardapio/:id" component={PageItem} />

          <Route exact path="/manager" component={ManagerPage} />
        </div>
      </Router>

    );
  }
}

export default App;
