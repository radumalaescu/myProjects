import React from 'react'

const Validation = (props) => {
    let textValidation = "Text is too short!"
    if(props.inputLength > 5) {
        textValidation = "Text is long enough!"
    }
    
    return (
        <div>
            <p>{props.inputLength}</p>
            <p>{textValidation}</p>
        </div>
    )
}

export default Validation;