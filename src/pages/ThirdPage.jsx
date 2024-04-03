import React from "react";
import weight from "../assets/weight.svg";
import { Link } from "react-router-dom";

const ThirdPage = () => {
  return (
    <div className=" my-24">
      <div className="w-11/12 md:w-5/6 mx-auto flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center">
            <img src={weight} alt="" width={250} />
          </div>
          <div className="mt-14">
            <h1 className="text-3xl mb-5 font-semibold">
              You're in the right place
            </h1>
            <p className="text-justify text-slate-700">
              Brilliant gets you hands-on to help improve your professional
              skills and knowledge. You'll interact with concepts and solve fun
              problems in math, science, and computer science.
            </p>
          </div>
        </div>
      </div>
      <div className="w-11/12 md:w-5/6 mx-auto mt-20 text-center">
        <Link
          to={"/math"}
          className="bg-gray-900 px-10 text-white font-semibold text-lg py-3 rounded-md"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default ThirdPage;
