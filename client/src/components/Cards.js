import { useEffect, useState } from "react";
import React from "react";
import {Link} from "react-router-dom"
import { Navigate } from "react-router-dom";

export const Cards = () => {
  const [postInfo, setPostInfo] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/home`).then((response) => {
      response.json().then((Info) => {
        console.log(Info);
        setPostInfo(Info);
      });
    });
  }, []);
   
  return (
    <div>
      <section class="pt-100 lg:pt-[120px] pb-5 lg:pb-20 bg-[#F3F4F6] mx-10">
        <div class="container">
          <div class="flex flex-wrap -mx-4">
            {postInfo.map((data,index) => (
              <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                <Link to={`/cuisine/${data.cuisine}`} state={{name:index}} >
                  <div class="bg-white rounded-lg overflow-hidden mb-10">
                    <img src={data.img} alt="image" class="w-full" />
                    <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                      <button>{data.cuisine}</button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
