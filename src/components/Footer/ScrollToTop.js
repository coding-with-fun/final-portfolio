import React from "react";

const ScrollToTop = () => {
    return (
        <a href="#home" className="scroll_to_top">
            <div className="scroll_to_top__container">
                <span>
                    <i className="fas fa-chevron-up"></i>
                </span>
            </div>
        </a>
    );
};

export default ScrollToTop;
