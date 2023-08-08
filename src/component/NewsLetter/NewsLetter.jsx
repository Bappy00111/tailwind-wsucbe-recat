import React from 'react';

const NewsLetter = () => {
    return (
        <div className='bg-[#2699fb] p-4'>
            <div className='max-w-[1240px] mx-auto md:flex justify-between md:p-[100px]'>
                <div className=' text-white mt-2'>
                    <h1 className='text-[20px] md:text-[40px] font-bold'>Went to learn latest I.T skills? </h1>
                    <p>sing up to your newsletter and say up to date.</p>
                </div>
                <div className='mt-2'>
                    <input className='p-2 mb-3 mr-2 rounded text-slate-500' type="text" placeholder='Enter Email' />
                    <button className='bg-black text-white p-2 rounded '>Get Sterted</button>
                    <p className='text-white mt-5'>We care bout the protection of your data.Read your <br /> pricacy Policy. </p>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;