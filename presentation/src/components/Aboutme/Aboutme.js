import React, { forwardRef } from 'react'
import styles from './Aboutme.module.css'
import Myphoto from './Myphoto/Myphoto'
import Mydescription from './Mydescription/Mydescription'

const Aboutme = (props, ref) => {
    return (
        <div className={styles.aboutme} ref={ref}>
            <h1>About <span>Me</span></h1>
            <div className={styles.aboutMeFlex}>
                <Myphoto />
                <Mydescription />
            </div>
            </div>
    )
}

const forwardAbout = forwardRef(Aboutme)

export default forwardAbout;