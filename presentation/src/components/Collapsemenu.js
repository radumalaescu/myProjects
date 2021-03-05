import React, { useState } from 'react'
import './collapsemenu.css'

const Collapsemenu = () => {

const [showList, setShowList] = useState(false)

const showHideList = () => {
    setShowList(!showList)
}

    return (
    <>
        <div className="collapsemenu">
            <button onClick={() => showHideList()}>
                <span className="spanline"></span>
                <span className="spanline"></span>
                <span className="spanline"></span>
            </button>
        </div>
        {showList &&
            <ul className="collapsemenulist">
                <li><a href="#banner">Home</a></li>
                <li><a href="#aboutmecontainer">About Me</a></li>
                <li><a href="#portofoliodiv">Portofolio</a></li>
                <li><a href="#contactmediv">Contact</a></li>
            </ul>
        }
    </>
    )
}
export default Collapsemenu;