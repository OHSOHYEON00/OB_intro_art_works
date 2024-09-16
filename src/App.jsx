import React, {  useState } from "react";
import "./App.css";
import mainBg from "./mainBg.png"
import Loading from "./Loading.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./Card.jsx";

function App() {


  const Main = () => {
    const [show, setIsShow] = useState(false);
  
      return (
        <div className={`cotainer flex justify-center items-center h-scree`}>
        <div className="max-h-[900px] flex justify-center w-screen h-screen items-center max-w-[480px] shadow-[0px_0px_12px_10px_rgb(144_144_255_/_20%)] ">
          <img alt="bg" src={mainBg} width={300} height={500} />
          <div className="absolute font-['DungGeunMo'] text-xl right-[23%] top-[50%] hover:cursor-pointer animate-bounce" onClick={() => setIsShow(true)}>
            <div className=" bg-[#d0d0d0] p-[8px]">동전넣기</div>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full">
              <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[18px] border-l-transparent border-r-transparent border-t-[#d0d0d0]"></div>
            </div>
          </div>
        </div>
  
        {show && <Loading />}
        </div>
      )
    };

  return (
    <Router>
    <Routes>
      <Route exact path={`${process.env.PUBLIC_URL}/`} element={ <Main />} />
      <Route path={`${process.env.PUBLIC_URL}/card`} element={ <Card />} />
    </Routes>
    </Router>
  );
}

export default App;
