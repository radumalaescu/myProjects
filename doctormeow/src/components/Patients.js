import React from 'react'
import './patients.css'

const Patients = ({patientsData}) => {
    return (
        <div id="patientsconstruction">
            <h1 id="patientsheading">Patients</h1>
            <div className="patientfirstline">
                <span className="line1" id="colname">Name</span>
                <span className="line1" id="ageline">Age</span>
                <span className="line1" id="insuranceline">Insurace</span>
                <span className="line1" id="gender">Gender</span>
                </div>
                
            {patientsData.map((el, id1) => (
                <div className="patientstable" key={id1}>
                <span className="line" id="colnamevalue">{el.name}</span>
                <span className="line">{el.age}</span>
                <span className="line">{el.insurance}</span>
                <span className="line">{el.gender}</span>
                </div>
            ))}
            
        </div>
    )
}

export default Patients;