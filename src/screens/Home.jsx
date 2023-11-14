import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import Carousal from "../components/Carousal";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousal />
      </div>

      <div className="m-3">
        <Cart />
        <Cart />
        <Cart />
      </div>

      
      <div>
        <Footer />
      </div>
    </div>
  );
}
