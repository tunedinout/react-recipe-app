import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from './components/Header';
import './App.css';
import Auth from './components/auth/auth';
import Recipes from './components/recipe/recipes';
import Shopping from './components/shop/shopping';
import Logout from './components/logout/logout';

const history = createBrowserHistory();
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
            <Header isAuthenticated={isAuthenticated} history={history} />
          </div>
          <div className="app-view">
            <Switch>
              <Route path="/auth" render={() => <Auth />} />
              <Route path="/recipes" render={() => <Recipes />} />
             
              <Route path="/shopping-list" render={() => <Shopping />} />
              <Route path="/logout" render={() => <Logout />} />
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
