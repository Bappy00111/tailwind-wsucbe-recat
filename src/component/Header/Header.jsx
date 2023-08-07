import React, { useState } from 'react';
import { AiOutlineMenu,AiOutlineClose} from "react-icons/ai";

const Header = () => {
    const [toggel,setToggel] = useState(false);
    return (
        <div className='bg-[#2699fb] p-4'>
            <div className='max-w-[1240px] flex  justify-between items-center mx-auto'>
                <div>
                    <h1 className='text-4xl font-bold'>WsCube Tech.</h1>
                </div>
                {
                    toggel ? 
                    <AiOutlineClose onClick={()=>setToggel(!toggel)} className='text-xl text-white md:hidden block'/>
                    :
                    <AiOutlineMenu onClick={()=>setToggel(!toggel)} className='text-3xl text-white md:hidden block'/>
                }
                
               
                <ul className='hidden md:flex gap-8 text-white'>
                    <li>
                        Home
                    </li>
                    <li>
                        Company
                    </li>
                    <li>
                        Resources
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
                {/* responsive menu  */}
                <ul className={`duration-300 md:hidden w-full h-screen gap-8 text-white fixed bg-black 
                 ${toggel ? 'left-[0]' : 'left-[-100%]'}
                 top-[70px]`}>
                    <li  className='p-5'>
                        Home
                    </li>
                    <li  className='p-5'>
                        Company
                    </li>
                    <li  className='p-5'>
                        Resources
                    </li>
                    <li  className='p-5'>
                        About
                    </li>
                    <li  className='p-5'>
                        Contact
                    </li>
                </ul>
            </div>     
        </div>
    );
};

export default Header;