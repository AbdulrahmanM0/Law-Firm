import React from "react";
import "../style/MainSection.css";


function MainSection(){
    return(
        <section id="main-section" className="main-section">
            <div className="container">
                <div className="side-container">
                    <div>
                        <span>BOUTIQUE</span>
                        <span>LAW FIRM</span>
                        <p>
                            Specializing in Commercial Law &
                            Litigation, Insolvency & Fraud
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default MainSection;