import React from 'react'
import './portofolio.css'
import underconstruction from "../images/underconstruction.jpg"
import rockpaperscissors from "../images/rockpaperscissors.png"

const Portofolio = () => {
    return (
        <div id="portofoliodiv">
            <h1 id="portofolioheading">Portofolio</h1>
            <div id="portofolioitemdivtoflex">
            <div className="portofolioitem"> 
            <a href="http://www.rockpaperscissors.great-site.net" target="_blank"><img src={rockpaperscissors} alt="Rock Paper Scissors"></img></a></div>
            <div className="portofolioitem"> 
            <img src={underconstruction} alt="Under construction"></img></div>
            <div className="portofolioitem"> 
            <img src={underconstruction} alt="Under construction"></img></div>
            <div className="portofolioitem"> 
            <img src={underconstruction} alt="Under construction"></img></div>
            </div>
        </div>
    )
}

export default Portofolio;