import React, {useEffect, useState} from 'react';
import './Nav.css';
import NavOptions from '../NavOptions/NavOptions';
import { NAV_TEXT } from '../../constants/constants';
import resume from '../Resume/resume.pdf';


function Nav() {

    var name = "<SC/>";
    const [show, handleShow] = useState(false);

    const transitionNavBar = (() => {
        if(window.scrollY > 100)
        {
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    })
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, []);

    const scroll = (id) => {
        document.getElementById(id).scrollIntoView();
    }
    
    return (
        <div className={`nav ${show && "nav_white"}`}>
            <div className="nav_left">
                <h1>{name}</h1>
            
            </div>
            
            <div className="nav_right">
                <NavOptions title={NAV_TEXT.ABOUT} />
                <NavOptions title={NAV_TEXT.TOOLS} onClick={() => scroll('tool')} />
                <NavOptions title={NAV_TEXT.PROJECTS} onClick={() => scroll('projects')} />
                <p className="resume">
                    <a href={resume} download="Sahil Resume.pdf">
                        <NavOptions title={NAV_TEXT.RESUME} />
                    </a>
                </p>
                

            
            </div>
            
            
        </div>
    )
}

export default Nav
