import React, { useEffect, useState } from "react";
import MeterImg from "../assets/meter.webp";
import { Link, useParams } from "react-router-dom";
import Barcode from "../assets/barcode.jpg";

const DetailsPage = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  //   console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/product");
        const result = await res.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-white">
        <Link
          to={"/addproduct"}
          className="fa-solid fa-arrow-left absolute p-3 font-extrabold text-xl"
        ></Link>
        <h2 className="shadow-md font-extrabold p-3 bg-white text-center">
          Barcode
        </h2>

        {data.length > 0 &&
          data
            ?.filter((elem) => elem.id === id)
            .map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex justify-around rounded-lg gap-10 mt-7 py-3"
                >
                  <div className="image">
                    <img
                      src={MeterImg}
                      className="w-[350px] h-[200px]"
                      alt=""
                    />
                  </div>

                  <div className="w-[800px] details text-center flex flex-col items-start justify-center ">
                    <h3 className="font-semibold text-xl capitalize text-start">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-5 text-left">
                      {item.description}
                    </p>
                    <div className="info mt-5 flex flex-col gap-2">
                      <div className="top flex gap-10">
                        <div>
                          <span className="text-blue-900 font-extrabold">
                            Manufracturer:
                          </span>
                          <span className="text-gray-500 text-sm ms-2">
                            {item.manufacturer}
                          </span>
                        </div>

                        <div>
                          <span className="text-blue-900 font-extrabold">
                            Product ID:
                          </span>
                          <span className="text-gray-500 text-sm ms-2">
                            {item.id}
                          </span>
                        </div>
                      </div>

                      <div className="bottom flex gap-10">
                        <div>
                          <span className="text-blue-900 font-extrabold">
                            Price (per piece):
                          </span>
                          <span className="text-gray-500 text-sm ms-2">
                            1500
                          </span>
                        </div>

                        <div>
                          <span className="text-blue-900 font-extrabold">
                            Quantity:
                          </span>
                          <span className="text-gray-500 text-sm ms-2">
                            {item.quantity} pieces
                          </span>
                        </div>

                        <div>
                          <span className="text-blue-900 font-extrabold">
                            Category:
                          </span>
                          <span className="text-gray-500 text-sm ms-2">
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

        <div className="mx-10 my-4 flex justify-around">
          <div className="barcode">
            <img src={Barcode} className="w-[300px]" alt="" />
          </div>
          <div className="buttons flex gap-10 items-center">
            <button className="text-xs bg-blue-900 text-white w-[100px] h-[30px] rounded-lg ">
              Print Barcode
            </button>
            <button className="text-xs bg-blue-900 text-white w-[100px] h-[30px] rounded-lg ">
              Save to device
            </button>
          </div>
        </div>
        <Link
          to={`/addproduct/${id}/listing`}
          className="text-sm px-3 py-2 rounded-3xl text-white bg-blue-900 fixed bottom-10 right-14"
        >
          Save Item
        </Link>
      </div>
    </>
  );
};

export default DetailsPage;
