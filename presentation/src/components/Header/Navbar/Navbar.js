import React, { useState } from 'react'
import styles from './Navbar.module.css'

const Navbar = ({scrollToHeader, scrollToAbout, scrollToPortofolio, scrollToContact}) => {
    const[navBarStyle, setNavBarStyle] = useState({padding: "30px 70px 30px 0", backgroundColor:"rgba(0, 0, 0, 0.3)"})

window.onscroll = scrollFunction1;

function scrollFunction1() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    setNavBarStyle({padding: "5px 25px 5px 0", backgroundColor:"rgba(0, 0, 0, 0.85)"})
  } 
  else {
    setNavBarStyle({padding: "30px 70px 30px 0", backgroundColor:"rgba(0, 0, 0, 0.3)"})
}
}
    return (
        <div className={styles.navbar} style={navBarStyle}>
            <ul>
                <li onClick={scrollToHeader}>Home</li>
                <li onClick={scrollToAbout}>About Me</li>
                <li onClick={scrollToPortofolio}>Portofolio</li>
                <li onClick={scrollToContact}>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar;