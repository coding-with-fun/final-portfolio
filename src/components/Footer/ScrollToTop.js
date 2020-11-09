import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    const scrollFun = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        scrollFun();
    }, [pathname]);

    return (
        <div className="scroll_to_top__container" onClick={() => scrollFun()}>
            <span>
                <i className="fas fa-chevron-up"></i>
            </span>
        </div>
    );
};

export default ScrollToTop;
