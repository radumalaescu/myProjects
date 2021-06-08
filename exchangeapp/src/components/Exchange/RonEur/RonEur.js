import React from "react";
import styles from "./RonEur.module.css";

const RonEur = ({
  changeValueRonEur,
  changeValueEurRon,
  updateBallanceErrorRonEur,
  clickDisableRonEur,
  isDisabled,
  ronEurValue,
  eurRonValue,
  ronBallance,
  eurBallance,
  hideErrorNumbers,
  hideErrorBallance,
  roFlag,
  euFlag,
}) => {
  return (
    <div className={styles.RonEur}>
      <div>
        <img src={roFlag} alt="Flag"></img>
        <span>Current ballance: {ronBallance.toFixed(2)}</span>
        <input
          type="number"
          disabled={isDisabled}
          value={ronEurValue}
          onChange={changeValueRonEur}
        ></input>{" "}
      </div>
      <button id={styles.switch} onClick={clickDisableRonEur}>
        ↓↑
      </button>
      <div>
        <img src={euFlag} alt="EU"></img>
        <span>Current ballance: {eurBallance.toFixed(2)}</span>
        <input
          type="number"
          disabled={!isDisabled}
          value={eurRonValue}
          onChange={changeValueEurRon}
        ></input>{" "}
      </div>
      <p style={hideErrorNumbers}>
        Please provide only numbers greater than 0!
      </p>
      <p style={hideErrorBallance}>Error! Check your ballance!</p>
      <button id={styles.convert} onClick={updateBallanceErrorRonEur}>
        Convert
      </button>
    </div>
  );
};

export default RonEur;
