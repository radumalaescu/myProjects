import React from 'react'
import './addpatient.css'
import Patients from './Patients'
import Imagepatient from '../images/addpatient.png'

const Addpatient = (props) => {
    const patientslist = [
        {
            name: "George Smith",
            birthday: "12/12/1987",
            insurance: "Public",
            Age: 33,
            Gender: "M",
            CNP: "-"
        },
        {
            name: "Andreea McLaren",
            birthday: "25/04/1993",
            insurance: "Public",
            Age: 27,
            Gender: "F",
            CNP: "-"
        },{
            name: "Clara Soften",
            birthday: "01/03/1985",
            insurance: "Private",
            Age: 36,
            Gender: "F",
            CNP: "-"
        },
        {
            name: "Biggie Small",
            birthday: "19/09/1982",
            insurance: "Public",
            Age: 38,
            Gender: "M",
            CNP: "-"
        },
        {
            name: "George Bean",
            birthday: "12/08/1995",
            insurance: "Public",
            Age: 25,
            Gender: "M",
            CNP: "-"
        },
        {
            name: "Roberta Anderson",
            birthday: "30/10/1999",
            insurance: "Private",
            Age: 21,
            Gender: "F",
            CNP: "-"
        },
        {
            name: "David Haye",
            birthday: "18/02/1980",
            insurance: "Private",
            Age: 41,
            Gender: "M",
            CNP: "-"
        }
    ]
    return (
        <>
                <h1 className="addpatientheading">Complete the following</h1>
                <div className="addpatient">
                <form>
                <label htmlFor="fullname">Full Name</label>
                <input type="text" name="fullname" placeholder="Full Name" />
                <label htmlFor="datebirth">Date of Birth</label>
                <input type="date" name="datebirth" placeholder="Date of birth" />
                <label htmlFor="cnp">CNP</label>
                <input type="number" name="cnp" placeholder="CNP" />
                <label htmlFor="typeofinsurance">Type of Insurance</label>
                <select name="typeofinsurance" size="2">
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                </select>
                <label htmlFor="age">Age</label>
                <input type="number" name="age" placeholder="Age" />
                <label htmlFor="gender">Gender</label>
                <select name="gender" size="2">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <button id="submitaddpatient">Complete</button>
                </form>
                   <div id="patientshiddencomponent"> <Patients patientsData={patientslist} /></div>
                   <img src={Imagepatient} alt="Add Patient"></img>
                   </div>
        </>
        
    )
}

export default Addpatient;