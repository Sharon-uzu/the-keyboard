import React from "react";
import pix2 from '../../assets/photo.png'
import pix3 from '../../assets/p3.png'


const Service = (props) => {
  // TODO: use the right icons for each service.

  return (
    <div>
      <div className="w-11/12  mx-auto py-4  flex-col justify-between text-center md:flex-row relative ">
        {/* property-card-container */}
        <div className="flex flex-col-reverse lg:flex-row  gap-6 md:gap-10 py-10 items-center">
          <div className="md:w-1/2">
            {/* section label */}
            <div className="py-6 md:text-left">
              <h3 className="text-[#f6ba00] "> {props?.label} </h3>
              <h2 className="font-bold mt-6 text-xl lg:text-3xl text-[#fff] md:w-11/12">{props?.header}</h2>
              <p className="lg:text-xl text-lg font-extralight mt-4  md:w-11/12"> {props?.text} </p>
              <button className="mt-6 bg-[#f6ba00] hover:bg-[#fff] text-[#111f2d] p-3 rounded-2xl"><a href="#benefits">Learn More</a></button>

            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-x-8 text-left ">
            {/* <div className="p-4 md:p-8 rounded-[25px] rounded-tr-none text-[#29434e]   bg-[#FFFFFF] hover:bg-[#F2F2F2] hover:border hover:border-[#EAEAEA] shadow-[#74c69d] shadow-md duration-500">
              <h4 className="text-[#3840ed]">Rent Property</h4>
              <p>With our vast search tool, you can find your dream home from anywhere in the world.</p>
            </div> */}
            <img src={pix2} alt="" className="rounded-[25px] rounded-tr-none text-[#29434e] h-52 img img1"/>

            {/* <div className="p-4 md:p-8 rounded-[25px] rounded-tr-none text-[#29434e]   bg-[#FFFFFF] hover:bg-[#F2F2F2] hover:border shadow-[#74c69d] shadow-md hover:border-[#EAEAEA] duration-500">
              <h4 className="text-[#3840ed]">Property Managers</h4>
              <p>With our vast search tool, you can find your dream home at Shelter Africque Estate in Uyo.</p>
              
            </div> */}
            <img src={pix3} alt="" className="rounded-[25px] rounded-tr-none text-[#29434e] h-52 img img2"/>

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Service;
