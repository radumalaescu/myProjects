import React, { forwardRef } from 'react'
import styles from './Portofolio.module.css'
import underconstruction from "../../images/underconstruction.jpg"
import rockpaperscissors from "../../images/rockpaperscissors.png"
import doctormeow from "../../images/doctormeow.png"
import tictactoe from "../../images/tictactoe.png"

const Portofolio = (props, ref) => {
    return (
        <div className={styles.portofolio} ref={ref}>
            <h1>Portofolio</h1>
            <div className={styles.portofolioItemFlex}>
                <span>
                <a href="http://www.doctormeow.radumalaescu.ro/" target="_blank" rel="noreferrer">
                <img src={doctormeow} alt="Doctor Meow"></img></a></span>
                <span> 
                <a href="http://www.rockpaperscissors.radumalaescu.ro/" target="_blank" rel="noreferrer">
                <img src={rockpaperscissors} alt="Rock Paper Scissors"></img></a></span>
                <span>
                <a href="http://www.tictactoe.radumalaescu.ro/" target="_blank" rel="noreferrer">
                <img src={tictactoe} alt="Tic Tac Toe"></img></a></span>
                <span>
                <img src={underconstruction} alt="Under construction"></img></span>
            </div>
        </div>
    )
}

const forwardPortofolio = forwardRef(Portofolio)

export default forwardPortofolio;