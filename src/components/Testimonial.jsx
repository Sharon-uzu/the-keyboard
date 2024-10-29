import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import '../App.css';
import { FaStar} from "react-icons/fa";
import t1 from '../assets/test1.jpeg'
import t2 from '../assets/test2.jpeg'
import t3 from '../assets/test3.jpeg'


const Testimonial = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      

  return (
    <div className='test'>
        <h6>Happy Clients</h6>
        <h2>What Companies Are Saying About Us</h2>
        
    <Carousel className='one'
    swipeable={true}
    draggable={true}
    showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={2000}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    >
        
    <div className='test-main'>
      <div className='flex-main'>
        <div className='test-p'>
            <img src={t1} alt="" />
        </div>
    
          <h4>TOPTIER TRADER</h4>
          <FaStar className='star'/>
          <FaStar className='star'/>
          <FaStar className='star'/>
          <FaStar className='star'/>
          <FaStar className='star'/>

    
      </div>

      <h5>“Excellent customer service performance! The team was responsive, knowledgeable, and resolved my issue promptly. Highly satisfied!”</h5>
                  
  </div>

  <div className='test-main'>
      <div className='flex-main'>
        <div className='test-p'>
            <img src={t2} alt="" />
        </div>
        
          <h4>The Funded Trader</h4>
          <FaStar className='star'/>
          <FaStar className='star'/>
          <FaStar className='star'/>
          <FaStar className='star'/>
          <FaStar className='star'/>

        
      </div>

      <h5>“Impressive customer service! Quick responses, helpful staff, and effective issue resolution. A positive experience overall.”</h5>
                  
  </div>

  <div className='test-main'>
    
      <div className='flex-main'>
        <div className='test-p'>
            <img src={t3} alt="" />
        </div>
        <h4>Audacity Capital</h4>
          
          <FaStar className='star'/>
          <FaStar className='star'/>
          <FaStar className='star'/>
          <FaStar className='star'/>
          <FaStar className='star'/>

        
      </div>

      <h5>“Exceptional customer service! The team at The Keyboard went above and beyond with their customer support. Quick responses, knowledgeable support, and they resolved issue seamlessly.”</h5>
                  
  </div>


      
  </Carousel>
    </div>
  )
}

export default Testimonial