import React from "react";
import styles from "./UsdGbp.module.css";

const UsdGbp = ({
  changeValueUsdGbp,
  changeValueGbpUsd,
  clickDisableUsdGbp,
  isDisabled,
  usdGbpValue,
  gbpUsdValue,
  usdBallance,
  gbpBallance,
  hideErrorNumbers,
  hideErrorBallance,
  usFlag,
  ukFlag,
  updateBallanceErrorUsdGbp,
}) => {
  return (
    <div className={styles.UsdGbp}>
      <div>
        <img src={usFlag} alt="Flag"></img>
        <span>Current ballance: {usdBallance.toFixed(2)}</span>
        <input
          type="number"
          disabled={isDisabled}
          value={usdGbpValue}
          onChange={changeValueUsdGbp}
        ></input>{" "}
      </div>
      <button id={styles.switch} onClick={clickDisableUsdGbp}>
        ↓↑
      </button>
      <div>
        <img src={ukFlag} alt="Flag"></img>
        <span>Current ballance: {gbpBallance.toFixed(2)}</span>
        <input
          type="number"
          disabled={!isDisabled}
          value={gbpUsdValue}
          onChange={changeValueGbpUsd}
        ></input>{" "}
      </div>
      <p style={hideErrorNumbers}>
        Please provide only numbers greater than 0!
      </p>
      <p style={hideErrorBallance}>Error! Check your ballance!</p>
      <button id={styles.convert} onClick={updateBallanceErrorUsdGbp}>
        Convert
      </button>
    </div>
  );
};

export default UsdGbp;
