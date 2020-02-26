import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { setIsAuthenticated as setAuth } from './actions/Actions';
import Header from './components/Header';
import './App.css';
import Auth from './components/auth/Auth';
import Recipes from './components/recipe/Recipes';
import Shopping from './components/shop/Shopping';
import history from './history';
import { RecipeBookState } from './types/types';

interface Props{
  isAuthenticated?: boolean;
  setIsAuthenticated?: Function;
}
class App extends React.Component <Props> {
  constructor(props: Props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(): void {
    // https://node-mongo-auth.herokuapp.com/users/authenticate
    // let data = Axios.get('https://node-mongo-auth.herokuapp.com/users/authenticate');
    // console.log(data);
    const { isAuthenticated, setIsAuthenticated } = this.props;
    setIsAuthenticated(!isAuthenticated);
    history.replace('/');
    history.push('/shopping-list');
  }

  handleLogout(): void{
    const { isAuthenticated, setIsAuthenticated } = this.props;
    setIsAuthenticated(!isAuthenticated);
    history.push('/auth');
  }

  render(): React.ReactFragment {
    const { isAuthenticated } = this.props;
    return (

      <div className="app-container">
        <div>
          <Header logout={this.handleLogout} />
        </div>
        <div className="app-view">
          <Switch>
            <Route path="/auth" render={(): React.ReactFragment => <Auth handleLogin={(): void => this.handleLogin()} />} />
            <Route
              path="/recipes"
              render={(props): React.ReactFragment => {
                if (!isAuthenticated) {
                  props.history.push('/auth');
                  return <Auth handleLogin={this.handleLogin} />;
                }
                return <Recipes />;
              }}
            />
            <Route path="/shopping-list" render={(): React.ReactFragment => <Shopping /> } />
            <Route
              path="/"
              render={(props): React.ReactFragment => {
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

const mapStateToProps = (state: RecipeBookState): RecipeBookState => ({
  isAuthenticated: state.isAuthenticated,
});


const mapDispatchToProps = (dispatch: any): any => ({
  setIsAuthenticated: (isAuthenticated: boolean) => dispatch(setAuth(isAuthenticated)),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
