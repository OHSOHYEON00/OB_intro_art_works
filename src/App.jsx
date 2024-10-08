import React, { useEffect, useState } from "react";
import "./App.css";
import mainBg from "./mainBg.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./Card.jsx";
import { useNavigate } from "react-router-dom";
import LoadingVideo from "./loading.mp4";

function App() {
  const Main = () => {
    const [show, setIsShow] = useState(false);
    const navigate = useNavigate();

    const onVideoEnd = (e) => {
      navigate(`${process.env.PUBLIC_URL}/card`);
    };

    const sv = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    useEffect(() => {
      window.addEventListener("resize", sv);
      window.addEventListener("load", sv);
      sv();

      return () => {
        window.removeEventListener("resize", sv);
        window.removeEventListener("load", sv);
      };
    }, []);

    return (
      <div
        className={`cotainer h-screen-dynamic flex justify-center items-center`}
      >
        <div className="max-h-[900px] flex justify-center w-screen h-screen items-center max-w-[480px] shadow-[0px_0px_12px_10px_rgb(144_144_255_/_20%)] ">
          <img alt="bg" src={mainBg} width={300} height={500} />

          <div className="absolute">
            <div
              className="relative left-[3.45rem] top-[2.6rem] font-['DungGeunMo'] text-xl  hover:cursor-pointer animate-bounce"
              onClick={() => setIsShow(true)}
            >
              <div className=" bg-[#d0d0d0] p-[8px]">동전넣기</div>
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full">
                <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[18px] border-l-transparent border-r-transparent border-t-[#d0d0d0]"></div>
              </div>
            </div>
          </div>
        </div>

        {show && (
          <>
            <div className="z-10 fixed left-0 h-screen w-screen flex justify-center items-center">
              <video
                autoPlay
                width="95%"
                height="90%"
                onEnded={onVideoEnd}
                preload="auto"
                className="mt-20 w-[95%] md:w-[50%] md:mt-28"
              >
                <source src={LoadingVideo} type="video/mp4" />
                Your browser doesn't support the video tag.
              </video>
            </div>
            <div className="fixed top-0 left-0 bg-black opacity-50 h-screen w-screen"></div>
          </>
        )}
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        <Route exact path={`${process.env.PUBLIC_URL}/`} element={<Main />} />
        <Route path={`${process.env.PUBLIC_URL}/card`} element={<Card />} />
      </Routes>
    </Router>
  );
}

export default App;
