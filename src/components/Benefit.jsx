import React from 'react'
import { CiClock2 } from "react-icons/ci";
import { FaUsersViewfinder } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";


const Benefit = () => {
  return (

    <div className='benefits' id='benefits'>

        <h1>5 Top Benefits of <br /> Working with <span style={{color:'#f6ba00'}}>The Keyboard</span></h1>

    
        <div className='hex-c'>
            

            <div className='hexagon-area'>

        
                <div className='hex'>
                    <h2>Reduce cost by 50%</h2>
                    <p>By hiring remote customer support specialist.</p>
                </div>
                <div className='hex'>
                    <h2>Cover multi-languages</h2>
                    <p>With customized integration.</p>
                </div>
                <div className='hex'>
                    <h2>Protect your data</h2>
                    <p>Confidentiality and non disclosure agreement.</p>
                </div>
            </div>

                <div className='hexagon-area two'>
                <div className='hex'>
                    <h2>Get support on</h2>
                    <p>Chat: Email, messenger, social media</p>
                </div>
        

        
                <div className='hex'>
                    <h2>5 star trust pilot review</h2>
                    <p>With dedicated management team</p>
                </div>
                {/* <div className='hex'>
                    <h2>Reduce Cost</h2>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                </div> */}
                {/* <div className='hex'>
                    <h2>Reduce Cost</h2>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                </div> */}

                
                

            </div>
        </div>

        <div className='care'>
            <div className="dl"></div>
            <p>You can rely on THE KEYBOARD for your customer support needs.
</p>
            <div className='b-cards'>
                <div className='card'>
                    <CiClock2  className='b-icon'/>
                    <h3>24/7 Support</h3>
                    <p>Have peace of mind, knowing that we're available around the clock to support your customers.</p>

                </div>
                <div className='card'>
                    <FaUsersViewfinder className='b-icon'/>
                    <h3>Multi-Channel</h3>
                    <p>Connect with your customers on their preferred channels—whether it's email, chat, phone, or social media.</p>
                </div>
                <div className='card'>
                    <BsGlobe className='b-icon'/>
                    <h3>Multi-Lingual</h3>
                    <p>Engage with your worldwide audience in their native language, elevating their customer experience.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Benefit