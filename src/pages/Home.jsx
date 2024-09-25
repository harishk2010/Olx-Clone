import React, { useContext, useEffect } from "react";
import Card from "../components/Card";
import ProductContext from "../contexts/ProductContext.jsx";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/Authcontext.jsx";
import { toast } from "react-toastify";


const Home = () => {
  const { products }=useContext(ProductContext)
  // console.log(products)
  const {user}=useContext(AuthContext)
  let ct = 0;
  useEffect(() => {
    if (user && ct < 1) {
      toast.success("Logged In",{
        position: "top-center"
      });
      ct++;
    }
  }, [user]);
  return (
    <div className="p-2 flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center  h-14">
        <h1 className="text-2xl font-bold">New Arrivals</h1>
      </div>
      <div className="w-full grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-3 ">
        {
          products.map((product,index)=>(
            <Link key={product.id} to={`/product-detail/${index}`}>
             <Card key={index} product={product}/>
            </Link>
           
           
          ))
        }

      </div>
      
    </div>
  );
};

export default Home;
