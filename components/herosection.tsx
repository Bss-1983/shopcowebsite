import Image from "next/image";
import Rectangle2 from "../image/Rectangle2.png";
import Versache from "../image/versache.png";
import Zara from "../image/zara.png";
import Guci from "../image/gucci-logo-1 1.png";
import Prada from "../image/prada-logo-1 1.png";
import Ck from "../image/ck.png";
import Link from "next/link";

export default function Herosection() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col-reverse md:flex-row px-5 py-12 md:py-24 items-center">
          {/* Left section */}
          <div className="flex-grow md:w-1/2 lg:pr-16 md:pr-12 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
            <h1 className="title-font text-black font-satoshi font-extrabold text-lg sm:text-2xl md:text-4xl lg:text-5xl leading-tight">
              FIND CLOTHES THAT MATCH YOUR STYLE
            </h1>

            <p className="mb-8 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl text-[#000000]">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>

            <div className="flex w-full md:justify-start justify-center">
              <button className="inline-flex text-white font-satoshi bg-black border-0 py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 focus:outline-none text-sm sm:text-base rounded-full">
                < Link href="/categorypage"> Shop Now </Link>
              </button>
            </div>
          </div>

          {/* Right section with image */}
          <div className="w-full md:w-1/2 lg:max-w-lg">
            <Image
              src={Rectangle2}
              alt="hero"
              className="rounded-lg"
              width={2560}
              height={1440}
              priority
            />
          </div>
        </div>
      </section>

      {/* Header */}
      <header className="bg-white shadow-sm border-b w-full">
        <div className="bg-black text-white py-0.5 text-xs sm:text-sm lg:text-base flex justify-center sm:justify-between items-center w-full px-4 sm:px-8 font-satoshi">
          {/* Logo Section */}
          <div className="flex justify-between items-center gap-4 w-full max-w-7xl mx-auto">
            {/* Versace Logo */}
            <Image
              src={Versache}
              alt="Versache Logo"
              width={120}
              height={25}
              className="p-1 sm:p-2 w-24 sm:w-32 md:w-36 lg:w-40 h-auto"
            />
            {/* Zara Logo */}
            <Image
              src={Zara}
              alt="Zara Logo"
              width={80}
              height={20}
              className="p-1 sm:p-2 w-20 sm:w-28 md:w-32 lg:w-36 h-auto"
            />
            {/* Gucci Logo */}
            <Image
              src={Guci}
              alt="Guci Logo"
              width={120}
              height={25}
              className="p-1 sm:p-2 w-24 sm:w-32 md:w-36 lg:w-40 h-auto"
            />
            {/* Prada Logo */}
            <Image
              src={Prada}
              alt="Prada Logo"
              width={140}
              height={30}
              className="p-1 sm:p-2 w-28 sm:w-36 md:w-40 lg:w-44 h-auto"
            />
            {/* Calvin Klein Logo */}
            <Image
              src={Ck}
              alt="Calvin Klein Logo"
              width={140}
              height={30}
              className="p-1 sm:p-2 w-28 sm:w-36 md:w-40 lg:w-44 h-auto"
            />
          </div>
        </div>
      </header>


    </div>
  );
}
