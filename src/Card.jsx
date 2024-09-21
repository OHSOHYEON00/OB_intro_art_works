import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import restartIcon from "./restart.png";
import shareIcon from "./share.png";

const Card = () => {
  const navigate = useNavigate();
  const [randomImg, setRandomImg] = useState();
  const [loading, setLoading] = useState(true);

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText("https://abcarddraw.netlify.app");
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };

  const imageList = Array.from({ length: 30 }).map(
    (v, i) => `Artboard ${i + 1}CARD.png`
  );

  const showImage = useCallback(() => {
    const imgNum = Math.round(Math.random() * imageList.length);
    setRandomImg(imgNum);
  }, []);

  useEffect(() => {
    window.onload = showImage();
  }, [showImage]);

  const Button = ({ text, onClick, icon }) => {
    return (
      <div
        className="flex flex-col items-center hover:cursor-pointer"
        onClick={onClick}
      >
        <img src={icon} alt={"icon1"} width={25} />
        <span>{text}</span>
      </div>
    );
  };

  const sv = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    // window.addEventListener("resize", sv);
    // window.addEventListener("load", sv);

    if (window.performance) {
      const [navigation] = window.performance.getEntriesByType("navigation");
      if (navigation.type === "reload") {
        window.location.replace(`${process.env.PUBLIC_URL}/`); // A 페이지로 강제 이동
      }
    }

    return () => {
      // window.removeEventListener("resize", sv);
      // window.removeEventListener("load", sv);
    };
  }, []);

  return (
    <div
      className={
        "cotainer custom-card h-screen-dynamic flex items-center flex-col"
      }
    >
      {loading && (
        <div className="shadow-3xl w-[320px] h-auto md:h-[60%] md:w-auto mt-[10vh] mx-10"></div>
      )}
      <img
        className={`shadow-3xl w-[60%] h-auto md:h-[60%] md:w-auto mt-[10vh] mx-10 ${
          loading ? "hidden" : "block"
        }`}
        src={`/card/Artboard ${randomImg}CARD.png`}
        alt="card"
        width={320}
        height={500}
        onLoad={() => setLoading(false)}
      />
      <div className="font-['DungGeunMo'] text-[1rem] sm:text-[1.5rem] md:text-[1.7rem] mt-7 animate-bounce">
        <span className="mr-1">&#9650;</span>꾹 눌러서 수집
      </div>
      <div className="font-['DungGeunMo'] absolute bottom-5 px-5 w-full flex justify-between text-[2.5vw] md:text-[2vw]">
        <Button
          text={"다시하기"}
          onClick={() => navigate(`${process.env.PUBLIC_URL}/`)}
          icon={restartIcon}
        />
        <Button
          text={"공유하기"}
          onClick={handleCopyClipBoard}
          icon={shareIcon}
        />
      </div>
    </div>
  );
};

export default Card;
