import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../components/Header/Header';
import Slider from "../components/Slider";
import Home from '../components/Home/Home';
import Faq from '../components/Faq';
import Foot from '../components/Foot';
import Benefit from '../components/Benefit';
import Nav from '../components/Nav';
import Testimonial from '../components/Testimonial';

const Main = () => {
  
  return (
    <div>
        <Nav/>
        <Slider/>
        <Home/>
        <Benefit/>
        <Testimonial/>
        <Faq/>
        <Foot/>
    </div>
  )
}

export default Main