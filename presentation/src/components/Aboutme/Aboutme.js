import React, { forwardRef, useEffect } from 'react'
import styles from './Aboutme.module.css'
import Myphoto from './Myphoto/Myphoto'
import Mydescription from './Mydescription/Mydescription'
import AOS from 'aos'
import "aos/dist/aos.css";

const Aboutme = (props, ref) => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
        }, [])

    return (
        <div className={styles.aboutme} ref={ref} >
            <h1 data-aos={"fade-up"} data-aos-once={true}>About <span>Me</span></h1>
            <div className={styles.aboutMeFlex}>
                <Myphoto />
                <Mydescription />
            </div>
            </div>
    )
}

const forwardAbout = forwardRef(Aboutme)

export default forwardAbout;