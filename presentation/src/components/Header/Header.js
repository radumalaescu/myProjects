import React, { forwardRef } from 'react'
import Collapsemenu from './Collapsemenu/Collapsemenu'
import Navbar from './Navbar/Navbar'
import styles from './Header.module.css'

const Header = ({scrollToHeader, scrollToAbout, scrollToPortofolio, scrollToContact}, ref) => {
    return (
        <div className={styles.Header} ref={ref}>
            <div className={styles.opacity}>
                <Navbar
                 scrollToHeader={scrollToHeader} 
                 scrollToAbout={scrollToAbout} 
                 scrollToPortofolio={scrollToPortofolio}
                 scrollToContact={scrollToContact} />
                <Collapsemenu
                 scrollToHeader={scrollToHeader} 
                 scrollToAbout={scrollToAbout} 
                 scrollToPortofolio={scrollToPortofolio}
                 scrollToContact={scrollToContact} />
                <h1 >Front-End Web Developer</h1>
                <p>with a huge thirst to learn</p>
            </div>
        </div>
    )
}

const forwardHeader = forwardRef(Header)

export default forwardHeader;