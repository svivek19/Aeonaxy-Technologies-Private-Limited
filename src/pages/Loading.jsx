import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Puff } from "react-loader-spinner";

const Loading = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigate("/final");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-11/12 md:w-5/6 mx-auto space-y-8 text-center flex flex-col justify-center items-center h-screen">
      {loading && (
        <>
          <div>
            <Puff height={70} width={70} color="yellow" />
          </div>

          <div className="w-full md:w-1/2">
            <h1 className="font-semibold text-xl md:text-2xl">
              Finding learning path recommendations for you based on your
              responses
            </h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Loading;
