import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import history from '../history';
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

  componentDidMount() {
    let currentURL = `${window.location}`;
    currentURL = currentURL.substring(currentURL.lastIndexOf('/') + 1);
    if (currentURL === 'shopping-list') this.onShopClick();
    else if (currentURL === 'recipes') this.onRecpClick();
    else if (currentURL === 'auth') this.onAuthClick();
  }

  // componentDidUpdate() {
  //   let currentURL = `${window.location}`;
  //   currentURL = currentURL.substring(currentURL.lastIndexOf('/') + 1);
  //   console.log(currentURL);

  //   if (currentURL === 'shopping-list') {
  //     this.setState({
  //       ...defaultBgColors,
  //       shopBgColor: darkBtnBg,
  //     });
  //   }
  //   else if (currentURL === 'recipes') this.onRecpClick();
  //   else if (currentURL === 'auth') this.onAuthClick();
  // }

  onAuthClick() {
    history.push('/auth');
    this.setState({
      ...defaultBgColors,
      authBgColor: darkBtnBg,
    });
  }

  onRecpClick() {
    history.push('/recipes');
    this.setState({
      ...defaultBgColors,
      recpBgColor: darkBtnBg,
    });
  }

  onShopClick() {
    history.push('/shopping-list');
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
    let { authBgColor, recpBgColor, shopBgColor } = this.state;
    const { logoutBgColor, manageBgColor } = this.state;
    const { logout, isAuthenticated } = this.props;
    let currentURL = `${window.location}`;
    currentURL = currentURL.substring(currentURL.lastIndexOf('/') + 1);


    if (currentURL === 'shopping-list') shopBgColor = darkBtnBg;
    if (currentURL === 'reicpes') recpBgColor = darkBtnBg;
    if (currentURL === 'auth') authBgColor = darkBtnBg;

    return (

      <div className="header-container">

        <div className="header-title">
          <div className="header-title-txt">
            Recipe Book
          </div>

        </div>

        {
          !isAuthenticated ? (
            <button
              type="button"
              className="auth-btn"
              onClick={this.onAuthClick}
              style={{ backgroundColor: authBgColor }}
            >

              <div className="auth-txt">
                <div className="auth-link" to="/auth"> Authentication </div>
              </div>

            </button>
          ) : ''
        }

        {/* hide if not authenticated */}
        {
        isAuthenticated ? (
          <button
            type="button"
            className="recipes-btn"
            onClick={this.onRecpClick}
            onKeyDown={this.onRecpClick}
            style={{ backgroundColor: recpBgColor }}
          >
            <div className="recipes-txt">
              <div className="recipes-link"> Recipes</div>
            </div>
          </button>
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
            <div className="shopping-list-link"> Shopping List</div>
          </div>


        </button>
        <button
          type="button"
          className="logout-btn"
          onClick={logout}
          onKeyDown={logout}
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
  logout() {
  },
};
Header.propTypes = {
  isAuthenticated: {
    type: propTypes.bool,
    required: true,
  },

  logout: {
    type: propTypes.func,
    required: true,
  },

};

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
});

export default connect(mapStateToProps)(Header);
