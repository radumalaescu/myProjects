import React from 'react'
import Collapsemenu from './Collapsemenu'
import './header.css'
import Menulist from './Menulist'

const Header = () => {
    return (
        <div id="banner">
        <div id="opacity">
            <Menulist />
            <Collapsemenu />
           <h1 id="firstheading">Front-End Web Developer</h1>
           <p id="headerp">with a huge thirst to learn</p>
        </div>
        </div>
    )
}

export default Header;