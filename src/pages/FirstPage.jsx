import React from "react";
// icons
import student from "../assets/icons/student.png";
import professional from "../assets/icons/professtional.png";
import parent from "../assets/icons/parent.png";
import learner from "../assets/icons/learner.png";
import teacher from "../assets/icons/teacher.png";
import other from "../assets/icons/other.png";

const FirstPage = () => {
  return (
    <div className="w-11/12 my-3 md:my-0 md:w-5/6 mx-auto space-y-10 text-center items-center flex justify-center flex-col">
      <div className="mt-10">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          Which describes you best?
        </h1>
        <p className="text-slate-700">
          This will help us personalize your experience.
        </p>
      </div>

      <div className="w-11/12 md:w-1/2">
        <ul className="space-y-4 flex flex-col text-start">
          <li className="border flex items-center text-sm md:text-base space-x-2 border-slate-300 py-3 px-5 rounded-md w-full text-slate-500 ">
            <div>
              <img src={student} alt="" width={40} />
            </div>
            <span className="text-black">Student</span>{" "}
            <span>or soon to be enrolled</span>
          </li>
          <li className="border border-slate-300 text-sm md:text-base  py-3 px-5 flex items-center space-x-2 rounded-md w-full text-slate-500 ">
            <div>
              <img src={professional} alt="" width={40} />
            </div>
            <span className="text-black">Professional</span>{" "}
            <span>pursuing a career</span>
          </li>
          <li className="border flex items-center  text-sm md:text-base  space-x-2 border-slate-300 py-3 px-5 rounded-md w-full text-slate-500 ">
            <div>
              <img src={parent} alt="" width={40} />
            </div>
            <span className="text-black">Parent</span>{" "}
            <span>of a school-age child</span>
          </li>
          <li className="border flex items-center text-sm md:text-base  border-slate-300 py-3 px-5 rounded-md w-full ">
            <div className="mr-1">
              <img src={learner} alt="" width={40} />
            </div>
            Lifelong learner
          </li>
          <li className="border border-slate-300 text-sm md:text-base  py-3 px-5 rounded-md w-full flex items-center">
            <div className="mr-1">
              <img src={teacher} alt="" width={40} />
            </div>
            Teacher
          </li>
          <li className="border border-slate-300 text-sm md:text-base  py-3 px-5 rounded-md w-full flex items-center">
            <div className="mr-1">
              <img src={other} alt="" width={40} />
            </div>
            Other
          </li>
        </ul>

        <div className="my-8">
          <button className="bg-gray-900 px-10 text-white font-semibold text-lg py-3 rounded-md">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
