import React from "react";
import { Link } from "react-router-dom";
import InserImg from "../components/InserImg";
import Form from "../components/Form";

const AddProduct = () => {
  return (
    <div>
      <Link
        to={"/"}
        className="fa-solid fa-arrow-left absolute p-3 font-extrabold text-xl"
      ></Link>
      <h2 className="shadow-md font-extrabold p-3 bg-white text-center">
        Add Product
      </h2>

      <div className="bg-white p-5 mt-5">
        <InserImg />
        <Form />
      </div>
    </div>
  );
};

export default AddProduct;
