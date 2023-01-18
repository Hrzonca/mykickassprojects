import React from 'react';
import {Navlink} from "react-router-dom";

function Navigation(props) {
    return (
        <div className='row navigation' id='navigation'>
            <Navlink to="/about">About</Navlink>
            <Navlink to="/project">Project</Navlink>
            <Navlink to="/contact">Contact</Navlink>
            <Navlink to="/resume">Resume</Navlink>
        </div>
    )
}

export default Navigation;