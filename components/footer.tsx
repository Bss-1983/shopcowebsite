<<<<<<< HEAD
=======
import Link from 'next/link';
>>>>>>> dc014a46db4e9f1a60cf5ca78dbc7bbdf5c98a0f
import React from 'react';
import { FaFacebookF, FaInstagram, FaPaypal, FaCcVisa, FaCcMastercard } from 'react-icons/fa'; // Import the icons
import { GrTwitter } from "react-icons/gr";

<<<<<<< HEAD
=======

>>>>>>> dc014a46db4e9f1a60cf5ca78dbc7bbdf5c98a0f
export default function Footer() {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-black text-white py-4 rounded-t-lg mb-12"> {/* Adjusted padding */}
        <div className="container mx-auto flex flex-col items-center justify-between px-5">
          <span className="sm:text-3xl text-5xl font-bold mb-4 sm:mb-0"> {/* Larger font size */}
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </span>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            {/* Input fields stacked on smaller screens */}
<<<<<<< HEAD
            <input 
              type="text" 
              placeholder="Subscribe to Newsletter" 
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 w-full sm:w-auto"
            />
            <input 
              type="email"  
              placeholder="Enter your email address" 
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 w-full sm:w-auto"
=======

            <button className="underline inline-flex text-gray-800 font-satoshi bg-white border-0 py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 focus:outline-none text-sm sm:text-base rounded-md">
              < Link href="Subscribe to Newsletter"> Subscribe to Newsletter </Link>
            </button>

            <input
              type="email"
              placeholder="Enter your email address"
              className=" text-gray-800 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 w-full sm:w-auto"
>>>>>>> dc014a46db4e9f1a60cf5ca78dbc7bbdf5c98a0f
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-100 text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-start lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-full md:w-64 flex-shrink-0 mx-auto text-center md:text-left mb-12 md:mb-0">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className="ml-3 text-4xl font-extrabold">SHOP.CO</span>
            </a>
            <p className="mt-2 text-sm text-gray-500 font-satoshi">
              We have clothes that suit your style and which you’re proud to wear. From women to men.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            {['COMPANY', 'HELP', 'FAQ', 'RESOURCES'].map((section, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 md:mb-0">
                <h2 className="title-font text-black tracking-widest text-sm mb-3 font-satoshi font-medium">
                  {section}
                </h2>
                <nav className="list-none">
                  {['About', 'Features', 'Works', 'Careers'].map((item, idx) => (
                    <li key={idx}>
                      <a className="text-gray-600 hover:text-gray-800 font-satoshi">{item}</a>
                    </li>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-200">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between items-center">
            {/* Social media icons section */}
            <div className="flex justify-center sm:ml-0 ml-3 mt-2 space-x-4">
              <a href="#facebook" className="text-gray-500 hover:text-gray-800">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#twitter" className="text-gray-500 hover:text-gray-800">
                <GrTwitter className="w-5 h-5" />
              </a>
              <a href="#instagram" className="text-gray-500 hover:text-gray-800">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>

            {/* Payment icons section */}
            <div className="flex justify-center sm:ml-0 mt-4 sm:mt-0 space-x-4">
              <a href="#paypal" className="text-gray-500 hover:text-gray-800">
                <FaPaypal className="w-5 h-5" />
              </a>
              <a href="#visa" className="text-gray-500 hover:text-gray-800">
                <FaCcVisa className="w-5 h-5" />
              </a>
              <a href="#mastercard" className="text-gray-500 hover:text-gray-800">
                <FaCcMastercard className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
