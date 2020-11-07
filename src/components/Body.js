import React from "react";
import About from "./Body/About";
import ContactMe from "./Body/ContactMe";
import Home from "./Body/Home";
import Projects from "./Body/Projects";
import Skills from "./Body/Skills";

const Body = () => {
    return (
        <div className="body__container">
            <Home />
            <About />
            <Skills />
            <Projects />
            <ContactMe />
        </div>
    );
};

export default Body;
