import React from 'react'
import './portofolio.css'
import underconstruction from "../images/underconstruction.jpg"

const Portofolio = () => {
    return (
        <div id="portofoliodiv">
            <h1 id="portofolioheading">Portofolio</h1>
            <div id="portofolioitemdivtoflex">
            <div className="portofolioitem"> 
            <img src={underconstruction} alt="Under construction"></img></div>
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