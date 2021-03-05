import React, { useState } from 'react'
import './menulist.css'

const Menulist = () => {

const[menuListStyle, setmenuListStyle] = useState({padding: "30px 70px 30px 0", backgroundColor:"rgba(0, 0, 0, 0.3)"})

window.onscroll = function() {scrollFunction1()};

function scrollFunction1() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    setmenuListStyle({padding: "5px 25px 5px 0", backgroundColor:"rgba(0, 0, 0, 0.85)"})
  } 
  else {
      setmenuListStyle({padding: "30px 70px 30px 0", backgroundColor:"rgba(0, 0, 0, 0.3)"})
}
}

    return (
        <div className="menulist" style={menuListStyle}>
            <ul className="ulmenulist">
                <li className="menulistitem"><a href="#banner">Home</a></li>
                <li className="menulistitem"><a href="#aboutmecontainer">About Me</a></li>
                <li className="menulistitem"><a href="#portofoliodiv">Portofolio</a></li>
                <li className="menulistitem"><a href="#contactmediv">Contact</a></li>
            </ul>
        </div>
    )
}

export default Menulist;