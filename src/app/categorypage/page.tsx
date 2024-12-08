import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "../../../components/footer";

export default function CategoryPage() {
  return (
    <div className="flex flex-col min-h-screen"> {/* Use min-h-screen to ensure full viewport height */}
      <div className="flex-grow"> {/* This will allow the main content to grow */}
        <div className="inline-flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="hover:text-rose-400">Home</span>
            <IoIosArrowForward className="text-lg" />
          </Link>
          <span className="ml-2 hover:text-rose-400">Category Page</span>
          <IoIosArrowForward className="text-lg" />
          <Link
            href="/Productdetailpage"
            className="font-satoshi hover:text-rose-400 font-400 underline ml-2"
          >
            Product Detail Page
          </Link>
        </div>
      </div>

      <Footer /> {/* Footer is at the bottom */}
    </div>
  );
}
