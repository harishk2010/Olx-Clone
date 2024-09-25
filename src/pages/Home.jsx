import React, { useContext } from "react";
import Card from "../components/Card";
import ProductContext from "../contexts/ProductContext.jsx";


const Home = () => {
  const { products }=useContext(ProductContext)
  console.log(products)
  return (
    <div className="p-2 flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center  h-14">
        <h1 className="text-2xl font-bold">Fresh Recomendations</h1>
      </div>
      <div className="w-full grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-3 ">
        {
          products.map((product,index)=>(
            <Card key={index} product={product}/>
           
          ))
        }

      </div>
      
    </div>
  );
};

export default Home;
