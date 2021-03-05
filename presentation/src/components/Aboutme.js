import React from 'react'
import './aboutme.css'
import myphoto from '../images/myphoto.png'
import htmlphoto from '../images/html.png'
import cssphoto from '../images/css.png'
import jsphoto from '../images/js.png'
import reactphoto from '../images/react.png'
import sassphoto from '../images/sass.png'
import gitphoto from '../images/git.png'

const Aboutme = () => {
    return (
        <div id="aboutmecontainer">
            <h1 id="aboutmeheading">About <span id="aboutmespan">Me</span></h1>
            <div id="aboutmedivtoflex">
            <div><img src={myphoto} alt="my photo"></img>
            <span id="myname">Radu</span> </div>
            <div>
            <p className="aboutmep">I am at the begining of my journey as a Front-End Developer and I am searching for 
                an opportunity where I can apply my knowledge and skills and further develope both. </p>
            <p className="aboutmep">On a personal level, I am a highly-motivated, result oriented, fast and self
            learner, constantly seeking to improve my skills and knowledges.</p>
            <p className="aboutmep">In addition to this, I have the ability to adapt to any type of team environment,
             I am a sociable person but also I have the ability to work independently.</p>
            <p className="aboutmep">Below is a list of my current technical skills:</p>

            <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">
            <img src={htmlphoto} alt="HTML" className="technicalskillsphotos" title="HTML5"></img> </a>

            <a href="https://en.wikipedia.org/wiki/CSS" target="_blank">
            <img src={cssphoto} alt="CSS" className="technicalskillsphotos" title="CSS3"></img></a>

            <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">
            <img src={jsphoto} alt="JavaScript" className="technicalskillsphotos" title="JavaScript"></img></a>

            <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target="_blank">
            <img src={reactphoto} alt="React" className="technicalskillsphotos" title="React.js"></img></a>

            <a href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)" target="_blank">
            <img src={sassphoto} alt="Sass" className="technicalskillsphotos" title="Sass"></img></a>

            <a href="https://en.wikipedia.org/wiki/Git" target="_blank">
            <img src={gitphoto} alt="GIT" className="technicalskillsphotos" title="GIT"></img></a>
            
            <div id="loader" title="Still learning"></div>
            </div>
            </div>
        </div>
    )
}

export default Aboutme;