import { BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import list from "../utils/constants";
import Categories from "../components/Categories";
import { useState } from "react";

const Sell = () => {
  const [sub, setSub] = useState([]);
  const navigate = useNavigate();
  return (
    <div>
      <div onClick={() => navigate("/")} className="py-3 px-2 ">
        <BiLeftArrowAlt
          className="bg-gray-600 rounded-full text-white w-20"
          size={30}
        />
      </div>
      <div className=" flex justify-center items-center">
        <div className="w-[60%] ">
          <h1 className="text-2xl text-center font-extrabold mb-3">
            Post Your Ad
          </h1>
          <div className="flex flex-col  items-center border-2 border-black">
            <div className="w-full text-center border-2 border-solid py-3 px-2">
              <h1 className="text-2xl font-semibold p-2">Choose a Category</h1>
            </div>
            <div className="flex w-full ">
              <div className="w-1/2 border-2 border-bold p-2 ">
                {list.map((item) => (
                  <Categories
                    key={item}
                    icon={item.icon}
                    category={item.name}
                    sub={item.sub}
                    setSub={setSub}
                  />
                ))}
              </div>
              <div className="w-1/2 border-2 border-bold p-2">
                {sub.map((sub) => (
                  <div 
                  onClick={()=>navigate('/add-product')}
                  key={sub} className="w-full border-b-2 p-3 flex">{sub}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
