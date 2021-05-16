import React from 'react'

const ValidationComponent = (props) => {
    let validation = "Text too short!"
    if (props.textLength > 5) {
        validation = "Text long enough!"
    }
    return (
        <div>
            <p>{props.textLength}</p>
            {validation}
        </div>
    )
}

export default ValidationComponent