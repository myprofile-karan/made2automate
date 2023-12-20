import React from "react";
import ShowOrders from "../components/ShowOrders";
import TotalOrders from "../components/TotalOrders";
import TotalLeads from "../components/TotalLeads";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="relative">
      <h2 className="shadow-md font-extrabold p-3 bg-white">Made 2 Automate</h2>
      <div className="p-5 rounded-md">
        <div className="p-5 bg-[#f3efedf3]">
            <ShowOrders />
            <TotalOrders />
            <TotalLeads />
        </div>
      </div>

      <Link to={"/addproduct"} className="text-sm px-3 py-2 rounded-3xl text-white bg-blue-900 fixed bottom-10 right-14"> <i class="fa-solid fa-plus"></i> Add Product</Link>
    </div>
  );
};

export default Dashboard;
