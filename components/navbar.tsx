import React from "react";
<<<<<<< HEAD
import { TfiSearch} from "react-icons/tfi";
=======
import { TfiSearch,  } from "react-icons/tfi";
>>>>>>> dc014a46db4e9f1a60cf5ca78dbc7bbdf5c98a0f
import { IoPersonCircleOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { BsCart } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";


export default function Navbar() {
    return (
        <header className="bg-white shadow-sm border-b mx-auto flex flex-col w-full">
            {/* Top Banner */}
            <div className="bg-black text-white py-2 text-sm flex justify-between items-center w-full px-4 sm:px-8 font-satoshi">
                <div className="text-center flex-1">
                    Sign up and get 50% off your first order.
                    <a href="#" className="underline hover:text-rose-400 font-medium text-base">
                        <span className="ml-2">Sign Up Now</span>
                    </a>
                </div>
                <div className="flex items-center gap-2">
                    <RxCross1 className="text-[#FFFFFF] text-[20px] cursor-pointer" />
                </div>
            </div>

            {/* Main Navbar */}
            <div className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 py-4 space-y-4 lg:space-y-0">
                {/* Logo */}
                <h1 className="text-2xl sm:text-4xl text-black font-extrabold">SHOP.CO</h1>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-6 items-center">
                    <Link href="/categorypage" className="hover:text-rose-400 text-gray-800 text-sm sm:text-base font-medium flex items-center">
                        Shop
                        <IoIosArrowForward className="text-lg ml-1" />
                    </Link>

                    <a href="#" className="hover:text-rose-400 text-gray-800 text-sm sm:text-base font-medium">
                        On Sale
                    </a>
                    <a href="#" className="hover:text-rose-400 text-gray-800 text-sm sm:text-base font-medium">
                        New Arrivals
                    </a>
                    <a href="#" className="hover:text-rose-400 text-gray-800 text-sm sm:text-base font-medium">
                        Brands
                    </a>
                </nav>

                {/* Search and Icons */}
                <div className="flex items-center space-x-4 lg:space-x-6">
                    {/* Search Bar */}
                    <div className="hidden lg:flex items-center bg-gray-100 rounded-md px-3 py-2">
                        <TfiSearch className="text-gray-500 text-lg" />
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="bg-gray-100 outline-none text-sm px-2 w-[570px]"
                        />
                    </div>

                    {/* Icons */}

                   <Link href="/cart"> <BsCart className="text-gray-800 text-lg cursor-pointer hover:text-rose-400" /></Link>
                    <IoPersonCircleOutline className="text-gray-800 text-lg cursor-pointer hover:text-rose-400" />
                </div>
            </div>
        </header>
    );
}


