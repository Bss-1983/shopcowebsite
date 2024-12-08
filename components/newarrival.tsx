import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa6";

// Product List
const products = [
  {
    title: "T-SHIRT WITH TAPE DETAILS",
    price: "$120",
    oldprice: "$260",
    image: "/Tshirt.png",
    rating: 3.5,
    reviews: "65",
  },
  {
    title: "SKINNY FIT JEANS",
    price: "$240",
    oldprice: "$300",
    image: "/Skinyfit.png",
    rating: 4.5,
    reviews: "65",
  },
  {
    title: "CHECKERED SHIRT",
    price: "$180",
    oldprice: null,
    image: "/CHECKEREDSHIRT.png",
    rating: 4.5,
    reviews: "65",
  },
  {
    title: "SLEEVE STRIPED",
    price: "$180",
    oldprice: null,
    image: "/SLEEVESTRIPED.png",
    rating: 4.5,
    reviews: "65",
  },
];

// Individual Product Box
const ProductBox = ({ product }: { product: any }) => (
  <div className="w-[295px]">
    {/* Image and Hover Button */}
    <div className="group relative shadow-md bg-neutral-100 w-[295px] h-[298px] flex justify-center items-center">
      <Image
        src={product.image}
        width={150}
        height={100}
        alt={product.title}
        className="object-contain"
      />
      <button className="absolute bottom-0 w-full bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Add to Cart
      </button>
    </div>

    {/* Product Details */}
    <h1 className="font-bold font-satoshi pt-2 text-center">{product.title}</h1>
    <div className="flex justify-center items-center space-x-2">
      <span className="text-black font-bold">{product.price}</span>
      {product.oldprice && (
        <span className="text-gray-400 font-bold line-through">
          {product.oldprice}
        </span>
      )}
    </div>

    {/* Rating and Reviews */}
    <div className="flex justify-center items-center space-x-1 text-[#FFC633] text-md pt-1">
      {[...Array(5)].map((_, index) =>
        index < Math.floor(product.rating) ? (
          <FaStar key={index} />
        ) : (
          <FaRegStar key={index} />
        )
      )}
      <span className="text-gray-400 text-sm ml-1">({product.reviews})</span>
    </div>
  </div>
);

// Main New Arrivals Section
const Newarrival = () => {
  return (
    <main>
      <div className="w-full flex justify-center items-center mt-10 mb-1">
        <div className="w-[80%]">
          {/* Section Header */}
          <div className="flex flex-col">
            
            <div className="flex justify-center items-center">
              <h1 className="text-black font-bold text-xl md:text-4xl lg:text-5xl font-satoshi">
                NEW ARRIVALS
              </h1>
            </div>

            {/* Product List */}
            <div className="flex justify-between mt-5">
              {products.map((product, index) => (
                <div key={index} className="flex-none w-[20%]">
                  <ProductBox product={product} />
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className="flex justify-center mt-6">
              <a
                href="#"
                className="bg-white hover:bg-white px-5 py-3 border-r-2 text-black rounded-sm font-satoshi text-lg transition duration-200"
              >
                View All
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Newarrival;
