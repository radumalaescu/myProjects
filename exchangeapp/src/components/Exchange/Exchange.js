import React, { useEffect, useRef } from "react";
import styles from "./Exchange.module.css";
import RonEur from "./RonEur/RonEur";
import RonUsd from "./RonUsd/RonUsd";
import RonGbp from "./RonGbp/RonGbp";
import EurUsd from "./EurUsd/EurUsd";
import EurGbp from "./EurGbp/EurGbp";
import UsdGbp from "./UsdGbp/UsdGbp";
import roFlag from "../../images/ro.png";
import euFlag from "../../images/eu.png";
import usFlag from "../../images/us.png";
import ukFlag from "../../images/uk.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Exchange = ({
  updateBallanceErrorRonEur,
  updateBallanceErrorRonUsd,
  changeValueRonEur,
  changeValueEurRon,
  clickDisableRonEur,
  clickDisableRonUsd,
  isDisabled,
  ronEurValue,
  eurRonValue,
  ronBallance,
  eurBallance,
  usdBallance,
  hideErrorNumbers,
  hideErrorBallance,
  changeValueRonUsd,
  changeValueUsdRon,
  ronUsdValue,
  usdRonValue,
  changeValueRonGbp,
  changeValueGbpRon,
  ronGbpValue,
  gbpRonValue,
  clickDisableRonGbp,
  gbpBallance,
  updateBallanceErrorRonGbp,
  eurUsdValue,
  usdEurValue,
  changeValueEurUsd,
  changeValueUsdEur,
  clickDisableEurUsd,
  updateBallanceErrorEurUsd,
  changeValueEurGbp,
  changeValueGbpEur,
  eurGbpValue,
  gbpEurValue,
  updateBallanceErrorEurGbp,
  clickDisableEurGbp,
  changeValueUsdGbp,
  changeValueGbpUsd,
  usdGbpValue,
  gbpUsdValue,
  clickDisableUsdGbp,
  updateBallanceErrorUsdGbp,
}) => {
  const ronEurRef = useRef();

  useEffect(() => {
    ronEurRef.current.focus();
  }, []);

  return (
    <Router>
      <div className={styles.Exchange}>
        <ul>
          <li>
            <Link to="/" ref={ronEurRef}>
              RON - EUR
            </Link>
          </li>
          <li>
            <Link to="/ron-usd">RON - USD</Link>
          </li>
          <li>
            <Link to="/ron-gbp">RON - GBP</Link>
          </li>
          <li>
            <Link to="/eur-usd">EUR - USD</Link>
          </li>
          <li>
            <Link to="/eur-gbp">EUR - GBP</Link>
          </li>
          <li>
            <Link to="/usd-gbp">USD - GBP</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/ron-usd">
            <RonUsd
              changeValueRonUsd={changeValueRonUsd}
              changeValueUsdRon={changeValueUsdRon}
              clickDisableRonUsd={clickDisableRonUsd}
              isDisabled={isDisabled}
              ronUsdValue={ronUsdValue}
              usdRonValue={usdRonValue}
              updateBallanceErrorRonUsd={updateBallanceErrorRonUsd}
              ronBallance={ronBallance}
              usdBallance={usdBallance}
              hideErrorNumbers={hideErrorNumbers}
              hideErrorBallance={hideErrorBallance}
              roFlag={roFlag}
              usFlag={usFlag}
            />
          </Route>
          <Route path="/ron-gbp">
            <RonGbp
              changeValueRonGbp={changeValueRonGbp}
              changeValueGbpRon={changeValueGbpRon}
              clickDisableRonGbp={clickDisableRonGbp}
              isDisabled={isDisabled}
              ronGbpValue={ronGbpValue}
              gbpRonValue={gbpRonValue}
              updateBallanceErrorRonGbp={updateBallanceErrorRonGbp}
              ronBallance={ronBallance}
              gbpBallance={gbpBallance}
              hideErrorNumbers={hideErrorNumbers}
              hideErrorBallance={hideErrorBallance}
              roFlag={roFlag}
              ukFlag={ukFlag}
            />
          </Route>
          <Route path="/eur-usd">
            <EurUsd
              changeValueEurUsd={changeValueEurUsd}
              changeValueUsdEur={changeValueUsdEur}
              clickDisableEurUsd={clickDisableEurUsd}
              isDisabled={isDisabled}
              eurUsdValue={eurUsdValue}
              usdEurValue={usdEurValue}
              updateBallanceErrorEurUsd={updateBallanceErrorEurUsd}
              eurBallance={eurBallance}
              usdBallance={usdBallance}
              hideErrorNumbers={hideErrorNumbers}
              hideErrorBallance={hideErrorBallance}
              euFlag={euFlag}
              usFlag={usFlag}
            />
          </Route>
          <Route path="/eur-gbp">
            <EurGbp
              changeValueEurGbp={changeValueEurGbp}
              changeValueGbpEur={changeValueGbpEur}
              clickDisableEurGbp={clickDisableEurGbp}
              isDisabled={isDisabled}
              eurGbpValue={eurGbpValue}
              gbpEurValue={gbpEurValue}
              updateBallanceErrorEurGbp={updateBallanceErrorEurGbp}
              eurBallance={eurBallance}
              gbpBallance={gbpBallance}
              hideErrorNumbers={hideErrorNumbers}
              hideErrorBallance={hideErrorBallance}
              euFlag={euFlag}
              ukFlag={ukFlag}
            />
          </Route>
          <Route path="/usd-gbp">
            <UsdGbp
              changeValueUsdGbp={changeValueUsdGbp}
              changeValueGbpUsd={changeValueGbpUsd}
              clickDisableUsdGbp={clickDisableUsdGbp}
              isDisabled={isDisabled}
              usdGbpValue={usdGbpValue}
              gbpUsdValue={gbpUsdValue}
              updateBallanceErrorUsdGbp={updateBallanceErrorUsdGbp}
              usdBallance={usdBallance}
              gbpBallance={gbpBallance}
              hideErrorNumbers={hideErrorNumbers}
              hideErrorBallance={hideErrorBallance}
              usFlag={usFlag}
              ukFlag={ukFlag}
            />
          </Route>
          <Route path="/">
            <RonEur
              changeValueRonEur={changeValueRonEur}
              changeValueEurRon={changeValueEurRon}
              clickDisableRonEur={clickDisableRonEur}
              isDisabled={isDisabled}
              ronEurValue={ronEurValue}
              eurRonValue={eurRonValue}
              updateBallanceErrorRonEur={updateBallanceErrorRonEur}
              ronBallance={ronBallance}
              eurBallance={eurBallance}
              hideErrorNumbers={hideErrorNumbers}
              hideErrorBallance={hideErrorBallance}
              roFlag={roFlag}
              euFlag={euFlag}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Exchange;
