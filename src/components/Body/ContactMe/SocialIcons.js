import React from "react";

import Github from "../../../assets/socialIcons/github.svg";
import LinkedIn from "../../../assets/socialIcons/linkedin.svg";
import Codepen from "../../../assets/socialIcons/codepen.svg";
import Instagram from "../../../assets/socialIcons/instagram.svg";
import Gmail from "../../../assets/socialIcons/gmail.svg";
import Twitter from "../../../assets/socialIcons/twitter.svg";

const SocialIcons = () => {
    return (
        <div className="social_icons">
            <a href="mailto:dev@arccoder.in" target="_blank" rel="noreferrer">
                <img src={Gmail} alt="Gmail Logo" />
            </a>
            <a
                href="https://github.com/arc-coder"
                target="_blank"
                rel="noreferrer"
            >
                <img src={Github} alt="Github Logo" />
            </a>
            <a
                href="https://linkedin.com/in/harshpatel2124"
                target="_blank"
                rel="noreferrer"
            >
                <img src={LinkedIn} alt="LinkedIn Logo" />
            </a>
            <a
                href="https://codepen.io/arc-coder"
                target="_blank"
                rel="noreferrer"
            >
                <img src={Codepen} alt="Codepen Logo" />
            </a>
            <a
                href="https://www.instagram.com/arc__coder"
                target="_blank"
                rel="noreferrer"
            >
                <img src={Instagram} alt="Instagram Logo" />
            </a>
            <a
                href="https://twitter.com/arc__coder"
                target="_blank"
                rel="noreferrer"
            >
                <img src={Twitter} alt="Twitter Logo" />
            </a>
        </div>
    );
};

export default SocialIcons;
