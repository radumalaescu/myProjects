import React, { useState } from 'react'
import styles from './App.module.css'
import Accounts from './components/Accounts/Accounts'
import Exchange from './components/Exchange/Exchange'

const App = () => {
  const [ronBallance, setRonBallance] = useState(1000)
  const [eurBallance, setEurBallance] = useState(100)
  const [usdBallance, setUsdBallance] = useState(50)
  const [gbpBallance, setGbpBallance] = useState(0)
  const [ronEurValue, setRonEurValue] = useState("")
  const [eurRonValue, setEurRonValue] = useState("")
  const [ronUsdValue, setRonUsdValue] = useState("")
  const [usdRonValue, setUsdRonValue] = useState("")
  const [isDisabled, setIsDisabled] = useState(false)
  const [hideErrorNumbers, setHideErrorNumbers] = useState({ display: 'none' })
  const [hideErrorBallance, setHideErrorBallance] = useState({ display: 'none' })

  const changeValue = (event, setFirstValue, setSecondValue, multiply) => {
    setFirstValue(event.target.value)
    setSecondValue((event.target.value * multiply).toFixed(2))
  }

  const clickDisable = (setFirstValue, setSecondValue) => {
    setIsDisabled(!isDisabled)
    setFirstValue("")
    setSecondValue("")
  }

  const updateBallance = (firstValue, secondValue, firstBallance , secondBallance , setFirstBallance, setSecondBallance) => {
    if (!isDisabled) {
      setFirstBallance(firstBallance - +firstValue)
      setSecondBallance(+secondBallance + +secondValue)
    } else {
      setFirstBallance(+firstBallance + +firstValue)
      setSecondBallance(+secondBallance - +secondValue)
    }
    console.log("merge")
  }

  const updateBallanceError = (firstValue, secondValue, firstBallance, secondBallance) => {
    if (+firstValue <= 0 || +secondValue <= 0) {
      setHideErrorNumbers({ display: "block" })
      setHideErrorBallance({ display: "none" })
    } else if ((!isDisabled && +firstBallance < +firstValue) || (isDisabled && +secondBallance < +secondValue)) {
      setHideErrorNumbers({ display: "none" })
      setHideErrorBallance({ display: "block" })
    } else {
      setHideErrorNumbers({ display: "none" })
      setHideErrorBallance({ display: "none" })
        if (firstValue === ronEurValue) {
              return updateBallance(firstValue, secondValue, firstBallance, secondBallance, setRonBallance, setEurBallance)
            }
        if (firstValue == ronUsdValue) {
              return updateBallance(firstValue, secondValue, firstBallance, secondBallance, setRonBallance, setUsdBallance)
            }
      }
    }

  return (
    <div className={styles.App}>
      <ul>
        <li>Accounts</li>
        <li>Exchange</li>
      </ul>
      <Accounts
        ronBallance={ronBallance}
        eurBallance={eurBallance}
        usdBallance={usdBallance}
        gbpBallance={gbpBallance} />
      <Exchange
        changeValueRonEur={(event) => changeValue(event , setRonEurValue, setEurRonValue, 0.2)}
        changeValueEurRon={(event) => changeValue(event , setEurRonValue, setRonEurValue, 4.92)}
        changeValueRonUsd={(event) => changeValue(event , setRonUsdValue, setUsdRonValue, 0.25)}
        changeValueUsdRon={(event) => changeValue(event , setUsdRonValue, setRonUsdValue, 4.05)}
        clickDisableRonEur={() => clickDisable(setRonEurValue, setEurRonValue)}
        clickDisableRonUsd={() => clickDisable(setRonUsdValue, setUsdRonValue)}
        isDisabled={isDisabled}
        ronEurValue={ronEurValue}
        eurRonValue={eurRonValue}
        ronUsdValue={ronUsdValue}
        usdRonValue={usdRonValue}
        updateBallanceErrorRonEur={() => updateBallanceError(ronEurValue, eurRonValue, ronBallance, eurBallance)}
        updateBallanceErrorRonUsd={() => updateBallanceError(ronUsdValue, usdRonValue, ronBallance, usdBallance)}
        ronBallance={ronBallance}
        eurBallance={eurBallance}
        usdBallance={usdBallance}
        hideErrorNumbers={hideErrorNumbers}
        hideErrorBallance={hideErrorBallance}
      />
    </div>
  );
}

export default App;
