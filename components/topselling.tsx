import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa6";

// Product List
const products = [
  {
    title: "VERTICAL STRIPED SHIRT",
    price: "$212",
    oldprice: "$232",
    image: "/VERTICAL STRIPED SHIRT.png",
    rating: 5,
    reviews: "65",
  },
  {
    title: "COURAGE GRAPHIC T-SHIRT",
    price: "$145",
    oldprice: null,
    image: "/COURAGE GRAPHIC T-SHIRT.png",
    rating: 4,
    reviews: "65",
  },
  {
    title: "LOOSE FIT BERMUDA SHORTS",
    price: "$80",
    oldprice: null,
    image: "/LOOSE FIT BERMUDA SHORTS.png",
    rating: 3,
    reviews: "65",
  },
  {
    title: "FADED SKINNY JEANS",
    price: "$210",
    oldprice: null,
    image: "/FADED SKINNY JEANS.png",
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
const Topselling = () => {
  return (
    <main>
      <div className="w-full flex justify-center items-center mt-10 mb-1">
        <div className="w-[80%]">
          {/* Section Header */}
          <div className="flex flex-col">
            
            <div className="flex justify-center items-center">
              <h1 className="text-black  text-xl md:text-4xl lg:text-5xl font-mono font-extrabold fontw">
              TOP SELLING
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
  className="bg-white hover:bg-white px-8 py-3 text-black border-4 border-gray-50 rounded-full font-satoshi text-lg transition duration-200"
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

export default Topselling ;
