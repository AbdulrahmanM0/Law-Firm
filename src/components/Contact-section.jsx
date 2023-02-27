import React from 'react';
import "../style/ContactSection.css";

function ContactSection(){
    return (
        <section id="contact-section" className='contact-section'>
            <div className="banar"></div>
            <div className="container">
                <div>
                    <div className="side-container">
                        <div>    
                            <span>CONTACT</span>
                            <span>AMAL &</span>
                            <span>FATMA</span>
                        </div>    
                    </div>
                </div>  
                <div className="contact-container">
                    <div className='contact-info'>
                        <h4><span>OUR</span> ADDRESS</h4>
                        <div>500 Terry Francois St. San Francisco, CA 94158​</div>
                        <div className='email'><span>Email: </span><a href='#'> info@mysite.com</a></div>
                        <div className='tel'><span>Tel: </span> 123-456-7890</div>
                    </div>
                    <div className="form-container">
                        <span>For any general inquiries, please fill in the following contact form:</span>
                        <form action="">
                            <label htmlFor="">First Name *</label>
                            <input type="text" required/>
                            <label htmlFor="">Last Name *</label>
                            <input type="text" required/>
                            <label htmlFor="">Email *</label>
                            <input type="text" required/>
                            <label htmlFor="">Subject *</label>
                            <input type="text" required/>
                            <label htmlFor="textarea" className="msg">Message</label>
                            <textarea></textarea>
                            <input type="submit" value="SUBMIT" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ContactSection;