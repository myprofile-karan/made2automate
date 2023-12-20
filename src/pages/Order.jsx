import React from "react";
import OrderItem from "../components/orderItem";
import { Link } from "react-router-dom";
// import FetchingData from "../components/FetchingData";

const Order = () => {
  return (
    <div className="relative">
      <Link to={"/"} className="fa-solid fa-arrow-left absolute p-3 font-extrabold text-xl"></Link>
      <h2 className="shadow-md font-extrabold p-3 bg-white text-center">Orders</h2>
      <div className="p-5 rounded-md">
        <div className="p-5 bg-[#f3efedf3]">
          <OrderItem />
        </div>
      </div>
      <Link to={"/addproduct"} className="text-sm px-3 py-2 rounded-3xl text-white bg-blue-900 fixed bottom-10 right-14"> <i class="fa-solid fa-plus"></i> Add Product</Link>
    </div>
  );
};

export default Order;
