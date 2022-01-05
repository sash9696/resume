import React from 'react';
import './Projects.css';
import netflixClone from '../images/netflixClone.png';
import dKart from '../images/dKart.png';
import linkedinClone from '../images/linkedinClone.png';
import amazonClone from '../images/amazonClone.png';
import gmailClone from '../images/gmailClone.png';
import Project from './Project';

function Projects() {
    return (
        <div id='projects' className='projects_container'>
            <div className="projects_title">
                <h1>Projects</h1>
            </div>
            <div className="projects_details">
            <Project image = {netflixClone}
                     title = "Netflix-Clone web app" 
                     line1 = "It has a login, signup and signout functionality." 
                     line2 = "It has a fully functional stripe payment gateway."
                     line3 = "It is based on a subscription model."
                     line4 = "It's database is managed on Firestore and is hosted on Firebase."
                     line5 = "Technologies - Reactjs, JavaScript, Redux, HTML, CSS, Firebase."
                     link  = "https://sahil-netflix-clone.web.app/"
                     />
            <Project
                    image = {dKart}
                    title = "D-Kart Shopping web app" 
                    line1 = "It has a login, signup and signout functionality." 
                    line2 = "It has a checkout options page."
                    line3 = "It is a responsive e-commerce website."
                    line4 = "It's database is managed on Firestore and is hosted on Firebase."
                    line5 = "Technologies - Reactjs, JavaScript, Redux, HTML, CSS, Firebase."
                    link  = "https://d-kart-e8009.web.app/"
            />
            <Project
                    image = {linkedinClone}
                    title = "LinkedIn-Clone web app" 
                    line1 = "It has a login, signup and signout functionality." 
                    line2 = "It is a fully functional clone with posts option."
                    line3 = "It has smail authentication functionality."
                    line4 = "It's database is managed on Firestore and is hosted on Firebase."
                    line5 = "Technologies - Reactjs, JavaScript, Redux, HTML, CSS, Firebase."
                    link  = "https://linkedin-clone-e457e.web.app/"
            />
            <Project
                    image = {netflixClone}
                    title = "Netflix-Clone web app" 
                    line1 = "It has a login, signup and signout functionality." 
                    line2 = "It has a fully functional stripe payment gateway."
                    line3 = "It is based on a subscription model."
                    line4 = "It's database is managed on Firestore and is hosted on Firebase."
                    line5 = "Technologies - Reactjs, JavaScript, Redux, HTML, CSS, Firebase."
                    link  = "https://sahil-netflix-clone.web.app/"
            />
            <div className="last_project">
            <Project
                    image = {netflixClone}
                    title = "Netflix-Clone web app" 
                    line1 = "It has a login, signup and signout functionality." 
                    line2 = "It has a fully functional stripe payment gateway."
                    line3 = "It is based on a subscription model."
                    line4 = "It's database is managed on Firestore and is hosted on Firebase."
                    line5 = "Technologies - Reactjs, JavaScript, Redux, HTML, CSS, Firebase."
                    link  = "https://sahil-netflix-clone.web.app/"
            />
            </div>
            
            </div>
            
        </div>
    )
}

export default Projects
