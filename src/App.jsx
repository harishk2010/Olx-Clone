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
import {ProductProvider} from "./contexts/ProductContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import {AuthProvider} from "./contexts/Authcontext";
import { lazy, Suspense } from "react";
const ProductDetail =lazy(() => import("./pages/ProductDetail"));


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/product-detail/:id" element={
          <Suspense fallback={
            <h1 className="text-center font-bold text-3xl">Loading Data....</h1>
          }>
            <ProductDetail/>
          </Suspense>
        }/>
        <Route path="/sell" element={<Sell />} /> 
        <Route path="/add-product" element={<AddProducts />} />
        <Route path="login" element={<Login />} />
        
      </Route>
      
      
    </>
  )
);

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
      <ToastContainer richcolors  />
      <RouterProvider router={router} />
    </ProductProvider>

    </AuthProvider>
    
    
  )
}

export default App;
