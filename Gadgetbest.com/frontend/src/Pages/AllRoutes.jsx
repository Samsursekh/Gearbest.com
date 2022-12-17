import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "./Admin/AdminLogin";
import AdminProducts from "./Admin/AdminProducts";
import Chek from "./Chek";
import Login from "./Login";
import Productspage from "./Productspage";
import Signup from "./Signup";
import SingleProduct from "./SingleProduct";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<HomePage/>}/> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/chek" element={<Chek />} /> 
        <Route path='/watches' element={<Productspage/>}/>
        <Route path='/watches/:id' element={<SingleProduct/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/adminproducts' element={<AdminProducts/>}/>
      </Routes>
    </div>
  );
};