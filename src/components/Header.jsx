import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './header.css';

class Header extends React.Component {
  constructor() {
    super();
    this.onAuthClick = this.onAuthClick.bind(this);
    this.onRecpClick = this.onRecpClick.bind(this);
    this.onShopClick = this.onShopClick.bind(this);
    this.state = {
      authBgColor: 'rgb(240, 245, 244)',
      recpBgColor: 'rgb(240, 245, 244)',
      shopBgColor: 'rgb(240, 245, 244)',

    };
  }

  onAuthClick() {
    this.setState({
      authBgColor: 'rgb(212, 217, 213)',
      recpBgColor: 'rgb(240, 245, 244)',
      shopBgColor: 'rgb(240, 245, 244)',
    });
  }

  onRecpClick() {
    this.setState({
      authBgColor: 'rgb(240, 245, 244)',
      recpBgColor: 'rgb(212, 217, 213)',
      shopBgColor: 'rgb(240, 245, 244)',
    });
  }

  onShopClick() {
    this.setState({
      authBgColor: 'rgb(240, 245, 244)',
      recpBgColor: 'rgb(240, 245, 244)',
      shopBgColor: 'rgb(212, 217, 213)',
    });
  }


  render() {
    const { authBgColor, recpBgColor, shopBgColor } = this.state;
    const { isAuthenticated } = this.props;
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
            <Link className="auth-link" to="/auth"> Authentication</Link>
          </div>

        </div>

        {/* hide if not authenticated */}
        {
        isAuthenticated ? (
          <div
            role="button"
            className="recipes"
            onClick={this.onRecpClick}
            onKeyDown={this.onRecpClick}
            tabIndex={0}
            style={{ backgroundColor: recpBgColor }}
          >
            <div className="recipes-txt">
              <Link className="recipes-link" to="/recipes"> Recipes</Link>
            </div>
          </div>
        ) : ''
        }
        <div
          role="button"
          className="shopping-list"
          onClick={this.onShopClick}
          onKeyDown={this.onShopClick}
          tabIndex={0}
          style={{ backgroundColor: shopBgColor }}
        >
          <div className="shopping-list-txt">
            <Link className="shopping-list-link" to="/shopping-list"> Shopping List</Link>
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
      </div>
    );
  }
}
Header.defaultProps = {
  isAuthenticated: false,
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
};

export default Header;
