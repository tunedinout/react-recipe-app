import * as React from 'react';
import * as Redux from 'react-redux';
import history from '../history';
import './header.css';
import { RecipeBookState } from '../types/types';

const lightBtnBg = 'rgb(240, 245, 244)';
const darkBtnBg = 'rgb(212, 217, 213)';
const defaultBgColors = {
  authBgColor: lightBtnBg,
  recpBgColor: lightBtnBg,
  shopBgColor: lightBtnBg,
  logoutBgColor: lightBtnBg,
  manageBgColor: lightBtnBg,
};

interface Props {
  isAuthenticated?: boolean;
  logout?: Function;
}

interface State {
  authBgColor?: string;
  recpBgColor?: string;
  shopBgColor?: string;
  logoutBgColor?: string;
  manageBgColor?: string;

}
class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onAuthClick = this.onAuthClick.bind(this);
    this.onRecpClick = this.onRecpClick.bind(this);
    this.onShopClick = this.onShopClick.bind(this);
    this.onLogoutClick = this.onLogoutClick.bind(this);
    this.onManageClick = this.onManageClick.bind(this);
    this.state = {
      ...defaultBgColors,
    };
  }

  componentDidMount(): void {
    let currentURL = `${window.location}`;
    currentURL = currentURL.substring(currentURL.lastIndexOf('/') + 1);
    if (currentURL === 'shopping-list') this.onShopClick();
    else if (currentURL === 'recipes') this.onRecpClick();
    else if (currentURL === 'auth') this.onAuthClick();
  }


  onAuthClick(): void {
    history.push('/auth');
    this.setState({
      ...defaultBgColors,
      authBgColor: darkBtnBg,
    });
  }

  onRecpClick(): void {
    history.push('/recipes');
    this.setState({
      ...defaultBgColors,
      recpBgColor: darkBtnBg,
    });
  }

  onShopClick(): void {
    history.push('/shopping-list');
    this.setState({
      ...defaultBgColors,
      shopBgColor: darkBtnBg,
    });
  }

  onLogoutClick(): void {
    this.setState({
      ...defaultBgColors,
      logoutBgColor: darkBtnBg,
    });
  }

  onManageClick(): void {
    this.setState({
      ...defaultBgColors,
      manageBgColor: darkBtnBg,
    });
  }


  render(): React.ReactFragment {
    let { authBgColor, recpBgColor, shopBgColor } = this.state;
    const { logoutBgColor, manageBgColor } = this.state;
    const { logout, isAuthenticated } = this.props;
    let currentURL = `${window.location}`;
    currentURL = currentURL.substring(currentURL.lastIndexOf('/') + 1);


    if (currentURL === 'shopping-list') shopBgColor = darkBtnBg;
    if (currentURL === 'reicpes') recpBgColor = darkBtnBg;
    if (currentURL === 'auth') authBgColor = darkBtnBg;

    return (
      <>
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
                <div className="auth-link"> Authentication </div>
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
          onClick={(): void => logout()}
          style={{ backgroundColor: logoutBgColor }}
        >
          <div className="logout-txt">
            <div className="logout-link" > Logout</div>
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
            <div className="manage-link">Manage</div>
          </button>
          <div className="manage-content">
            <p>Save Data</p>
            <p>Fetch Data</p>
          </div>
        </div>
      </div>
      </>
    );
  }
}

const mapStateToProps = (state: RecipeBookState): RecipeBookState => ({
  isAuthenticated: state.isAuthenticated,
});

export default Redux.connect(mapStateToProps)(Header);
