import React from 'react';
import Typed from 'react-typed';

const Banner = () => {
    return (
        <div className='bg-[#2699fb] w-full text-center py-[100px]'>
            <div className='max-w-[1240px] mx-auto  font-bold'>
                <div  className='text-2xl md:text-3xl'>
                   <h2> Learn with us</h2>
                </div>
                <div className='text-white text-4xl md:text-6xl my-5'>
                    <h2>Grow with us.</h2>
                </div>
                <div className='text-2xl md:text-3xl'>
                  <h1> Learn</h1>
                    <Typed
                    strings={['Web Development','Digetal Markating','App Development']}
                    typeSpeed={150}
                    loop={true}
                    backSpeed={50}
                />
                </div>

            </div>
            <button className='bg-black text-white p-3 rounded mt-3'>Get Sterted</button>
        </div>
    );
};

export default Banner;