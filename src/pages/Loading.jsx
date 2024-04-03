import React from "react";
import { Puff } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="w-11/12 md:w-5/6 mx-auto space-y-8 text-center flex flex-col justify-center items-center h-screen">
      <div>
        <Puff height={70} width={70} color="yellow" />
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="font-semibold text-xl md:text-2xl">
          Finding learning path recommendations for you based on your responses
        </h1>
      </div>
    </div>
  );
};

export default Loading;
