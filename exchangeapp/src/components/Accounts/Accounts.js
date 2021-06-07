import React, {useRef, useEffect } from 'react'
import styles from './Accounts.module.css'
import AllAccounts from './AllAccounts/AllAccounts'
import SingleAccount from './SingleAccount/SingleAccount'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import roFlag from '../../images/ro.png'
import euFlag from '../../images/eu.png'
import usFlag from '../../images/us.png'
import ukFlag from '../../images/uk.png'

const Accounts = ({ ronBallance, eurBallance, usdBallance, gbpBallance }) => {
    const allRef = useRef()

    useEffect(() => {
        allRef.current.focus()
    }, [])

    const totalBallance = ronBallance + eurBallance * 4.92 + usdBallance * 4.2 + gbpBallance * 5.5
    return (
        <Router>
            <div className={styles.Accounts}>
                <ul>
                    <li><Link to="/" ref={allRef}>All</Link></li>
                    <li><Link to="/ron">Ron</Link></li>
                    <li><Link to="/eur">Eur</Link></li>
                    <li><Link to="/usd">Usd</Link></li>
                    <li><Link to="/gbp">Gbp</Link></li>
                </ul>
                <Switch>
                    <Route path="/ron">
                        <SingleAccount currency="Leu romanesc" currencyAbv="RON" amount={+ronBallance.toFixed(2)} flag={roFlag} />
                    </Route>
                    <Route path="/eur">
                        <SingleAccount currency="Euro" currencyAbv="EUR" amount={+eurBallance.toFixed(2)} flag={euFlag} />
                    </Route>
                    <Route path="/usd">
                        <SingleAccount currency="US Dollar" currencyAbv="USD" amount={+usdBallance.toFixed(2)} flag={usFlag} />
                    </Route>
                    <Route path="/gbp">
                        <SingleAccount currency="Great Britain Pound" currencyAbv="GBP" amount={+gbpBallance.toFixed(2)} flag={ukFlag} />
                    </Route>
                    <Route path="/">
                        <AllAccounts currencyAbv="RON" amount={+totalBallance.toFixed(2)} />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Accounts;