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
      <div className="flex flex-col items-center">
        <img src={icon} alt={"icon1"} width={25} />
        <button onClick={onClick}>{text}</button>
      </div>
    );
  };

  return (
    <div
      className={
        "custom-card w-screen h-screen justify-evenly flex flex-col items-center  px-10"
      }
    >
      <img
        className="shadow-3xl md:w-[55%]"
        src={imageList[randomImg]}
        alt="card"
        width={320}
        height={500}
      />

      <div className="font-['DungGeunMo'] w-full flex justify-between text-[5vw] md:text-[3.5vw]">
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
