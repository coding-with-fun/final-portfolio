import React from "react";

const ScrollToTop = () => {
    return (
        <div className="scroll_to_top__container">
            <a href="#home" className="scroll_to_top">
                <span>
                    <i className="fas fa-chevron-up"></i>
                </span>
            </a>
        </div>
    );
};

export default ScrollToTop;
