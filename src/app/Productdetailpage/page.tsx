import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "../../../components/footer";
import Newarrival from "../../../components/newarrival";
import Topselling from "../../../components/topselling";

export default function Productdetailpage() {
  return (
    <div className="flex flex-col min-h-screen"> {/* Use min-h-screen to ensure full viewport height */}
      <div className="flex-grow"> {/* This allows the content to grow and pushes the footer down */}
        {/* Home → Arrow → Category Page → Arrow → Product Detail Page in a single line */}
        <div className="inline-flex items-center space-x-2">
          {/* Home Link with Hover and Underline */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-satoshi hover:text-rose-400 font-normal underline">
              Home
            </span>
            <IoIosArrowForward className="text-lg" />
          </Link>

          {/* Category Page with Hover and Underline */}
          <span className="ml-2 hover:text-rose-400 font-satoshi font-normal underline">
            <Link href="/categorypage" className="font-satoshi hover:text-rose-400 font-normal underline ml-2">
              Category Page
            </Link>
          </span>

          <IoIosArrowForward className="text-lg" />

          {/* Product Detail Page with Hover and Underline */}
          <Link
            href=""
            className="font-satoshi hover:text-rose-400 font-normal underline ml-2"
          >
            Product Detail Page
          </Link>
        </div>
      </div>
<Topselling/>
<Newarrival/>
      <Footer /> {/* Footer is pushed to the bottom */}
    </div>
  );
}
