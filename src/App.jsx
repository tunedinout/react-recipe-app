import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Auth from './components/auth/auth';
import Recipes from './components/recipe/recipes';
import Shopping from './components/shop/shopping';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
    };
  }

  render() {
    const { isAuthenticated } = this.state;
    return (
      <Router>
        <div className="app-container">
          <div>
            <Header isAuthenticated={isAuthenticated} />
          </div>
          <div className="app-view">
            <Switch>
              <Route path="/auth">
                <Auth />
              </Route>
              <Route path="/recipes">
                <Recipes />
              </Route>
              <Route path="/shopping-list">
                <Shopping />
              </Route>
              <Route path="/">
                <Auth />
              </Route>
            </Switch>
          </div>

        </div>
      </Router>

    );
  }
}

export default App;
