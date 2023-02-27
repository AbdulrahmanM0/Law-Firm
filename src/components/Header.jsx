/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "../style/Header.css";
import logo from "../images/logo.png";


function Header(){
    let openNav = false;

    function navResponse(){
        let navList = document.getElementById("responsive-list");
        if(openNav === false){
            navList.style.cssText = "display: block";
            openNav = true;
        }else if(openNav === true){
            navList.style.cssText = "display: none"
            openNav = false;
        }
    };
    return(
        <header className='header-element'>
            <div className="container main-header">
                <div href="#" className="nav-logo">
                    <img src={logo} alt="logo"/>
                    <h2>AMAL<span>&</span>FATMA  LLP</h2>
                </div>
                {/* start responsive nav list */}
                <div className="list-icon">
                    <i onClick={navResponse} className="fa-solid fa-list-ul"></i>
                    <div id="responsive-list" className="responsive-nav-list">
                        <ul>
                            <li><a href="#main-section">HOME</a></li>
                            <li><a href="#practice-section">PRACTICE-AREAS</a></li>
                            <li><a href="#vision-section">OUR-VISION</a></li>
                            <li><a href="#contact-section">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
                {/* end responsive nav list */}
                <div className="nav-list">
                    <ul>
                        <li><a href="#main-section">HOME</a></li>
                        <li><a href="#practice-section">PRACTICE-AREAS</a></li>
                        <li><a href="#vision-section">OUR-VISION</a></li>
                        <li><a href="#contact-section">CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header;