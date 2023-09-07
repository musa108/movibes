import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import spin from '/src/assets/spin.svg'

const Proccesing = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    const transitionTimeout = setTimeout(() => {
      navigate("/processed");
    }, 3000);
    return () => clearTimeout(transitionTimeout);
  },[navigate])
    return (
        <div className='flex flex-col justify-center items-center bg-[#191919] h-[100vh]'>
            <img src={spin} alt="" className='animate-spin' />
            <h3 className='text-[18px] text-[#fff] mt-4'>Proccesing</h3>
        </div>
    );
}

export default Proccesing;
