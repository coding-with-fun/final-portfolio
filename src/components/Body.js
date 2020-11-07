import React from "react";
import About from "./Body/About";
import ContactMe from "./Body/ContactMe";
import Home from "./Body/Home";

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
