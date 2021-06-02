import React, { forwardRef } from 'react';
import styles from './Contact.module.css'
import Fb from '../images/fb.png'
import Ldin from '../images/ldin.png'
import Github from '../images/github.png'
import { PhoneTwoTone, MailTwoTone } from '@ant-design/icons';

const Contact = (props, ref) => {
  return (
    <div className={styles.contact} ref={ref} >
      <h1>Contact Me</h1>
      <div className={styles.contactFlex}>
        <ul>
          <li>
          <PhoneTwoTone /> +40768169999{" "}
          </li>
          <li>
          <MailTwoTone /> radumalaescu97@gmail.com
          </li>
        </ul>
      </div>
      <div className={styles.iconsDiv}>
      <a href="https://www.facebook.com/radu.malaescu.9/" target="_blank" rel="noreferrer">
          <img src={Fb} alt="facebook" title="Facebook"></img> </a>
      <a href="https://www.linkedin.com/in/radu-m%C4%83l%C4%83escu-245a401b1/" target="_blank" rel="noreferrer">
          <img src={Ldin} alt="linkedIn" title="LinkedIn"></img> </a>
      <a href="https://github.com/radumalaescu/" target="_blank" rel="noreferrer">
          <img src={Github} alt="github" title="Github"></img></a>
      </div>
      <p>Copyright © 2021 My Portfolio by Radu Mălăescu.</p>
    </div>
  );
};

const forwardContact = forwardRef(Contact)
export default forwardContact;