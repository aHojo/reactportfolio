import React from 'react';
import {FaGithub, FaLinkedin, } from 'react-icons/fa';
import { IconContext } from "react-icons";

const Footer = () => {

    return (
        <footer className="footer flex-row flex-center mx-2">
            <IconContext.Provider value={{size: "2em"}}>
                <a href="https://github.com/aHojo">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/ahojo/">
                    <FaLinkedin />
                </a>
            </IconContext.Provider>
        </footer>
    )
}


export default Footer;