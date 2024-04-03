import React from "react";

const FourthPage = () => {
  return (
    <div className="w-11/12 my-3 md:my-0 md:w-5/6 mx-auto space-y-10 text-center items-center flex justify-center flex-col">
      <div className="mt-10">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          What is your math comfort level?
        </h1>
        <p className="text-slate-700">
          Choose the highest level you feel confident in - you can always adjust
          later.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="border border-slate-300 cursor-pointer p-10 rounded-md mt-8 flex flex-col justify-center items-center">
          <h1>5 * 1/2 = ?</h1>
          <p className="text-xs mt-5">Arithmetic</p>
          <p className="text-slate-400">Introductory</p>
        </div>

        <div className="border border-slate-300 cursor-pointer p-10 rounded-md mt-8 flex flex-col justify-center items-center">
          <h1>3x + 5 = 4</h1>
          <p className="text-xs mt-5">Basic Algebra</p>
          <p className="text-slate-400">Foundational</p>
        </div>

        <div className="border border-slate-300 p-10 cursor-pointer rounded-md mt-8 flex flex-col justify-center items-center">
          <p>x = </p>
          <span>-b ± </span>
          <span>
            &#8730;(b<sup>2</sup> - 4ac)
          </span>
          <p>-------------------</p>
          <p>2a</p>
          <p className="text-xs mt-5">Intermediate Algebra</p>
          <p className="text-slate-400">Intermediate</p>
        </div>

        <div className="border border-slate-300 p-10 rounded-md mt-8 flex flex-col cursor-pointer justify-center items-center">
          <div>
            <span>&#8747;</span>
            <span>0</span>
            <sup>x</sup>
            <span>
              &nbsp;x<sup>2</sup>&nbsp;
            </span>
            <span>dx</span>= ?
          </div>

          <p className="text-xs mt-5">Calculas</p>
          <p className="text-slate-400">Advanced</p>
        </div>
      </div>

      <div className="my-8">
        <button className="bg-gray-900 px-10 text-white font-semibold text-lg py-3 rounded-md">
          Continue
        </button>
      </div>
    </div>
  );
};

export default FourthPage;
