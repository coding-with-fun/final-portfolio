import React from "react";
import ScrollToTop from "./Footer/ScrollToTop";

const Footer = () => {
    return (
        <div className="footer__container">
            <ScrollToTop />
            <div className="footer__text">
                <p>Footer</p>
            </div>
        </div>
    );
};

export default Footer;
