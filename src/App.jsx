import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/FourthPage";
import FifthPage from "./pages/FifthPage";
import Loading from "./pages/Loading";
import FinalPage from "./pages/FinalPage";

const ProgressBar = ({ progress }) => {
  const getColor = () => {
    if (progress === 0) return "green";
    else if (progress === 25) return "green";
    else if (progress === 50) return "green";
    else if (progress === 75) return "green";
    else return "green";
  };

  return (
    <div
      style={{
        width: `${progress}%`,
        height: "5px",
        backgroundColor: getColor(),
        transition: "width 0.5s ease",
        marginTop: "20px",
      }}
    />
  );
};

const App = () => {
  return (
    <Router>
      <ProgressBarContainer />
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/intrested" element={<SecondPage />} />
        <Route path="/rightplace" element={<ThirdPage />} />
        <Route path="/math" element={<FourthPage />} />
        <Route path="/ontheway" element={<FifthPage />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </Router>
  );
};

const ProgressBarContainer = () => {
  const location = useLocation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setProgress(0);
        break;
      case "/intrested":
        setProgress(25);
        break;
      case "/rightplace":
        setProgress(50);
        break;
      case "/math":
        setProgress(75);
        break;
      case "/ontheway":
        setProgress(100);
        break;
      default:
        setProgress(0);
    }
  }, [location.pathname]);

  return <ProgressBar progress={progress} />;
};

export default App;
