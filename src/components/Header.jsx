import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Auth from './auth/auth';
import Recipes from './recipe/recipes';
import Shopping from './shop/shopping';
import './header.css';

const history = createBrowserHistory();


class Header extends React.Component {
  constructor() {
    super();
    this.onAuthClick = this.onAuthClick.bind(this);
    this.onRecpClick = this.onRecpClick.bind(this);
    this.onShopClick = this.onShopClick.bind(this);
    this.onLogoutClick = this.onLogoutClick.bind(this);
    this.state = {
      authBgColor: 'rgb(240, 245, 244)',
      recpBgColor: 'rgb(240, 245, 244)',
      shopBgColor: 'rgb(240, 245, 244)',

    };
  }

  onAuthClick() {
    history.push('/auth');
    this.setState({
      authBgColor: 'rgb(212, 217, 213)',
      recpBgColor: 'rgb(240, 245, 244)',
      shopBgColor: 'rgb(240, 245, 244)',
    });
  }

  onRecpClick() {
    history.push('/recipes');
    this.setState({
      authBgColor: 'rgb(240, 245, 244)',
      recpBgColor: 'rgb(212, 217, 213)',
      shopBgColor: 'rgb(240, 245, 244)',
    });
  }

  onShopClick() {
    history.push('/shopping-list');
    this.setState({
      authBgColor: 'rgb(240, 245, 244)',
      recpBgColor: 'rgb(240, 245, 244)',
      shopBgColor: 'rgb(212, 217, 213)',
    });
  }


  render() {
    const { authBgColor, recpBgColor, shopBgColor } = this.state;
    return (

      <div className="header-container">

        <div className="header-title">
          <div className="header-title-txt">
            Recipe Book
          </div>

        </div>

        <div
          role="button"
          className="auth"
          onClick={this.onAuthClick}
          onKeyDown={this.onAuthClick}
          tabIndex={0}
          style={{ backgroundColor: authBgColor }}
        >
          <div className="auth-txt">
            Authentication
          </div>

        </div>

        {/* hide if not authenticated */}
        <div
          role="button"
          className="recipes"
          onClick={this.onRecpClick}
          onKeyDown={this.onRecpClick}
          tabIndex={0}
          style={{ backgroundColor: recpBgColor }}
        >
          <div className="recipes-txt">
            Recipes
          </div>
        </div>
        <div
          role="button"
          className="shopping-list"
          onClick={this.onShopClick}
          onKeyDown={this.onShopClick}
          tabIndex={0}
          style={{ backgroundColor: shopBgColor }}
        >
          <div className="shopping-list-txt">
            Shopping List
          </div>


        </div>
        <div
          role="button"
          className="logout"
          onClick={this.onLogoutClick}
          onKeyDown={this.onLogoutClick}
          tabIndex={0}
        >
          <div className="logout-txt">
            Logout
          </div>
        </div>
        <div className="manage">
          <select>
            <option value="none" selected disabled hidden>Manage</option>
            <option value="Save Data">Save Data</option>
            <option value="Fetch Data">Fetch Data</option>
          </select>
        </div>

        <div className="routing-info">
          <BrowserRouter>
            <Route path="/auth" render={() => <Auth />} />
            <Route path="/recipes" render={() => <Recipes />} />
            <Route path="/shopping" render={() => <Shopping />} />
          </BrowserRouter>
        </div>

      </div>
    );
  }
}
export default Header;
