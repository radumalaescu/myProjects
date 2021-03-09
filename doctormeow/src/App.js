import React from 'react'
import Homepage from "./components/Homepage";
import './app.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Addpatient from "./components/Addpatient"
import Patients from './components/Patients';
import Appointments from './components/Appointments';


const App = () => {

      return (
          <>
          <div className="navlistmenu">
          <Router>
            <nav>
              <ul className="ullistmenu">
              <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/addpatient">Patients</Link>
                </li>
                <li>
                  <Link to="/appointments">Appointments</Link>
                </li>
              </ul>
            </nav>
        
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/addpatient">
                <Addpatient />
              </Route>
              <Route path="/addpatient">
                <Patients />
              </Route>
              <Route path="/appointments">
                <Appointments />
              </Route>
              <Route path="/">
              <Homepage />
           </Route>
            </Switch>
        </Router> 
        </div>
  </>
              
  );
}

export default App;

