import React from 'react';
import logo from '../assets/Rectangle 2.Png'
import '../StyleCss/style.css'
const Banner = () => {
    const style={
        hight:"408px",
        width:"262px"
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2  mx-auto w-3/5 mt-10 gap-40'>
            <div>
                <h2 className='text-2xl font-serif font-familly gap-10'><span className='text-[#B226E3]'>Stride in Style:</span> Discover Your Perfect Pair of  Shoes at Our Exquisite Shoe Emporium!</h2>
            </div>
            <div className='mb-10'>
           <img style={style} src={logo} alt=""/>
            </div>
        </div>
    );
};

export default Banner;