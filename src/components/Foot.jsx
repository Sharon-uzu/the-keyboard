import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import logo from '../assets/david org.png'

const Foot = () => {
  return (
    <div className='footer'>
        <div className="dl"></div>
        <section className='foot '>
        <div className='first'>
                <img src={logo} alt="" />
                <a>We provide extensive customer support solutions designed to enhance your customer relationships and boost retention rates.</a>

            </div>
            <div>
                <h2>Our Address</h2>
                <a>KG 11Av,  3rd Floor, Opposite of COGEBANK, Kigali, city, Rwanda</a>

            </div>
            <div>
                <h2>Contact Us</h2>
                <a href="mailto:thekeyboard211@gmail.com">thekeyboard211@gmail.com</a>
                

            </div>

            {/* <div>
                <h2>Social Media</h2>
                <div className='sos'>
                    <a href=""><FaFacebookF /></a>
                    <a href=""><FaInstagram /></a>
                    <a href=""><FaTwitter /></a>
                    <a href=""><FaLinkedinIn /></a>

                </div>

            </div> */}
        </section>
        <p className='copy'>Copyrights ©2021 - 2023 The Keyboard</p>
    </div>
  )
}

export default Foot