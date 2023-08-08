import React from 'react';
import developer from '../../assets/single.png'
import appDeveloper from '../../assets/double.png'
import digetalMarketing from '../../assets/triple.png'

const Plance = () => {
    return (
        <div className='max-w-[1240px] mx-auto  py-[100px]'>
            <div className='md:grid grid-cols-3 gap-10 p-5'>
                <div className='h-[400px] shadow-2xl hover:scale-105 duration-500 rounded-xl text-center p-5 mb-5'>
                    <img className='w-[200px] mx-auto' src={developer} alt="" />
                    <h2 className='text-2xl font-bold'>Web Development</h2>
                    <h2 className='text-2xl font-bold'>$149</h2>
                    <p>Lorem ipsum is simply <br />
                    Lorem ipsum is simply dummy text of <br />
                    the printing</p>
                </div>
                <div className='h-[400px] bg-slate-100 shadow-2xl hover:scale-105 duration-500 rounded-xl text-center p-5 mb-5'>
                    <img className='w-[200px] mx-auto' src={appDeveloper} alt="" />
                    <h2 className='text-2xl font-bold'>App deveopment</h2>
                    <h2 className='text-2xl font-bold'>$149</h2>
                    <p>Lorem ipsum is simply <br />
                    Lorem ipsum is simply dummy text of <br />
                    the printing</p>
                </div>
                <div className='h-[400px] shadow-2xl hover:scale-105 duration-500 rounded-xl text-center p-5 mb-5'>
                    <img  className='w-[200px] mx-auto' src={digetalMarketing} alt="" />
                    <h2 className='text-2xl font-bold'> Digetal Marketing</h2>
                    <h2 className='text-2xl font-bold'>$149</h2>
                    <p>Lorem ipsum is simply <br />
                    Lorem ipsum is simply dummy text of <br />
                    the printing</p>
                </div>

            </div>
        </div>
    );
};

export default Plance;