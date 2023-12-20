import React, { useRef, useState } from "react";
import Insertimg from "../assets/insertimg.png";

const InserImg = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="flex flex-col items-center">
      {image ? (
        <img
          src={URL.createObjectURL(image)}
          className="w-[150px] cursor-pointer"
          onClick={handleImageClick}
          alt=""
        />
      ) : (
        <img
          src={Insertimg}
          onClick={handleImageClick}
          className="w-[150px] cursor-pointer"
          alt=""
        />
      )}
      <button
        ref={inputRef}
        className="mt-3 bg-blue-900 text-white text-xs ring-2 px-3 py-1 rounded-lg"
      >
        Upload Image
      </button>
      <input hidden type="file" ref={inputRef} onChange={handleImageChange} />
    </div>
  );
};

export default InserImg;
