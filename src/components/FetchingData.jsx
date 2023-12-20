import React, { useEffect, useState } from "react";
import MeterImg from "../assets/meter.webp";
import { useParams } from "react-router-dom";

const FetchingData = () => {
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
      {data.length > 0 && data?.filter((elem)=> elem.id === id).map((item) => {
          return (
            <div
              key={item.id}
              className="flex justify-around rounded-lg gap-10 mt-7 py-3"
            >
              <div className="image">
                <img src={MeterImg} className="w-[350px] h-[200px]" alt="" />
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
                      <span className="text-gray-500 text-sm ms-2">1500</span>
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
    </>
  );
};

export default FetchingData;
