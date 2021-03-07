import React from 'react'
import './patients.css'
import underconstruction from '../images/underconstruction.jpg'

const Patients = ({patientsData}) => {
    console.log(patientsData)
    return (
        <div id="patientsconstruction">
            {/* <h1 className="patientsheading">Patients</h1>
            { patientsData.map((el) => {
            <div className="patientstable">
                <span id="name" className="firstcolumn">Name</span>
                <span id="birthday" className="firstcolumn">Date of Birth</span>
                <span id="instype" className="firstcolumn">Type of Insurance</span>
                <span id="age" className="firstcolumn">Age</span>
                <span id="gender" className="firstcolumn">Gender</span>
                <span id="cnp" className="firstcolumn">CNP</span> 
                
            </div>
            }} */}
            <img src={underconstruction} alt="Under Construction"></img>
        </div>
    )
}

export default Patients;