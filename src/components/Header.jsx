import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './header.css';

const lightBtnBg = 'rgb(240, 245, 244)';
const darkBtnBg = 'rgb(212, 217, 213)';
const defaultBgColors = {
  authBgColor: lightBtnBg,
  recpBgColor: lightBtnBg,
  shopBgColor: lightBtnBg,
  logoutBgColor: lightBtnBg,
  manageBgColor: lightBtnBg,
};
class Header extends React.Component {
  constructor() {
    super();
    this.onAuthClick = this.onAuthClick.bind(this);
    this.onRecpClick = this.onRecpClick.bind(this);
    this.onShopClick = this.onShopClick.bind(this);
    this.onLogoutClick = this.onLogoutClick.bind(this);
    this.onManageClick = this.onManageClick.bind(this);
    this.state = {
      ...defaultBgColors,
    };
  }

  onAuthClick() {
    this.setState({
      ...defaultBgColors,
      authBgColor: darkBtnBg,
    });
  }

  onRecpClick() {
    this.setState({
      ...defaultBgColors,
      recpBgColor: darkBtnBg,
    });
  }

  onShopClick() {
    this.setState({
      ...defaultBgColors,
      shopBgColor: darkBtnBg,
    });
  }

  onLogoutClick() {
    this.setState({
      ...defaultBgColors,
      logoutBgColor: darkBtnBg,
    });
  }

  onManageClick() {
    this.setState({
      ...defaultBgColors,
      manageBgColor: darkBtnBg,
    });
  }


  render() {
    const {
      authBgColor, recpBgColor, shopBgColor, logoutBgColor, manageBgColor,
    } = this.state;
    const { isAuthenticated } = this.props;
    return (

      <div className="header-container">

        <div className="header-title">
          <div className="header-title-txt">
            Recipe Book
          </div>

        </div>

        <button
          type="button"
          className="auth-btn"
          onClick={this.onAuthClick}
          style={{ backgroundColor: authBgColor }}
        >
          <div className="auth-txt">
            <Link className="auth-link" to="/auth"> Authentication</Link>
          </div>

        </button>

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
        <button
          type="button"
          className="shopping-list"
          onClick={this.onShopClick}
          onKeyDown={this.onShopClick}
          style={{ backgroundColor: shopBgColor }}
        >
          <div className="shopping-list-txt">
            <Link className="shopping-list-link" to="/shopping-list"> Shopping List</Link>
          </div>


        </button>
        <button
          type="button"
          className="logout-btn"
          onClick={this.onLogoutClick}
          onKeyDown={this.onLogoutClick}
          style={{ backgroundColor: logoutBgColor }}
        >
          <div className="logout-txt">
            <Link className="logout-link" to="/logout"> Logout</Link>
          </div>


        </button>
        <div className="manage">
          <button
            type="button"
            className="manage-txt"
            onClick={this.onManageClick}
            onKeyDown={this.onManageClick}
            style={{ backgroundColor: manageBgColor }}
          >
            <Link href="/manage/" className="manage-link">Manage</Link>
          </button>
          <div className="manage-content">
            <p>Save Data</p>
            <p>Fetch Data</p>
          </div>
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
