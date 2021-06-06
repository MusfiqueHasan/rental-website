import React from 'react'

const Footer = () => {
    return (
        <section id="footer">
        <div className="footer_container">

            <div className="footer_items">
                <div className="menu">
                    <h2>Menu</h2>
                    <a href="#">Contact Us</a> <br/>
                    <a href="#">Privacy</a> <br/>
                    <a href="#">Terms of Service</a>
                </div>
                <div className="sites">
                    <h2>Devison Sites</h2><br/>
                    <a href="#">Dhaka</a><br/>
                    <a href="#">Chittagong</a><br/>
                    <a href="#">Sylhet</a> <br/>
                    <a href="#">Barisal</a> <br/>
                    <a href="#">Khulna</a> <br/> 
                    <a href="#">Mymensingh</a>

                </div>
                <div className="contact">
                    <h2>Contact Information</h2>
                    <h3>Address</h3>
                    <p>Ifdl Star <br/>
                        No.15, Jalan 16/11,<br/>
                        Section 16 Phileo Damansara 2 <br/>
                        46350 CDA Agrabad <br/>
                        Chittagong, Bangladesh. <br/>
                       <br/>


                        Office Hours <br/>
                        Sunday - Thursday (except Public Holidays) <br/>
                        9.00 am - 5.00 pm - time in Bangladesh (GMT+6) <br/>
                        <br/>
                        <a href="#">

                            ✉️rental@gmail.com
                            ☎️ 01686234959

                        </a>



                    </p>
                </div>
                <div className="follow">
                    <h2>Follow Us</h2>
                    <p>Follow us in facebook and twitter for latest news and update.</p>
                    <div className="social-icon">
                        <div className="social-item">
                            <a href="#">
                                <img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" />
                            </a>
                        </div>

                        <div className="social-item">
                            <a href="#">
                                <img src="https://img.icons8.com/bubbles/100/000000/twitter.png" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="copyright">
                <p> Copyrights © 2021 Rental.com All rights reserved. </p>
            </div>

        </div>
    </section>
    )
}

export default Footer
