import React, { children, createContext ,useEffect } from "react";
import {db, storage } from "../utils/fireBaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getDocs } from "firebase/firestore";

const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = React.useState([]);

  const addProduct = async (title, description, price, images) => {
    try {
      let imageUrls = [];
      for (let image of images) {
        const storageRef = ref(storage, `/images/${image.name}`);
        let snapshot = await uploadBytes(storageRef, image);
        let url = await getDownloadURL(storageRef);
        imageUrls.push(url);
      }
      await addDoc(collection(db, "products"), {
        title,
        description,
        price,
        imageUrls,
        createdAt: new Date().toDateString(),
      });
      return { success: true };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  };

  const getProduct = async () => {
    try {
      let snapshot = await getDocs(collection(db, "products"));
      let allProducts = snapshot?.docs?.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });

      setProducts(allProducts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, [addProduct]);

  return(
    <ProductContext.Provider value={{addProduct,products}}>
        {children}
    </ProductContext.Provider>
  )

};

export default ProductContext;
