import React, { useEffect } from 'react'
import Done from '/src/assets/Done.svg'
import { useNavigate } from 'react-router-dom'


const Confirmed = () => {
    const navigate = useNavigate()

    useEffect(()=>{
      const transitionTimeout = setTimeout(() => {
        navigate("/login");
      }, 3000);
      return () => clearTimeout(transitionTimeout);
    },[navigate])
    return (
        <div>
            <div className='flex flex-col justify-center items-center bg-[#191919] h-[100vh]'>
            <div className=' bg-[#3DD2CC] bg w-[250px] h-[250px] rounded-full flex justify-center items-center'>
                <img src={Done} alt="" />
            </div>
            <h3 className='text-[18px] text-[#fff] mt-4'>Confirmed!</h3>
        </div>
        </div>
    );
}

export default Confirmed;
