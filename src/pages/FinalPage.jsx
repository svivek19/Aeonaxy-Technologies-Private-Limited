import React from "react";
import animate from "../assets/animate.gif";

const FinalPage = () => {
  return (
    <div className="w-11/12 my-3 md:my-0 md:w-5/6 mx-auto space-y-10 text-center h-screen items-center flex justify-center flex-col">
      <div className="mt-10">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          Learning paths based on your answers
        </h1>
        <p className="text-slate-700">
          Choose one to get started. You can switch anytime.
        </p>
      </div>

      <div className="w-11/12 md:w-4/6 gap-10 grid grid-cols-1 md:grid-cols-2">
        <div className="border border-slate-300 p-5 flex rounded-md relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-yellow-500 uppercase rounded-3xl px-4 py-1">
              most popular
            </div>
          </div>
          <div>
            <p className="text-start w-11/12 my-4 md:my-0 text-xs md:text-base">
              <span className="font-semibold">Foundational Math </span>
              Build your foundational skills in algebra, geometry, and
              probability.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img src={animate} alt="" width={300} />
          </div>
        </div>
        <div className="border border-slate-300 p-5 flex rounded-md">
          <div>
            <p className="text-start w-11/12 text-xs md:text-base my-4 md:my-0">
              <span className="font-semibold">Mathematical Thinking </span>
              Build your foundational skills in algebra, geometry, and
              probability.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img src={animate} alt="" width={300} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalPage;
