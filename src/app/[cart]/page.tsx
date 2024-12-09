import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "../../../components/footer";

export default function Cart() {
  return (
    <div className="flex flex-col min-h-screen"> {/* Set the parent container to take full height */}
      <div className="flex-grow"> {/* This will allow the main content area to grow */}
        <div className="inline-flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="hover:text-rose-400 font-satoshi">Home</span>
            <IoIosArrowForward className="text-lg" />
          </Link>

          <span className="font-satoshi"> Cart</span>
        </div>
      </div>

      <Footer /> {/* Footer will stay at the bottom */}
    </div>
  );
}
