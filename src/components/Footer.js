import React from "react";
import ScrollToTop from "./Footer/ScrollToTop";

const Footer = () => {
    return (
        <div className="footer__container">
            <ScrollToTop />

            <div className="text__container">
                <div className="harsh__container">
                    <div className="data__container">
                        Made with{" "}
                        <span>
                            <i className="fas fa-heart"></i>
                        </span>{" "}
                        and{" "}
                        <span>
                            <i className="fas fa-mug-hot"></i>
                        </span>{" "}
                        by
                    </div>
                    <a
                        href="https://github.com/arc-coder"
                        target="_blank"
                        rel="noreferrer"
                        className="link__container"
                    >
                        Arc Coder | Harsh Patel
                    </a>
                </div>

                <hr />

                <div className="radhika__container">
                    <div className="data__container">Logo designed by</div>
                    <a
                        href="https://instagram.com/fashion_illustration98"
                        target="_blank"
                        rel="noreferrer"
                        className="link__container"
                    >
                        Radhika Somani
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
