// import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FaRegCheckSquare } from "react-icons/fa";
import Service from "../About/Service";
import React from "react";
import pix1 from '../../assets/p2.png'


function Home() {

  // const {items} = useFetch()
  const [openForm,setOpenForm] = React.useState(false)
  const getInTouch = () =>{
    setOpenForm(!openForm)
  }
  const listOptions = [
    "Stress free peak & After - Hours support",
    "Offload your routine tasks",
    "High Quality & fully managed Agents",
    "Free up working Capital & in House staff"
  ]

  return (
    <div className="Home">
      {/* <Header getInTouch={getInTouch}/> */}
      <section className=" my-8">
        <div className="mx-auto w-11/12 py-3   md:flex justify-between">
          <div className="grid md:grid-cols-2 grid-cols-1  text-center md:text-left hello">
            <div className=" flex  flex-col gap-6">
              <h1 className=" text-lg  lg:text-4xl text-[#111f2d] out">With our outsourced support service center catering to proprietary firms.</h1>
              <ul className="flex items-start flex-col gap-4">
                {listOptions.map(val => (
                <li className="flex gap-2 items-center text-sm lg:text-2xl"><FaRegCheckSquare style={{color:"#f6ba00"}}/> {val}</li>
                ))}
              </ul>
              
            </div>
            {/* <div className={openForm ? " lg:ml-[6rem]" : ""}>
              {openForm &&  <Form/>}
            </div> */}

            <img src={pix1} alt="" className="rounded-3xl h-img" />
           
            {/* {<HeroImageBox p="Featured Property" url ={items[0]?.url || Wallpaper}/>} */}
          </div>
        </div>
      </section>

      <section className="bg-[#111f2d] text-white flex" id="about">
        <div className="max-w-[1440px] mx-auto py-5 px-2  md:flex justify-between">
          <Service
            label="About Us"
            header="We provide proprietary firms with extensive customer support solutions"
            text="Designed to enhance your customer relationships and boost retention rates. We assist you in ensuring round-the-clock coverage across multiple time zones, offering support in various languages beyond English to demonstrate your commitment to customer care. Our services offer a mutually beneficial arrangement, delivering high-quality customer support at a significantly reduced cost."
          />
        </div>
      </section>

      {/* <section className="bg-[#EAEAEA] text-black">
      <FeaturedProperty header="Featured Properties" text="Check Out The top rated Properties around the World " items={items} />
      </section> */}
      {/* <section className="bg-[#29434e]  text-white border-y-2 border-[#262829]">
        <div className="text-center pt-20">
          <h3 className="text-[#74c69d] text-2xl">How it Works</h3>
          <p className="mb-12 text-[#74c69d]">Confidence in Collaboration</p>
        </div>
        <Works />
      </section> */}
      {/* <section className="bg-[#29434e] text-white">
        <div className="text-center pt-20 text-[#74c69d]">
          <h3 className=" text-2xl ">Top Property Owners</h3>
          <p >Do you prefer to get in touch with any of them</p>
          <p>Now you meet them at your own comfort.</p>
        </div>
        <ExpertSection />
      </section> */}
      {/* <section className="bg-black text-white">
        <div className="text-center pt-14">
          <h3 className="text-purple-700 text-2xl">Our Partners</h3>
          <p className="mb-12">We have strong partnership with renowned agencies and organizations.</p>
        </div>
        <Partners />
      </section> */}
      {/* <section className="bg-[#fff]  text-center pt-16">
        <h3 className="text-blue-[#3840ed] text-2xl ">Have a Question?</h3>
        <p className="mb-20 text-white">Let us help you.</p>
        <Footer />
      </section> */}
    </div>
  );
}

export default Home;