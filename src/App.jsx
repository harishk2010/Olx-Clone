import "../src/App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import AddProducts from "./pages/AddProducts";
import Sell from "./pages/Sell";
import {ProductProvider} from "./contexts/productContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/add-product" element={<AddProducts />} />
        
      </Route>
      
    </>
  )
);

function App() {
  return (
    <ProductProvider>
      <ToastContainer richcolors theme='dark'/>
      <RouterProvider router={router} />
    </ProductProvider>
    
  )
}

export default App;
