import { useParams } from "react-router-dom";
import image from "../assets/Group.png";
import { useContext, useState } from "react";
import ProductContext from "../contexts/ProductContext";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const ProductDetail = (product) => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const [image, setImage] = useState(0);

  const handleLeft = () => {
    console.log("hi");
    if (image > 0) {
      setImage(image - 1);
      console.log("hi1");
    }
  };
  const handleRight = () => {
    console.log("bye");
    if (image >= 0 && image < products[id].imageUrls.length - 1) {
      setImage(image + 1);
      console.log("bye1");
    }
  };
  // console.log(products[id].imageUrls[0],"sssssssss")

  // console.log(product,id)

  return (
    <div className=" w-full p-6 flex flex-col md:flex-row   justify-evenly gap-5">
      <div className="bg-gray-10 md:w-[60%] rounded-md w-full">
        <div className="w-full flex justify-center">
          <button onClick={handleLeft} className=" relative -right-10 ">
            <IoIosArrowBack className="text-white text-3xl rounded-full p-2 opacity-35 hover:opacity-70 bg-black" />
          </button>
          <img
            src={products[id].imageUrls[image]}
            className="object-contain "
            alt=""
          />
          <button onClick={handleRight} className="relative top-0 right-10 ">
            <IoIosArrowForward className="text-white text-3xl hover:opacity-70 opacity-35 rounded-full bg-black p-2" />
          </button>
        </div>
        <div className="flex flex-wrap w-full justify-center bg-gray-100 rounded-full ">
          <img
            src={products[id].imageUrls[0]}
            className="hidden md:block md:w-50 sm:p-4 w-36 rounded-full"
            alt=""
          />
          <img
            src={products[id].imageUrls[1]}
            className=" hidden md:block md:w-50 sm:p-4 w-36 rounded-full"
            alt=""
          />

          <img
            src={products[id].imageUrls[2]}
            className="hidden md:block md:w-50  sm:p-4 w-36 rounded-full"
            alt=""
          />
        </div>
      </div>
      <div className="bg-gray-100  lg:w-[40%] p-8 rounded-lg">
        <div className="w-full mb-4">
          <h1 className="text-2xl font-semibold">{products[id].title}</h1>
        </div>
        <div className="">
          <p className="text-xl font-semibold">Description:</p>
          <p className="p-4 italic">{products[id].description}</p>
          <p className="text-xl font-semibold">Price:</p>
          <p className="p-4 font-bold ">${products[id].price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
