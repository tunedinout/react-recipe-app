import React from "react";
import Header from './components/Header'
import { Switch, Route } from "react-router-dom";
import Auth from "./components/auth/auth"
import Recipes from "./components/recipe/recipes"
import Shopping from "./components/shop/shopping"
import {createBrowserHistory} from 'history'
import "./App.css";
const history = createBrowserHistory();


class App extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <div className="routing-info">
          <Switch>
            <Route exact path="/auth" render = {() => <Auth/> }/>
            <Route exact path="/recipes" render = {() => <Recipes/> }/>
            <Route exact path="/shopping" render = {() => <Shopping/> }/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

