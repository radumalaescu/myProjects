import React, { useEffect } from 'react'
import styles from './Mydescription.module.css'
import htmlphoto from '../../../images/html.png'
import cssphoto from '../../../images/css.png'
import jsphoto from '../../../images/js.png'
import reactphoto from '../../../images/react.png'
import sassphoto from '../../../images/sass.png'
import gitphoto from '../../../images/git.png'
import AOS from 'aos'
import "aos/dist/aos.css";

const Mydescription = () => {
    useEffect(() => { AOS.init({
        duration: 1000
    })})

    return (
        <div className={styles.mydescription} data-aos={"fade-up"} data-aos-delay={"1500"} data-aos-once={true}>
            <p>I am at the begining of my journey as a Front-End Developer and I am searching for 
                an opportunity where I can apply my knowledge and skills and further develope both. </p>
            <p>On a personal level, I am a highly-motivated, result oriented, fast and self
            learner, constantly seeking to improve my skills and knowledges.</p>
            <p>In addition to this, I have the ability to adapt to any type of team environment,
             I am a sociable person but also I have the ability to work independently.</p>
            <p>Below is a list of my current technical skills:</p>

            <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank" rel="noreferrer">
            <img src={htmlphoto} alt="HTML"title="HTML5"></img> </a>

            <a href="https://en.wikipedia.org/wiki/CSS" target="_blank" rel="noreferrer">
            <img src={cssphoto} alt="CSS"title="CSS3"></img></a>

            <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noreferrer">
            <img src={jsphoto} alt="JavaScript" title="JavaScript"></img></a>

            <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target="_blank" rel="noreferrer">
            <img src={reactphoto} alt="React" title="React.js"></img></a>

            <a href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)" target="_blank" rel="noreferrer">
            <img src={sassphoto} alt="Sass" title="Sass"></img></a>

            <a href="https://en.wikipedia.org/wiki/Git" target="_blank" rel="noreferrer">
            <img src={gitphoto} alt="GIT" title="GIT"></img></a>

            <span title="Still learning"></span>
        </div>
    )
}

export default Mydescription