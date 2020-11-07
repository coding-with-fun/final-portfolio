import React, { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar__container">
            <div className="left__container">
                <a href="#home">
                    <div className="logo__container">Arc Coder</div>
                </a>
            </div>

            <div className="right__container">
                <div
                    className={`menu__button ${
                        isMenuOpen ? "is_open" : "is_close"
                    }`}
                    onClick={() => toggleMenu()}
                >
                    <div className="menu__line"></div>
                    <div className="menu__line"></div>
                    <div className="menu__line"></div>
                </div>
                <div className="page_links">
                    <a
                        href="#home"
                        className="home_link"
                        onClick={() => toggleMenu()}
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="about_link"
                        onClick={() => toggleMenu()}
                    >
                        About
                    </a>
                    <a
                        href="#skills"
                        className="skills_link"
                        onClick={() => toggleMenu()}
                    >
                        Skills
                    </a>
                    <a
                        href="#projects"
                        className="projects_link"
                        onClick={() => toggleMenu()}
                    >
                        Projects
                    </a>
                    <a
                        href="#contact-me"
                        className="projects_link"
                        onClick={() => toggleMenu()}
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
