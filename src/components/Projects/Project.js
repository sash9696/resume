import React from 'react';
import './Project.css';

function Project({image, title, line1, line2, line3, line4, line5, link}) {
    var bullet = ">";
    return (
        <div className='project_container'>
            <div className="project_image">
                <img src={image} alt="" />
            </div>
            <div className="project_title">
                <span className='red'>{title}</span>
            </div>
            <div className="project_description">
                <p>{bullet} {line1}</p>
                <p>{bullet} {line2}</p>
                <p>{bullet} {line3}</p>
                <p>{bullet} {line4}</p>
                <p>{bullet} {line5}</p>
            </div>
            <div className="project_link">
                <p className='white'><span className='red'>Link</span> - <a href = {link} >{link}</a></p>
            </div>

            
        </div>
    )
}

export default Project
