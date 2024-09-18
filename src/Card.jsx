import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import card2 from "./img/2.png";
import card1 from "./img/1.png";
import icon from "./icon.png";

const Card = () => {
  const navigate = useNavigate();
  const [randomImg, setRandomImg] = useState();

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };

  const imageList = [card1, card2];

  const showImage = useCallback(() => {
    const imgNum = Math.round(Math.random() * (imageList.length - 1));
    setRandomImg(imgNum);
  }, []);

  useEffect(() => {
    window.onload = showImage();
  }, [showImage]);

  const Button = ({ text, onClick }) => {
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

  return (
    <div
      className={
        "cotainer custom-card h-screen justify-evenly flex flex-col items-center"
      }
    >
      <img
        className="shadow-3xl w-[60%] mx-10"
        src={imageList[randomImg]}
        alt="card"
        width={320}
        height={500}
      />

      <div className="font-['DungGeunMo'] absolute bottom-5 px-5 w-full flex justify-between text-[2.5vw] md:text-[2vw]">
        <Button
          text={"다시하기"}
          onClick={() => navigate(`${process.env.PUBLIC_URL}/`)}
        />
        <Button text={"공유하기"} onClick={handleCopyClipBoard} />
      </div>
    </div>
  );
};

export default Card;
