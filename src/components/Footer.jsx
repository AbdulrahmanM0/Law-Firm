import React from 'react';
import "../style/Footer.css";

function Footer(){
    return (
        <footer className="main-footer">
            <div className="footer-container container">
                <div>
                    <span>
                        © 2035 by Abdulrahman Mohammed.
                    </span>
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/abdulrahman-mohammed-26810223b/' target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                    <a href='#'><i class="fa-brands fa-square-facebook"></i></a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;