// import logo from "../../assets/HomeHub.jpeg";
// import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer w-full rounded-t-[90px] md:rounded-t-[120px] bg-[#111f2d] text-[#EAEAEA]">
      <div className="max-w-[1440px] mx-auto pt-10 md:pt-20  px-10 md:px-20 text-center  ">
        {/* footer header */}

        <div className="col-span-3 grid grid-cols-3 ">
          {/* footer links */}
          <ul className="py-4 ">
            <li className=" block text-base" >
              <span className="text-lg">Our Address</span>
            </li>
            <li className="pt-4 text-base block" >
              <span className="text-sm"> Learn More</span>
            </li>
            <li className="pt-4 block text-base" >
              <span className="text-sm">View More Properties</span>
            </li>
            <li className="pt-4 block text-base" >
              <span className="text-sm">Let's Hear From You</span>
            </li>
          </ul>

          <ul className="py-4 ">
            <li className=" block text-base" >
              <span className="text-lg">Our Phone</span>
            </li>
            <li className="pt-4 text-base block">
              <span className="text-sm"> Learn More</span>
            </li>
            <li className="pt-4 block text-base" >
              <span className="text-sm">View More Properties</span>
            </li>

            <li className="pt-4 block text-base" >
              <span className="text-sm">Let's Hear From You</span>
            </li>

          </ul>

          <ul className="py-4 ">
            <li className=" block text-base" >
              <span className="text-lg">Email Contact</span>
            </li>
            <li className="pt-4 text-base block">
              <span>frank@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center py-6  text-xl text-[#74c69d]">
        <span>Copyright HomeHub 2023</span>
      </div>
    </div>
  );
}

export default Footer;
