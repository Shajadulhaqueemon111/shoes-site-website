import React, { useEffect, useState } from 'react';
import TraindingShoeCard from './TraindingShoeCard';
import '../StyleCss/style.css'
const TrandingShoe = () => {

    const [shoes,setShoes]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/shoes')
        .then(res=>res.json())
        .then(data=>setShoes(data))
    },[])
    return (
        <div>
            <h2 className='text-center text-3xl font-bold font-familly text-[#B226E3]'>Discover</h2>
            <h2 className='text-xl font-bold font-familly'>Trending:</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4'>
        {
            shoes.map(shoe=><TraindingShoeCard key={shoe._id} shoe={shoe}></TraindingShoeCard>)
        }
            </div>
        </div>
    );
};

export default TrandingShoe;