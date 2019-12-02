import './App.scss';

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from '../Shared/Header/Header';
import { Footer } from '../Shared/Footer/Footer';

import { Home } from '../Route/Home/Home';

export class App extends Component {
  public constructor(props: any) {
    super(props);
  }

  public render() {
    return(
      <Router>
        <Header/>
        <div className="container">
          <Switch>
            <Route path="/"><Home/></Route>
          </Switch>
        </div>
        <Footer/>
      </Router>
    );
  }
}
