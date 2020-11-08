import React from "react";

import Github from "../../../assets/socialIcons/github.svg";
import LinkedIn from "../../../assets/socialIcons/linkedin.svg";
import Codepen from "../../../assets/socialIcons/codepen.svg";
import Instagram from "../../../assets/socialIcons/instagram.svg";
import Gmail from "../../../assets/socialIcons/gmail.svg";
import Twitter from "../../../assets/socialIcons/twitter.svg";

const SocialIcons = () => {
    return (
        <>
            <img src={Gmail} alt="Gmail Logo" />
            <img src={Github} alt="Github Logo" />
            <img src={LinkedIn} alt="LinkedIn Logo" />
            <img src={Codepen} alt="Codepen Logo" />
            <img src={Instagram} alt="Instagram Logo" />
            <img src={Twitter} alt="Twitter Logo" />
        </>
    );
};

export default SocialIcons;
