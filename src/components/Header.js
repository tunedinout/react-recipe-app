import React from 'react'
import './header.css'


class Header extends React.Component{
    constructor(){
        super();
        this.onAuthClick = this.onAuthClick.bind(this);
        this.onRecpClick = this.onRecpClick.bind(this);
        this.onShopClick = this.onShopClick.bind(this);
        this.onLogoutClick = this.onLogoutClick.bind(this);
        this.state = {
            authBgColor : "none",
            recpBgColor : "none",
            shopBgColor : "none"

        }
    }
    onAuthClick(event){
        
        this.setState({ authBgColor: "rgb(212, 217, 213)",
                        shopBgColor: "none",
                        recpBgColor: "none"
                    })
        console.log(event);
    }
    onRecpClick(event){

        this.setState({
            recpBgColor: "rgb(212, 217, 213)",
            shopBgColor: "none",
            authBgColor: "none"})
        console.log(event);
        
    }
    onShopClick(event){
        this.setState({
            shopBgColor: "rgb(212, 217, 213)",
            recpBgColor: "none",
            authBgColor: "none"})
        console.log(event);
    }
    onLogoutClick(event){

    }
    render(){
        return (
            
            <div className="header-container">

            <div className="header-title">
                    <div className="header-title-txt"> 
                        Recipe Book    
                    </div>
               
            </div>

            <div className="auth" onClick={this.onAuthClick} style={{backgroundColor:this.state.authBgColor}}>
                    <div className="auth-txt"> 
                        Authentication
                    </div>
               
            </div>

            {/* hide if not authenticated */}
            <div className="recipes" onClick={this.onRecpClick} style={{backgroundColor:this.state.recpBgColor}}>
                <div className="recipes-txt">
                    Recipes
                </div>
                
            </div>

            <div className="shopping-list" onClick={this.onShopClick} style={{backgroundColor:this.state.shopBgColor}}>
                <div className="shopping-list-txt">
                    Shopping List    
                </div>
                   
              
            </div>
            <div className="logout" onClick={this.onLogoutClick}>
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
export default Header;