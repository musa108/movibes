import React from 'react';
import Sidebar from './Sidebar';
import Landing from './Landing';
import RightBar from './rightBar';

const Home = () => {
    return (
        <div className='bg-[#191919] flex gap-2'>
            <Sidebar/>
            <Landing/>
            <RightBar/>
        </div>
    );
}

export default Home;
