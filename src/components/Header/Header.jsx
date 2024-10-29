import logo from "../../assets/david org.png";
import { NavLink } from "react-router-dom";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function NavLinks() {
  return (
    <nav className="flex items-center gap-10 z-10 nav.">
      <NavLink
        className="text-[#fff] block p-3 text-md navlink"
        // className={({ isActive }) =>
        //   isActive
        //     ? "text-[#fff] block text-md text-center navlink  bg-[#3840ed] rounded-3xl  px-3 py-2"
        //     : "text-[#fff] block p-3 text-md navlink " 
        // }
      >
        <a href="#home">
        Home
        </a>
      </NavLink>
      <a href="#about"
        
        className="text-[#fff] block p-3 text-md navlink"
          
      >
        
        About Us
        </a>
      
      <a href="#benefits"
        
        className="text-[#fff] block p-3 text-md navlink"
      >
        
        Benefits
      
      </a>
      <a href="#faq"
       className="text-[#fff] block p-3 text-md navlink"
      >
        Faqs
      </a>
    </nav>
  );
}

function Header({getInTouch}) {

  return (
    <div className="Header bg-[#111f2d] text-[#111f2d] w-full top-0 fixed z-50">
      <div className="max-w-[1440px] mx-auto py-4 px-10 flex justify-between items-center">
          <NavLink to="/" className='absolute w-[150px] -top-[40%] shadow-md shadow-[#000] rounded-b-full bg-[#111f2d]'>
            <img
              className=" border-1 border-solid border-[#fff] rounded-full "
              src={logo}
              alt="Housify logo"
            ></img>
          </NavLink>

        <div className="hidden lg:flex ml-[20rem]">
          <NavLinks/>
        </div>

        <button className="bg-[#f6ba00] rounded-3xl font-bold px-3 h-[2.5rem]" onClick={getInTouch} >Get in Touch</button>

      </div>
    </div>
  );
}

export default Header;