import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { setIsAuthenticated as setAuth } from './actions/actions';
import Header from './components/Header';
import './App.css';
import Auth from './components/auth/auth';
import Recipes from './components/recipe/recipes';
import Shopping from './components/shop/shopping';
import history from './history';

class App extends React.Component {
  constructor() {
    super();
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    // https://node-mongo-auth.herokuapp.com/users/authenticate
    // let data = Axios.get('https://node-mongo-auth.herokuapp.com/users/authenticate');
    // console.log(data);
    const { isAuthenticated, setIsAuthenticated } = this.props;
    setIsAuthenticated(!isAuthenticated);
    history.replace('/');
    history.push('/shopping-list');
  }

  handleLogout() {
    const { isAuthenticated, setIsAuthenticated } = this.props;
    setIsAuthenticated(!isAuthenticated);
    history.push('/auth');
  }

  render() {
    const { isAuthenticated } = this.props;
    return (

      <div className="app-container">
        <div>
          <Header logout={this.handleLogout} />
        </div>
        <div className="app-view">
          <Switch>
            <Route path="/auth" render={() => <Auth handleLogin={this.handleLogin} />} />
            <Route
              path="/recipes"
              render={(props) => {
                if (!isAuthenticated) {
                  props.history.push('/auth');
                  return <Auth handleLogin={this.handleLogin} />;
                }
                return <Recipes />;
              }}
            />
            <Route path="/shopping-list" render={() => <Shopping />} />
            <Route
              path="/"
              render={(props) => {
                if (!isAuthenticated) {
                  props.history.push('/auth');
                  return <Auth handleLogin={this.handleLogin} />;
                }
                return <Shopping />;
              }}
            />
          </Switch>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  setIsAuthenticated: (isAuthenticated) => dispatch(setAuth(isAuthenticated)),
});

App.defaultProps = {
  isAuthenticated: false,
  setIsAuthenticated() {
  },
};
App.propTypes = {
  isAuthenticated: {
    type: propTypes.bool,
    required: true,
  },

  setIsAuthenticated: {
    type: propTypes.func,
    required: true,
  },

};
export default connect(mapStateToProps, mapDispatchToProps)(App);
