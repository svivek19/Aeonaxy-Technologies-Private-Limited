import React from "react";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/FourthPage";
import FifthPage from "./pages/FifthPage";
import Loading from "./pages/Loading";
import FinalPage from "./pages/FinalPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
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

export default App;
