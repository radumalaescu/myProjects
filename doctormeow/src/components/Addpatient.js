import React, { useState } from 'react'
import './addpatient.css'
import Patients from './Patients'
import Imagepatient from '../images/addpatient.png'

const Addpatient = () => {
    const patientslist = [
        {
            name: "George Smith",
            insurance: "Public",
            age: 33,
            gender: "M"
        },
        {
            name: "Cleo McLaren",
            insurance: "Public",
            age: 27,
            gender: "F"
        },{
            name: "Clara Soften",
            insurance: "Private",
            age: 36,
            gender: "F",
        },
        {
            name: "Biggie Small",
            insurance: "Public",
            age: 38,
            gender: "M"
        }
    
    ]
const [patient, setPatient] = useState(patientslist)
const [fullName, setFullName] = useState("")
const [insuranceType, setInsuranceType] = useState("")
const [age, setAge] = useState()
const [gender, setGender] = useState("")
const [showForm, setShowForm] = useState(false)
const [errorName, setErrorName] = useState ()
const [errorAge, setErrorAge] = useState ()
const [errorInsurance, setErrorInsurance] = useState ()
const [errorGender, setErrorGender] = useState ()

const fullNameChange = (event) => {
    setFullName(event.target.value)
    
}

const typeOfInsuraceChange = (event) => {
    setInsuranceType(event.target.value)
    
}

const ageChange = (event) => {
    setAge(event.target.value)
    
}

const genderChange = (event) => {
    setGender(event.target.value)
}

const newPatient = () => {

    if (fullName === "") {
        setErrorName("*Please enter a name!")
   }
    
    if (fullName !== "") {
        setErrorName("")
   }

    if (!age) {
        setErrorAge("*Please enter the age!")
    }

    if (age) {
        setErrorAge("")
    }

    if (insuranceType.toUpperCase() === "PUBLIC" || insuranceType.toUpperCase() === "PRIVATE" ) {
        setErrorInsurance("")
     } 

    if (insuranceType.toUpperCase() !== "PUBLIC" && insuranceType.toUpperCase() !== "PRIVATE" ) {
        setErrorInsurance("*Please enter a valid type of insurance!")
    } 

    if (gender.toUpperCase() !== "MALE" && gender.toUpperCase() !== "FEMALE") {
        setErrorGender("*Please enter a valid gender!")
    }

    if (gender.toUpperCase() === "MALE" || gender.toUpperCase() === "FEMALE") {
        setErrorGender("")
    }

    if(fullName !== "" && age && (insuranceType.toUpperCase() === "PUBLIC" || insuranceType.toUpperCase() === "PRIVATE")
        && (gender.toUpperCase() === "MALE" || gender.toUpperCase() === "FEMALE")) {

    setPatient([...patient, {name: fullName,
    insurance: insuranceType.charAt(0).toUpperCase() + insuranceType.slice(1).toLowerCase(),
    age: age,
    gender: gender.charAt(0).toUpperCase(),
    cnp: "-" }])
    showHideForm()
    }
    
}

    const showHideForm = () => {
        setShowForm(!showForm)
    }
    return (
        <>
            <button id="addpatientbutton" onClick={() => showHideForm ()}>Add Patient</button>
            {showForm &&
            <div className="addpatientcontainer">
                <h1 className="addpatientheading">Complete the following</h1>
                <div className="addpatient">
                <form>
                <label htmlFor="fullname">Full Name</label>
                <span className="errortext">{errorName}</span>
                <input type="text" name="fullname" placeholder="Full Name" onChange={(event) => fullNameChange(event)} />
                <label htmlFor="cnp">CNP</label>
                <input type="number" name="cnp" placeholder="CNP" />
                <label htmlFor="typeofinsurance">Type of Insurance</label>
                <span className="errortext">{errorInsurance}</span>
                <input type="text" name="typeofinsurance" placeholder="Public / Private" onChange={(event) => typeOfInsuraceChange(event)} />
                <label htmlFor="age">Age</label>
                <span className="errortext">{errorAge}</span>
                <input type="number" name="age" placeholder="Age" onChange={(event) => ageChange(event)} />
                <label htmlFor="gender">Gender</label>
                <span className="errortext">{errorGender}</span>
                <input type="text" name="typeofinsurance" placeholder="Male / Female" onChange={(event) => genderChange(event)}/>
                </form>
                <img src={Imagepatient} alt="Add Patient"></img>
                <button id="submitaddpatient" onClick={() => newPatient ()}>Complete</button>
                
            </div> 

            </div>}
            
                   <Patients patientsData={patient}/>
                   
                   
        </>
        
    )
}

export default Addpatient;