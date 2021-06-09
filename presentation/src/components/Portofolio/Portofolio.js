import React, { forwardRef, useEffect } from "react";
import styles from "./Portofolio.module.css";
import rockpaperscissors from "../../images/rockpaperscissors.png";
import exchangeapp from "../../images/exchangeapp.png";
import tictactoe from "../../images/tictactoe.png";
import countries from "../../images/countries.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Portofolio = (props, ref) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className={styles.portofolio} ref={ref}>
      <h1 data-aos={"rotate-c"} data-aos-once={true}>
        Portofolio
      </h1>
      <div className={styles.portofolioItemFlex}>
        <span data-aos={"fade-up"} data-aos-delay={"1200"} data-aos-once={true}>
          <a
            href="http://www.exchangeapp.radumalaescu.ro/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={exchangeapp} alt="Exchange App"></img>
          </a>
        </span>
        <span data-aos={"fade-up"} data-aos-delay={"800"} data-aos-once={true}>
          <a
            href="http://www.countries.radumalaescu.ro/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={countries} alt="Countries Api"></img>
          </a>
        </span>
        <span data-aos={"fade-up"} data-aos-delay={"1600"} data-aos-once={true}>
          <a
            href="http://www.rockpaperscissors.radumalaescu.ro/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={rockpaperscissors} alt="Rock Paper Scissors"></img>
          </a>
        </span>
        <span data-aos={"fade-up"} data-aos-delay={"2000"} data-aos-once={true}>
          <a
            href="http://www.tictactoe.radumalaescu.ro/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={tictactoe} alt="Tic Tac Toe"></img>
          </a>
        </span>
      </div>
    </div>
  );
};

const forwardPortofolio = forwardRef(Portofolio);

export default forwardPortofolio;
