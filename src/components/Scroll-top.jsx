import React from 'react';
import "../style/ScrollTop.css";

function ScrollTop(){
    return (
        <section className='scroll-top'>
            <a href="#main-section">    
                <div className="scroll-top-container">
                    <div><i class="fa-solid fa-chevron-up"></i></div>
                    <div><span>BACK TO TOP</span></div>
                </div>
            </a>    
        </section>
    );
};

export default ScrollTop;
