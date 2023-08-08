import React from 'react';
import logo from '../../assets/laptop.jpg'

const Export = () => {
    return (
        <div className='max-w-[1240px] border-2 my-10 px-5  mx-auto grid md:grid-cols-2 items-center shadow-xl rounded-xl'>
            <div className=' col-span-1 md:w-[80%] text-center'>
                <img src={logo} alt="" />
            </div>
            <div className='col-span-1 '>
                <h1 className='text-[#00df9a] font-bold my-2'>LEARN FROM EXPERTS</h1>
                <p className='my-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius ducimus maxime unde natus officia dolorem quae totam voluptatibus architecto culpa non numquam facilis itaque ea eaque, vitae rerum eligendi recusandae, mollitia necessitatibus a. Laborum a sit quasi veritatis. Voluptatibus dignissimos iste maxime adipisci explicabo amet eligendi unde accusamus ullam.
                </p>
                <button className='bg-black text-white p-3 rounded  my-2'>Get Sterted</button>
            </div>
        </div>
    );
};

export default Export;