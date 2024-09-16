import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import card from './img/2.png';

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

    const imageList = [
        './img/1.png',
        './img/2.png',
        './img/3.png',
        './img/4.png',
        './img/5.png',
        './img/6.png',
    ]


    function showImage() {
        const imgNum = Math.round(Math.random() * imageList.length);
        setRandomImg(imageList[imgNum]);
    }

    useEffect(() => {
      window.onload = showImage();
    } ,[])

    console.log(randomImg)

    return (
        <div className={'custom-card w-screen h-screen'}>
            
            <div className=''>
                <img src={card} alt='card' width={80} height={100}/>
                <img src={randomImg} alt='card' width={80} height={100}/>
            </div>

            <div>
                <button onClick={() => navigate(`${process.env.PUBLIC_URL}/`)}>다시하기</button>
                <button onClick={handleCopyClipBoard} >공유하기</button>
            </div>
        </div>
    );
};

export default Card;