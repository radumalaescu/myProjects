import React from "react";
import "./contact.css";
import Fb from '../images/fb.png'
import Ldin from '../images/ldin.png'
import Github from '../images/github.png'
import { PhoneTwoTone, MailTwoTone } from '@ant-design/icons';

const Contact = () => {
  return (
    <div id="contactmediv">
      <h1 id="contactmeheading">Contact Me</h1>
      <div id="contactlistdiv">
        <ul id="contactlist">
          <li className="licontact">
          <PhoneTwoTone /> +40768169999{" "}
          </li>
          <li className="licontact">
          <MailTwoTone /> radumalaescu97@gmail.com
          </li>
        </ul>
      </div>
      <div id="iconscontactdiv">
      <a href="https://www.facebook.com/radu.malaescu.9/" target="_blank">
          <img src={Fb} alt="facebook" className="iconscontact" title="Facebook"></img> </a>
      <a href="https://www.linkedin.com/in/radu-m%C4%83l%C4%83escu-245a401b1/" target="_blank">
          <img src={Ldin} alt="linkedIn" className="iconscontact" title="LinkedIn"></img> </a>
      <a href="https://github.com/radumalaescu/" target="_blank">
          <img src={Github} alt="github" className="iconscontact" title="Github"></img></a>
      </div>
      <p id="copyrightp">Copyright © 2021 My Portfolio by Radu Mălăescu.</p>
    </div>
  );
};

export default Contact;
