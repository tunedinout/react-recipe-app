import React from 'react'
import './header.css'


class Header extends React.Component{
    render(){
        return (
            
            <div className="header-container">

            <div className="header-title">
                    <div className="header-title-txt"> 
                        Recipe Book    
                    </div>
               
            </div>

            <div className="recipes">
                <div className="recipes-txt">
                    Recipes
                </div>
                
            </div>

            <div className="shopping-list">
                <div className="shopping-list-txt">
                    Shopping List    
                </div>
                   
              
            </div>
            <div className="logout">
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