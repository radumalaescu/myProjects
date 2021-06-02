import React, { useState } from 'react'
import styles from './Collapsemenu.module.css'

const Collapsemenu = ({scrollToHeader, scrollToAbout, scrollToPortofolio, scrollToContact}) => {

    const [showList, setShowList] = useState(false)
    
    const showHideList = () => {
        setShowList(!showList)
    }

        return (
        <div className={styles.collapsemenu}>
                <button onClick={() => showHideList()}>
                    <span className="spanline"></span>
                    <span className="spanline"></span>
                    <span className="spanline"></span>
                </button>
            {showList &&
                <ul className="collapsemenulist" onClick={showHideList}>
                    <li onClick={scrollToHeader}>Home</li>
                    <li onClick={scrollToAbout}>About Me</li>
                    <li onClick={scrollToPortofolio}>Portofolio</li>
                    <li onClick={scrollToContact}>Contact</li>
                </ul>
            }
        </div>
        )
    }
    export default Collapsemenu;