import React from "react";

const ShowOrders = () => {
  return (
    <div className="flex justify-between flex-wrap gap-5 px-10">
      <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg">
        <h1 className="text-6xl font-semibold text-blue-800">{112}</h1>
        <p>Total Orders</p>
      </div>
      <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg">
        <h1 className="text-6xl font-semibold text-orange-500">{152}</h1>
        <p>New Stocks</p>
      </div>
      <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg">
        <h1 className="text-6xl font-semibold text-green-400">{100}</h1>
        <p>Dead Stocks</p>
      </div>
      <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg">
        <h1 className="text-6xl font-semibold text-purple-800">{20}</h1>
        <p>TOtal Leads</p>
      </div>
      <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg">
        <h1 className="text-6xl font-semibold text-gray-500">{111200}</h1>
        <p>Total Revenue</p>
      </div>
    </div>
  );
};

export default ShowOrders;
