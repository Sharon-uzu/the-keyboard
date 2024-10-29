import React, {useState, useRef} from 'react'
import emailjs from '@emailjs/browser';
import { FaBars} from "react-icons/fa";
import { RiCloseFill} from "react-icons/ri";
import logo from "../assets/david org.png";
import Modal from "react-modal";



const Nav = () => {
  const form  = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4li8tth', 'template_hcgxasc', form.current, '9ymy82YiXuemcXdy1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  

  

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click)
        document.body.style.overflow = click ? 'auto' : 'hidden'; // Disable or enable scrolling
    };
    const [activeNav, setActiveNav] = useState('/')


    const closeMenuBar = () => {
        setClick(false);
        document.body.style.overflow = 'auto'; // Enable scrolling

    
      };




      const [isOpen, setIsOpen] = useState(false);
      const toggleModal = () => {
        setIsOpen(!isOpen);
      };
      const openModal = () =>{
        setClick(false);
        document.body.style.overflow = 'hidden'; // Disable or enable scrolling
        setIsOpen(true);
      }
      const closeModal = () =>{
        setIsOpen(false);
        document.body.style.overflow = 'auto'; // Enable scrolling

      }


  return (

    <div>
      <header className="Header bg-[#111f2d] text-[#111f2d] w-full top-0 fixed z-50">
          
          <nav>

          {/* <div className='absolute  -top-[40%] shadow-md shadow-[#000] rounded-b-full bg-[#111f2d]'>
              <h6><img
                className=" border-1 border-solid border-[#fff] rounded-full "
                src={logo}
                alt="Housify logo"
              />
            </h6></div> */}

            <div className="logo w-[10px] lg:shadow-sm shadow-[#000] rounded-b-full bg-[#111f2d] md:flex md:items-center md:justify-center md:mt-12" ><img src={logo} alt="" className='md:w-2/3' /></div>


            <ul className={click ? 'menu active' : 'menu'}>

              <div className='list1'>
                <li><a href='#home' onClick={closeMenuBar}>Home</a></li>
                <li><a href='#about' onClick={closeMenuBar}>About</a></li>
                <li><a href='#benefits' onClick={closeMenuBar}>Benefits</a></li>
                <li><a href='#faq' onClick={closeMenuBar}>FAQs</a></li>
              </div>

              <div className='list2'>
                <button onClick={openModal}>Get In Touch</button>
              </div>
              
            </ul>

            <div className='bars' onClick={handleClick}>
            {click ? (<RiCloseFill id='close'/>) : (<FaBars id='bar' />)}
              
          </div>

          </nav>

          {/* <div className={click ? 'cover' : 'cover active'}></div> */}

          
        
        </header>


        {/* MODAL */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Example Modal"
        className="two"
        style={{
          overlay: {
            position: "fixed",
            top: "0px",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 12,
            // backgroundColor: "hsl(0, 0%, 0%, .5)",
            backgroundColor: "hsl(0, 0%, 0%, .6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <form className='appoint' ref={form} onSubmit={sendEmail}>
          

          <div className='form'>
            <div>

           
              <h3>Fill The Form To Book A Meeting *</h3>
              
              <input type="text" name='user_country' placeholder='Country' required/>
              <input type="text" name='user_company' placeholder='Company Name' required/>
              <input type="text" name='user_firstname' placeholder='First Name' required/>
              <input type="text" name='user_lastname' placeholder='Last Name' required/>
              <input type="email" name="user_email" id="" placeholder='Work email' required/>
              <input type="tel" name="user_tel" id="" placeholder='Phone Number' required/>
              <button type="submit">Submit</button>
              <button type="button" className='btn2' onClick={closeModal}>Close</button>
            </div>
          </div>

        </form>

      </Modal>
      </div>
  )
}

export default Nav