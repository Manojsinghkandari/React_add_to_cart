import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartRedux from "./cartRedux";
import Cart from "./Screens/Cart";
import NavBar from "./Components/navBar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<CartRedux />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
