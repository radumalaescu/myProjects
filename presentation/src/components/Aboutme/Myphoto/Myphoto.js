import React, { useEffect } from 'react'
import myphoto from '../../../images/myphoto.png'
import styles from './Myphoto.module.css'
import AOS from 'aos'
import "aos/dist/aos.css";

const Myphoto = () => {
    useEffect(() =>
        AOS.init({
            duration: 1000
        }))

    return (
        <div className={styles.myphoto} data-aos={"fade-right"} data-aos-once={true} data-aos-delay={"800"}>
            <img src={myphoto} alt="Radu"></img>
            <span>Radu</span>
        </div>
    )
}

export default Myphoto;