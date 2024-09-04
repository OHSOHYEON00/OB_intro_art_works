import React, { useEffect } from 'react';
import mainBg from "./loading.gif";
import { useNavigate } from 'react-router-dom';

function Loading() {
const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate('/card'), 5000)
    } ,[navigate])

    return (
        <>
        <div className='z-10 fixed left-0 h-screen w-screen flex justify-center items-center'>
        <img className='w-[95%]' src={mainBg} alt={'loading'}/>
        </div>
        <div className='fixed top-0 left-0 bg-black opacity-50 h-screen w-screen'>
        </div>
        </>
    );
}

export default Loading;