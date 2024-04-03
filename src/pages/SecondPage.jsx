import React, { useState } from "react";
// icons
import global from "../assets/icons/global.png";
import target from "../assets/icons/target.png";
import something from "../assets/icons/something.png";
import trend from "../assets/icons/trend.png";
import think from "../assets/icons/think.png";
import { Link } from "react-router-dom";

const SecondPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="w-11/12 my-3 md:my-0 md:w-5/6 mx-auto space-y-10 text-center items-center flex justify-center flex-col">
      <div className="mt-10">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          Which are you most interested in?
        </h1>
        <p className="text-slate-700">
          Choose just one. This will help us get you started (but won't limit
          your experience).
        </p>
      </div>

      <div className="w-11/12 md:w-1/2">
        <ul className="space-y-4 flex flex-col text-start">
          <li
            className={`border flex items-center text-sm md:text-base space-x-2 border-slate-300 py-3 px-5 rounded-md w-full ${
              selectedItem === "trend" ? "border-slate-900" : ""
            }`}
            onClick={() => handleItemClick("trend")}
          >
            <div>
              <img src={trend} alt="" width={40} />
            </div>
            <div>Learning specific skills to advance my career</div>
          </li>
          <li
            className={`border border-slate-300 text-sm md:text-base  py-3 px-5 flex items-center space-x-2 rounded-md w-full ${
              selectedItem === "global" ? "border-slate-900" : ""
            }`}
            onClick={() => handleItemClick("global")}
          >
            <div>
              <img src={global} alt="" width={40} />
            </div>
            <div>Exploring new topics I'm interested in</div>
          </li>
          <li
            className={`border flex items-center  text-sm md:text-base  space-x-2 border-slate-300 py-3 px-5 rounded-md w-full ${
              selectedItem === "think" ? "border-slate-900" : ""
            }`}
            onClick={() => handleItemClick("think")}
          >
            <div>
              <img src={think} alt="" width={40} />
            </div>
            <div>Refreshing my math foundations.</div>
          </li>
          <li
            className={`border flex items-center text-sm md:text-base  border-slate-300 py-3 px-5 rounded-md w-full ${
              selectedItem === "target" ? "border-slate-900" : ""
            }`}
            onClick={() => handleItemClick("target")}
          >
            <div className="mr-1">
              <img src={target} alt="" width={40} />
            </div>
            <div>Exercising my brain to stay sharp</div>
          </li>
          <li
            className={`border border-slate-300 text-sm md:text-base  py-3 px-5 rounded-md w-full flex items-center ${
              selectedItem === "something" ? "border-slate-900" : ""
            }`}
            onClick={() => handleItemClick("something")}
          >
            <div className="mr-1">
              <img src={something} alt="" width={40} />
            </div>
            <div>Something else</div>
          </li>
        </ul>

        <div className="my-8">
          <Link
            className={`bg-gray-900 px-10 text-white font-semibold text-lg py-3 rounded-md ${
              selectedItem ? "" : "pointer-events-none opacity-50"
            }`}
            disabled={!selectedItem}
            to={"/rightplace"}
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
