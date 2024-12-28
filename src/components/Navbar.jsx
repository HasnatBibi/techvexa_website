import React, { useState, useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  // Handle sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);  // Activate sticky navbar when scrollY > 0
      } else {
        setSticky(false); // Deactivate sticky navbar when at top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = () => {
    setIsOpen(false); // Close mobile menu after clicking on an item
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#003049] text-white py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-6 text-sm ">
            {/* Email and Phone */}
            <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <FaEnvelope />
                <span>info@techvexa.com</span>
              </div>
              <div className="border-t sm:border-l border-gray-400 sm:h-4 h-auto mx-6 sm:mx-0"></div>
              <div className="flex items-center space-x-2">
                <FaPhoneAlt />
                <span>+3670 342 1589</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 text-lg">
              <a href="#" className="hover:text-gray">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-gray">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-white shadow-md ${sticky ? 'fixed top-0 left-0 w-full z-50' : ''}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-6 lg:px-24">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
  <img src="/src/assets/logo.png" alt="TechVexa" className="h-16 w-auto" />
  <span className="hidden sm:inline text-2xl font-bold text-[#0e456c]">Tech Vexa</span>
</a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex justify-center items-center space-x-8 text-lg">
            <a href="/" className="text-gray-700 font-semibold hover:text-[#D62828] transition duration-300" onClick={handleMenuItemClick}>
              HOME
            </a>
            <a href="#about" className="text-gray-700 font-semibold hover:text-[#D62828] transition duration-300" onClick={handleMenuItemClick}>
              ABOUT
            </a>
            <a href="#services" className="text-gray-700 font-semibold hover:text-[#D62828] transition duration-300" onClick={handleMenuItemClick}>
              SERVICES
            </a>
            <a href="#offers" className="text-gray-700 font-semibold hover:text-[#D62828] transition duration-300" onClick={handleMenuItemClick}>
              OFFERS
            </a>
            <div className="relative group">
              <button className="flex items-center text-gray-700 font-semibold hover:text-[#D62828] transition duration-300">
                OTHERS
                <IoMdArrowDropdown className="ml-1 text-lg" />
              </button>
              <div className="absolute top-full left-0 w-40 bg-[#003049] shadow-lg rounded-lg p-2 group-hover:block hidden z-50">
                <a href="#pricing"  className="block text-white py-3 px-4 hover:bg-[#D62828] rounded" onClick={handleMenuItemClick}>PRICING</a>
                <a href="#reviews"  className="block text-white py-3 px-4 hover:bg-[#D62828] rounded" onClick={handleMenuItemClick}>REVIEWS</a>
                <a href="#value"  className="block text-white py-3 px-4 hover:bg-[#D62828] rounded" onClick={handleMenuItemClick}>VALUE</a>
                <a href="#contact" className="block text-white py-3 px-4 hover:bg-[#D62828] rounded" onClick={handleMenuItemClick}>CONTACT</a>
                <a href="#blog" className="block text-white py-3 px-4 hover:bg-[#D62828] rounded" onClick={handleMenuItemClick}>BLOG</a>
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <Link to="/contact-us">
          <button className="flex font-mono items-center justify-center bg-[#D62828] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-buttonColor transform hover:translate-y-[-5px] transition duration-300 whitespace-nowrap">
            CONTACT US
            <FaArrowRight className="ml-2" />
          </button>
          </Link>

          {/* Hamburger Menu */}
          <button className="lg:hidden text-3xl text-gray" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="lg:hidden bg-[#003049] px-6 py-6 space-y-10 flex flex-col items-center justify-center text-white">
            <li><a href="/" className="block" onClick={handleMenuItemClick}>Home</a></li>
            <li><a href="#about" className="block" onClick={handleMenuItemClick}>About</a></li>
            <li><a href="#services" className="block" onClick={handleMenuItemClick}>Services</a></li>
            <li><a href="#offers" className="block" onClick={handleMenuItemClick}>Offers</a></li>
            <li><a href="#pricing" className="block" onClick={handleMenuItemClick}>Pricing</a></li>
            <li><a href="#reviews" className="block" onClick={handleMenuItemClick}>Reviews</a></li>
            <li><a href="#value" className="block" onClick={handleMenuItemClick}>Value</a></li>
            <li><a href="#blog" className="block" onClick={handleMenuItemClick}>Blog</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
