import React from "react";
import cheer from "../assets/cheer.png";
import star from "../assets/star.webp";

const FifthPage = () => {
  return (
    <div className=" my-24">
      <div className="w-11/12 md:w-5/6 mx-auto flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center">
            <img src={cheer} alt="" width={250} />
          </div>
          <div className="mt-14">
            <h1 className="text-3xl mb-5 font-semibold">You're on your way!</h1>
            <img src={star} alt="" width={150} />
            <q className="text-justify text-slate-700">
              Through its engaging and well-structured courses, Brilliant has
              taught me mathematical concepts that I previously struggled to
              understand. I now feel confident approaching both technical job
              interviews and real world problem solving situations.
            </q>
            <p className="text-slate-700 my-3"> - Jacob S.</p>
          </div>
        </div>
      </div>
      <div className="w-11/12 md:w-5/6 mx-auto mt-10 md:mt-20 text-center">
        <button className="bg-gray-900 px-10 text-white font-semibold text-lg py-3 rounded-md">
          Continue
        </button>
      </div>
    </div>
  );
};

export default FifthPage;
