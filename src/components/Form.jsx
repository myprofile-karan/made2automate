import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';


const Form = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate()

  const clearForm = () =>{
      setName("");
      setId("");
      setManufacturer("");
      setDescription("");
      setQuantity("");
      setCategory("");
  }
  const postDataAndNavigate = async(e) => {
    e.preventDefault();

    let postData = { name, id, manufacturer, description, quantity, category };


    let result = await fetch(" http://localhost:3000/product", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(postData),
      })
      
      navigate(`/addproduct/${id}`);
      toast.success('Successfully Added.')
    };
      
  return (
    <form className="flex flex-col px-20 py-10 gap-3" onSubmit={postDataAndNavigate}>
      <input
        type="text" 
        value={name}
        onChange={(e)=> setName(e.target.value)}
        className="border-2 focus:border-blue-800 border-gray-400 rounded-lg text-sm px-5 py-1"
        placeholder="Product Name"
        required
      />
      <input
        type="text"
        value={id}
        onChange={(e)=> setId(e.target.value)}
        className="border-2 focus:border-blue-800 border-gray-400 rounded-lg text-sm px-5 py-1"
        placeholder="Product Id"
        required
      />
      <input
        value={manufacturer}
        onChange={(e)=> setManufacturer(e.target.value)}
        type="text"
        className="border-2 focus:border-blue-800 border-gray-400 rounded-lg text-sm px-5 py-1"
        placeholder="Manufacturer Name"
        required
        />
      <input
        type="text"
        value={description}
        onChange={(e)=> setDescription(e.target.value)}
        className="border-2 focus:border-blue-800 border-gray-400 rounded-lg text-sm px-5 py-1"
        placeholder="Product Description"
        required
        />
      <input
        type="text"
        value={quantity}
        onChange={(e)=> setQuantity(e.target.value)}
        className="border-2 focus:border-blue-800 border-gray-400 rounded-lg text-sm px-5 py-1"
        placeholder="Product Quantity"
        required
      />

      <div>
        <label htmlFor="" className="text-lg font-bold">
          Select Caetgory
        </label>
        <select
          name=""
          value={category}
          onChange={(e)=> setCategory(e.target.value)}
          className="border-2 pe-16 py-1 text-xs text-gray-500 ms-2"
          required
        >
          <option value="">New stock</option>
          <option value="newStock">New stock</option>
        </select>
      </div>

      <div className="flex justify-between">
        <button type="reset" onClick={clearForm} className="text-white bg-red-600 text-xs px-4 py-2 rounded-lg">
          cancel
        </button>
        <button
        type="submit"
          className="text-white bg-green-600 text-xs px-4 py-2 rounded-lg"
        >
          save changes
        </button>
      </div>
    </form>
    
  );
};

export default Form;
