import React from "react";
import styles from "./RonUsd.module.css";

const RonUsd = ({
  changeValueRonUsd,
  changeValueUsdRon,
  clickDisableRonUsd,
  isDisabled,
  ronUsdValue,
  usdRonValue,
  ronBallance,
  usdBallance,
  hideErrorNumbers,
  hideErrorBallance,
  roFlag,
  usFlag,
  updateBallanceErrorRonUsd,
}) => {
  return (
    <div className={styles.RonUsd}>
      <div>
        <img src={roFlag} alt="Flag"></img>
        <span>Current ballance: {ronBallance.toFixed(2)}</span>
        <input
          type="number"
          disabled={isDisabled}
          value={ronUsdValue}
          onChange={changeValueRonUsd}
        ></input>{" "}
      </div>
      <button id={styles.switch} onClick={clickDisableRonUsd}>
        ↓↑
      </button>
      <div>
        <img src={usFlag} alt="Flag"></img>
        <span>Current ballance: {usdBallance.toFixed(2)}</span>
        <input
          type="number"
          disabled={!isDisabled}
          value={usdRonValue}
          onChange={changeValueUsdRon}
        ></input>{" "}
      </div>
      <p style={hideErrorNumbers}>
        Please provide only numbers greater than 0!
      </p>
      <p style={hideErrorBallance}>Error! Check your ballance!</p>
      <button id={styles.convert} onClick={updateBallanceErrorRonUsd}>
        Convert
      </button>
    </div>
  );
};

export default RonUsd;
