import React from 'react'

const Userinput = (props) => {
    return(
    <div>
        <input type="text" onChange={props.changename}/>
    </div>
    )}
export default Userinput;