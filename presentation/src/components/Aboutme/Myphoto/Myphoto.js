import React from 'react'
import myphoto from '../../../images/myphoto.png'
import styles from './Myphoto.module.css'

const Myphoto = () => {
    return (
        <div className={styles.myphoto}>
            <img src={myphoto} alt="Radu"></img>
            <span>Radu</span>
        </div>
    )
}

export default Myphoto;