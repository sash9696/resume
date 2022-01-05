import React from 'react';
import './TechStack.css';
import bootstrap from '../images/bootstrap.svg'
import c from '../images/c.png';
import css from '../images/css.svg';
import firebase from '../images/firebase.png';
import github from '../images/github.png';
import html from '../images/html.svg';
import js from '../images/js.png';
import material from '../images/material.svg';
import react from '../images/react.svg';
import woo from '../images/woo.svg';
import wordpress from '../images/wordpress.png';
import ToolsImg from '../ToolsImg/ToolsImg';

function TechStack() {
    return (
        <div id="tool" className="stack_container">
            <div className="stack_title">
                <p>Tech Stack</p>
            </div>
            <div className="stack_images">
                <ToolsImg img={react} name="react" link="https://reactjs.org/docs/getting-started.html" />
                <ToolsImg img={js} name="JavaScript" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#iterators" />
                <ToolsImg img={html} name="HTML 5" link="https://dev.w3.org/html5/html-author/" />
                <ToolsImg img={css} name="CSS 3" link="https://devdocs.io/css/" />
                <ToolsImg img={firebase} name="firebase" link="https://firebase.google.com/docs/guides" />
                <ToolsImg img={c} name="c++" link="https://www.w3schools.com/cpp/cpp_intro.asp" />
                <ToolsImg img={github} name="github" link="https://docs.github.com/en/github" />
                <ToolsImg img={bootstrap} name="bootstrap" link="https://getbootstrap.com/docs/5.0/getting-started/introduction/" />
                <ToolsImg img={material} name="material UI" link="https://material-ui.com/getting-started/installation/" />
                <ToolsImg img={wordpress} name="wordpress" />
                {/* <img src={bootstrap} alt="" />
                <img src={c} alt="" />
                <img src={css} alt="" />
                <img src={firebase} alt="" />
                <img src={github} alt="" />
                <img src={html} alt="" />
                <img src={js} alt="" />
                <img src={material} alt="" />
                <img src={react} alt="" />
                <img src={woo} alt="" />
                <img src={wordpress} alt="" /> */}
            </div>
        </div>
    )
}

export default TechStack
