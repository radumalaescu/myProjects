import React from "react";
import styles from "./EurGbp.module.css";

const EurGbp = ({
  changeValueEurGbp,
  changeValueGbpEur,
  clickDisableEurGbp,
  isDisabled,
  eurGbpValue,
  gbpEurValue,
  eurBallance,
  gbpBallance,
  hideErrorNumbers,
  hideErrorBallance,
  euFlag,
  ukFlag,
  updateBallanceErrorEurGbp,
}) => {
  return (
    <div className={styles.EurGbp}>
      <div>
        <img src={euFlag} alt="Flag"></img>
        <span>Current ballance: {eurBallance.toFixed(2)}</span>
        <input
          type="number"
          disabled={isDisabled}
          value={eurGbpValue}
          onChange={changeValueEurGbp}
        ></input>{" "}
      </div>
      <button id={styles.switch} onClick={clickDisableEurGbp}>
        ↓↑
      </button>
      <div>
        <img src={ukFlag} alt="Flag"></img>
        <span>Current ballance: {gbpBallance.toFixed(2)}</span>
        <input
          type="number"
          disabled={!isDisabled}
          value={gbpEurValue}
          onChange={changeValueGbpEur}
        ></input>{" "}
      </div>
      <p style={hideErrorNumbers}>
        Please provide only numbers greater than 0!
      </p>
      <p style={hideErrorBallance}>Error! Check your ballance!</p>
      <button id={styles.convert} onClick={updateBallanceErrorEurGbp}>
        Convert
      </button>
    </div>
  );
};

export default EurGbp;
