import React from "react";
import FetchingData from "../components/FetchingData";
import { Link, useParams } from "react-router-dom";

const Listing = () => {
  const {id} = useParams()
  
    return (
    <div>
      <h2 className="shadow-md font-extrabold p-3 bg-blue-900 text-white text-center">
        E-commerce Listing
      </h2>
      <FetchingData />

      <div className="listing text-center mt-7">
        <h1 className="text-xl font-bold">E-Commerce Listing</h1>
        <div className="list grid grid-cols-2 mt-7 gap-5 place-content-around">
            <span className="font-bold">Amazon</span>
            <button className="bg-blue-900 ms-56 text-white w-[100px] text-xs rounded-lg">Upload</button>
            <span className="font-bold">Flipkart</span>
            <button className="bg-blue-900 ms-56 text-white w-[100px] text-xs rounded-lg">Upload</button>
            <span className="font-bold">Indiaart</span>
            <button className="bg-blue-900 ms-56 text-white w-[100px] text-xs rounded-lg">Upload</button>
            <span className="font-bold">Website</span>
            <button className="bg-blue-900 ms-56 text-white w-[100px] text-xs rounded-lg">Upload</button>

        </div>
      </div>

      <div className="btn">
        <Link
          to={`/addproduct/${id}`}
          className="text-sm px-3 py-2 rounded-3xl text-white bg-orange-500  fixed bottom-10 left-14"
        >
          Back
        </Link>
        <Link
          to={`/`}
          className="text-sm px-3 py-2 rounded-3xl text-white bg-green-500 fixed bottom-10 right-14"
        >
          continue to home page
        </Link>
      </div>
    </div>
  );
};

export default Listing;
