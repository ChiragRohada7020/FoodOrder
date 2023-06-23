import { useEffect, useState } from "react";
import React from "react";
import { useLocation } from "react-router-dom";

export const Menu = () => {
  const [dishInfo, setDishInfo] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/home`).then((response) => {
      response.json().then((Info) => {
        console.log(Info[location.state.name].dishes);
        setDishInfo(Info[location.state.name].dishes);
      });
    });
  }, []);
  const location = useLocation();
  console.log(location.state.name);
  

  return (
    <div>
      <h1>hello</h1>
      <section class="pt-100 lg:pt-[120px] pb-5 lg:pb-20 bg-[#F3F4F6] mx-10">
        <div class="container">
          <div class="flex flex-wrap -mx-4">
            {dishInfo.map((data) => (
              <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                <div class="bg-white rounded-lg overflow-hidden mb-10">
                  <img src={data.img} alt="image" class="w-full" />
                  <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h1>{data.name}</h1>
                    <h1>{data.price}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
