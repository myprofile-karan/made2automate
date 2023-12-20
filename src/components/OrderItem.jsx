import React, { useEffect, useState } from "react";
import MeterImg from "../assets/meter.webp";
import { useParams } from "react-router-dom";

const OrderItem = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/product");
        const result = await res.json();
        // console.log(result);
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {data.length>0 && data?.map((item) => {
        return (
          <>
            <div className="bg-white p-10 rounded-lg flex justify-around gap-10 mb-5">
              <div className="image">
                <img src={MeterImg} className="w-[350px] h-[200px]" alt="" />
              </div>

              <div className="w-[800px] details text-center flex flex-col items-center justify-center">
                <h3 className="font-semibold text-xl">
                    {item.name}
                </h3>
                <p className="text-xs text-gray-500 mt-5">
                    {item.description}
                </p>

                <div className="info mt-4 flex gap-10">
                  <div>
                    <span className="text-blue-900 font-extrabold">Price:</span>
                    <span>{1500 * item.quantity}</span>
                  </div>
                  <div>
                    <span className="text-blue-900 font-extrabold">
                      Customer Name:
                    </span>
                    <span> Rakesh Singh</span>
                  </div>
                  <div>
                    <span className="text-black-900 text-xs font-extrabold border p-1 rounded-lg">
                      {item.quantity} pieces
                    </span>
                  </div>
                </div>

                <div className="flex gap-24 mt-7">
                  <button className="bg-blue-900 text-white px-6 py-2 text-xs rounded-lg">
                    Order Again
                  </button>
                  <button className="bg-blue-900 text-white px-6 py-2 text-xs rounded-lg">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default OrderItem;
