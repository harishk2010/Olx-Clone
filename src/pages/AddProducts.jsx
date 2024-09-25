import { useContext, useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import ProductContext from "../contexts/ProductContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const AddProducts = () => {
  const [title, seTitle] = useState("");
  const [price, sePrice] = useState(0);
  const [description, setdescription] = useState("");
  const [image, setImage] = useState([]);
  const navigate = useNavigate();
  const { addProduct } = useContext(ProductContext);
  const [loading, setLoading] = useState(false);

  const handleImage = (e) => {
    let img = e.target.files;
    setImage([...img]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let res = await addProduct(title, description, price, image);
    if (res.success) {
      toast.success("Product Added");
      navigate("/");
    } else {
      toast.error("Failed to Add Product");
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="py-5 px-3">
        <BiLeftArrowAlt size={30} />
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-[40%]">
          <h1 className="text-2xl text-center mb-2">Post Your Ad</h1>
          <div className="border-2 border-solid">
            <div className="border-b-2 border-solid p-2 text-center">
              <h3 className="text-l">SELECTED CATEGORY</h3>
            </div>
            <form action="" onSubmit={handleSubmit} className="p-3">
              <div className="my-2">
                <input
                  value={title}
                  onChange={(e) => seTitle(e.target.value)}
                  placeholder="Title.."
                  className="w-full border-2 p-2 border-solid rounded"
                  type="text"
                />
              </div>
              <div className="my-2">
                <textarea
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                  placeholder="Descripton..."
                  className="border-2 border-solid w-full p-2 h-44 mt-2"
                  name=""
                  id=""
                ></textarea>
              </div>
              <div className="my-2">
                <input
                  type="number"
                  value={price}
                  onChange={(e) => sePrice(e.target.value)}
                  placeholder="Price"
                  className="border-2 w-full p-2"
                />
              </div>
              <div className="my-2">
                <input
                  type="file"
                  multiple
                  accept="image*/"
                  className="p-2 border-2 w-full "
                  onChange={handleImage}
                />
              </div>
              <div className="flex flex-wrap gap-5 p-1">
                {image.map((img, index) => {
                  return (
                    <img
                      src={URL.createObjectURL(img)}
                      key={index}
                      className="w-20 h-20"
                      alt=""
                    />
                  );
                })}
              </div>
              <div className="flex justify-center">
                {loading ? (
                  <Spinner />
                ) : (
                  <button className="bg-green-800 py-3 px-5 rounded-md text-white">
                    SUBMIT
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
