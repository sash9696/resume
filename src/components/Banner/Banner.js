import React from 'react';
import './Banner.css';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

function Banner() {
    return (
        <div className='banner'>
            
                <div className="banner_1"><h1 className='banner_1'><span className='red'>Hi</span> , my name is</h1></div>
                <div className="banner_2"><h1>Sahil Chopra.</h1></div>
                <div className="banner_3"><p>I am a <span className='red'>Frontend Developer</span>.</p></div>
                <div className="banner_4">
                <p>
                    I love to develop websites.
                    I am working as a <span className="red">freelancer and a mentor</span>.<br />
                    Have a look at my  <span className="red">portfolio</span>.<br />
                    I am a <span className="red">3 star C++</span> and a <span className="red">3 star Python coder</span> at HackerRank.
                </p>
                </div>
                <div className="banner_logo">
                    <div className="logo_1">
                        <a href="https://www.linkedin.com/in/sahil-chopra-56a63b191/" target="_blank" rel="noreferrer">
                            <img  src={linkedin} alt="" />
                        </a>
                    </div>
                    <div className="logo_2">
                        <a href="https://github.com/sash9696" target="_blank" rel="noreferrer">
                            <img className="social_logo_image" src={github} alt="" />
                        </a>
                    </div>
                </div>
                <div className="banner_button">
                <a href="mailto: sahilchopra838@gmail.com">
                    <button>Get in Touch</button>
                </a>
                </div>

                
            
        </div>
    )
}

export default Banner
