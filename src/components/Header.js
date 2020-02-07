import React from 'react'
import Auth from "./auth/auth"
import Recipes from "./recipe/recipes"
import Shopping from "./shop/shopping"
import './header.css'
import { Switch, Route } from "react-router-dom";
import {createBrowserHistory} from 'history'

const history = createBrowserHistory();


class Header extends React.Component{
    constructor(){
        super();
        this.onAuthClick = this.onAuthClick.bind(this);
        this.onRecpClick = this.onRecpClick.bind(this);
        this.onShopClick = this.onShopClick.bind(this);
        this.onLogoutClick = this.onLogoutClick.bind(this);
        this.state = {
            authBgColor : "rgb(240, 245, 244)",
            recpBgColor : "rgb(240, 245, 244)",
            shopBgColor : "rgb(240, 245, 244)"

        }
    }
    onAuthClick(event){
        history.push("/auth")
        this.setState({ 
        authBgColor : "rgb(212, 217, 213)",
        recpBgColor : "rgb(240, 245, 244)",
        shopBgColor : "rgb(240, 245, 244)"
                    })
        console.log(event);
    }
    onRecpClick(event){
        history.push("/recipes")
        this.setState({
            authBgColor : "rgb(240, 245, 244)",
            recpBgColor : "rgb(212, 217, 213)",
            shopBgColor : "rgb(240, 245, 244)"})
        console.log(event);
        
    }
    onShopClick(event){
        history.push("/shopping-list")
        this.setState({
            authBgColor : "rgb(240, 245, 244)",
            recpBgColor : "rgb(240, 245, 244)",
            shopBgColor : "rgb(212, 217, 213)"})
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
            

            <div className="routing-info">
            <Switch>
                {/* <Route exact path="/" render = {() =>{ 
                history.push("/auth");
                return <Auth/>} }/> */}
                <Route exact path="/auth" render = {() => <Auth/> }/>
                <Route exact path="/recipes" render = {() => <Recipes/> }/>
                <Route exact path="/shopping" render = {() => <Shopping/> }/>
            </Switch>
            </div>

            </div>
        );
    }
}
export default Header;