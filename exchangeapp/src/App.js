import React, { useState } from "react";
import styles from "./App.module.css";
import Accounts from "./components/Accounts/Accounts";
import Exchange from "./components/Exchange/Exchange";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const [ronBallance, setRonBallance] = useState(1000); //initial ballance
  const [eurBallance, setEurBallance] = useState(0);
  const [usdBallance, setUsdBallance] = useState(0);
  const [gbpBallance, setGbpBallance] = useState(0);
  const [ronEurValue, setRonEurValue] = useState(""); //input value, empty by default
  const [eurRonValue, setEurRonValue] = useState(""); 
  const [ronGbpValue, setRonGbpValue] = useState("");
  const [gbpRonValue, setGbpRonValue] = useState("");
  const [ronUsdValue, setRonUsdValue] = useState("");
  const [usdRonValue, setUsdRonValue] = useState("");
  const [eurUsdValue, setEurUsdValue] = useState("");
  const [usdEurValue, setUsdEurValue] = useState("");
  const [eurGbpValue, setEurGbpValue] = useState("");
  const [gbpEurValue, setGbpEurValue] = useState("");
  const [usdGbpValue, setUsdGbpValue] = useState("");
  const [gbpUsdValue, setGbpUsdValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(false); // check if input is disabled
  const [hideErrorNumbers, setHideErrorNumbers] = useState({ display: "none" }); //error if you not provide a number
  const [hideErrorBallance, setHideErrorBallance] = useState({ //error if you don't have enough money
    display: "none",
  });

  const changeValue = (event, setFirstValue, setSecondValue, multiply) => {
    //input value, auto set second input value
    setFirstValue(event.target.value);
    setSecondValue((event.target.value * multiply).toFixed(2));
  };

  const clickDisable = (setFirstValue, setSecondValue) => {  //switch disable to the other input
    setIsDisabled(!isDisabled);
    setFirstValue("");
    setSecondValue("");
  };

  const updateBallance = (  //updates ballace according the input value 
    firstValue,
    secondValue,
    firstBallance,
    secondBallance,
    setFirstBallance,
    setSecondBallance
  ) => {
    if (!isDisabled) {
      setFirstBallance(firstBallance - +firstValue);
      setSecondBallance(+secondBallance + +secondValue);
    } else {
      setFirstBallance(+firstBallance + +firstValue);
      setSecondBallance(+secondBallance - +secondValue);
    }
  };

  const updateBallanceError = ( //uses updateBallance function after check for errors
    firstValue,
    secondValue,
    firstBallance,
    secondBallance
  ) => {
    if (+firstValue <= 0 || +secondValue <= 0) {
      setHideErrorNumbers({ display: "block" });
      setHideErrorBallance({ display: "none" });
    } else if (
      (!isDisabled && +firstBallance < +firstValue) ||
      (isDisabled && +secondBallance < +secondValue)
    ) {
      setHideErrorNumbers({ display: "none" });
      setHideErrorBallance({ display: "block" });
    } else {
      setHideErrorNumbers({ display: "none" });
      setHideErrorBallance({ display: "none" });
      if (firstValue === ronEurValue) { //check the first value to know what ballace to update
         updateBallance(
          firstValue,
          secondValue,
          firstBallance,
          secondBallance,
          setRonBallance,
          setEurBallance
        );
      }
      if (firstValue === ronUsdValue) {
         updateBallance(
          firstValue,
          secondValue,
          firstBallance,
          secondBallance,
          setRonBallance,
          setUsdBallance
        );
      }
      if (firstValue === ronGbpValue) {
         updateBallance(
          firstValue,
          secondValue,
          firstBallance,
          secondBallance,
          setRonBallance,
          setGbpBallance
        );
      }
      if (firstValue === eurUsdValue) {
         updateBallance(
          firstValue,
          secondValue,
          firstBallance,
          secondBallance,
          setEurBallance,
          setUsdBallance
        );
      }
      if (firstValue === eurGbpValue) {
         updateBallance(
          firstValue,
          secondValue,
          firstBallance,
          secondBallance,
          setEurBallance,
          setGbpBallance
        );
      }
      if (firstValue === usdGbpValue) {
         updateBallance(
          firstValue,
          secondValue,
          firstBallance,
          secondBallance,
          setUsdBallance,
          setGbpBallance
        );
      }
    }
  };

  return (
    <Router>
      <div className={styles.App}>
        <ul id={styles.Applist}>
          <li>
            <Link to="/">Accounts</Link>
          </li>
          <li>
            <Link to="/exchange">Exchange</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/exchange">
            <Exchange
              changeValueRonEur={(event) =>
                changeValue(event, setRonEurValue, setEurRonValue, 0.2)
              }
              changeValueEurRon={(event) =>
                changeValue(event, setEurRonValue, setRonEurValue, 4.92)
              }
              changeValueRonUsd={(event) =>
                changeValue(event, setRonUsdValue, setUsdRonValue, 0.25)
              }
              changeValueUsdRon={(event) =>
                changeValue(event, setUsdRonValue, setRonUsdValue, 4.06)
              }
              changeValueRonGbp={(event) =>
                changeValue(event, setRonGbpValue, setGbpRonValue, 0.17)
              }
              changeValueGbpRon={(event) =>
                changeValue(event, setGbpRonValue, setRonGbpValue, 5.73)
              }
              changeValueEurUsd={(event) =>
                changeValue(event, setEurUsdValue, setUsdEurValue, 1.22)
              }
              changeValueUsdEur={(event) =>
                changeValue(event, setUsdEurValue, setEurUsdValue, 0.82)
              }
              changeValueEurGbp={(event) =>
                changeValue(event, setEurGbpValue, setGbpEurValue, 0.86)
              }
              changeValueGbpEur={(event) =>
                changeValue(event, setGbpEurValue, setEurGbpValue, 1.16)
              }
              changeValueUsdGbp={(event) =>
                changeValue(event, setUsdGbpValue, setGbpUsdValue, 0.71)
              }
              changeValueGbpUsd={(event) =>
                changeValue(event, setGbpUsdValue, setUsdGbpValue, 1.41)
              }
              clickDisableRonEur={() =>
                clickDisable(setRonEurValue, setEurRonValue)
              }
              clickDisableRonUsd={() =>
                clickDisable(setRonUsdValue, setUsdRonValue)
              }
              clickDisableRonGbp={() =>
                clickDisable(setRonGbpValue, setGbpRonValue)
              }
              clickDisableEurUsd={() =>
                clickDisable(setEurUsdValue, setUsdEurValue)
              }
              clickDisableEurGbp={() =>
                clickDisable(setEurGbpValue, setGbpEurValue)
              }
              clickDisableUsdGbp={() =>
                clickDisable(setUsdGbpValue, setGbpUsdValue)
              }
              isDisabled={isDisabled}
              ronEurValue={ronEurValue}
              eurRonValue={eurRonValue}
              ronUsdValue={ronUsdValue}
              usdRonValue={usdRonValue}
              ronGbpValue={ronGbpValue}
              gbpRonValue={gbpRonValue}
              eurUsdValue={eurUsdValue}
              usdEurValue={usdEurValue}
              eurGbpValue={eurGbpValue}
              gbpEurValue={gbpEurValue}
              usdGbpValue={usdGbpValue}
              gbpUsdValue={gbpUsdValue}
              updateBallanceErrorRonEur={() =>
                updateBallanceError(
                  ronEurValue,
                  eurRonValue,
                  ronBallance,
                  eurBallance
                )
              }
              updateBallanceErrorRonUsd={() =>
                updateBallanceError(
                  ronUsdValue,
                  usdRonValue,
                  ronBallance,
                  usdBallance
                )
              }
              updateBallanceErrorRonGbp={() =>
                updateBallanceError(
                  ronGbpValue,
                  gbpRonValue,
                  ronBallance,
                  gbpBallance
                )
              }
              updateBallanceErrorEurUsd={() =>
                updateBallanceError(
                  eurUsdValue,
                  usdEurValue,
                  eurBallance,
                  usdBallance
                )
              }
              updateBallanceErrorEurGbp={() =>
                updateBallanceError(
                  eurGbpValue,
                  gbpEurValue,
                  eurBallance,
                  gbpBallance
                )
              }
              updateBallanceErrorUsdGbp={() =>
                updateBallanceError(
                  usdGbpValue,
                  gbpUsdValue,
                  usdBallance,
                  gbpBallance
                )
              }
              ronBallance={ronBallance}
              eurBallance={eurBallance}
              usdBallance={usdBallance}
              gbpBallance={gbpBallance}
              hideErrorNumbers={hideErrorNumbers}
              hideErrorBallance={hideErrorBallance}
            />
          </Route>
          <Route path="/">
            <Accounts
              ronBallance={ronBallance}
              eurBallance={eurBallance}
              usdBallance={usdBallance}
              gbpBallance={gbpBallance}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
