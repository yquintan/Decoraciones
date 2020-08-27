import React, { Fragment, useState } from "react";
import "./style.scss"
import logo from "../../img/header_logo/logo.png";
// matrial ui
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

//react-icons
import { IconContext } from "react-icons";
import {ImFacebook,ImTwitter,ImLinkedin2} from "react-icons/im";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscSearch} from "react-icons/vsc";
import { BsList, BsJustify } from "react-icons/bs";

function navbar() {
 
    return(
        <Fragment>

            <div className="imagen"></div>

            <header>

                <div className="logo">
                    <img src={logo} className="img"/>
                </div>

                <navbar className="navbar">
                    
                    <div className="social">
                        <IconContext.Provider className="iconContext" value={{color:'#686868'}}>
                            <ImFacebook className={'Facebook'}/>
                            <ImTwitter/>
                            <ImLinkedin2/>
                        </IconContext.Provider>                       
                    </div>
                    
                    <MenuList className="menuList">
                        <MenuItem>HOME</MenuItem>
                        <MenuItem>PAGINAS</MenuItem>
                        <MenuItem>PORTAFOLIO</MenuItem>
                        <MenuItem>BLOG</MenuItem>
                        <MenuItem>TIENDA</MenuItem>
                        <MenuItem>ELEMENTOS</MenuItem>
                    </MenuList>
                  {/* Revisar si es correcto colocarle className a los componentes para darles style*/}
                  {/* Check if it is correct to put className to the components to give them style */}
                    <div className="searchCard">
                        <VscSearch className="search"/>
                        <AiOutlineShoppingCart className="cart"/>
                        <BsList className="list"/>                                 
                    </div>
                </navbar>
                
            </header>
                      
            
        </Fragment>
   )
    
}

export default navbar

