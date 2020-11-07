import React from "react";

import About from "./Body/About";
import Home from "./Body/Home";
import ContactMe from "./Body/ContactMe";

const Body = () => {
    return (
        <div className="body__container">
            <Home />
            <About />
            <ContactMe />
        </div>
    );
};

export default Body;
