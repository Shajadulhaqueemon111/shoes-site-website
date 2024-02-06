import React, { useEffect, useState } from 'react';
import '../StyleCss/style.css'
import ChildShopeCard from './ChildShopeCard';
const ChildShope = () => {
    const [shoes,setShoes]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/child')
        .then(res=>res.json())
        .then(data=>setShoes(data))
    },[])
    return (
        <div className='mt-6'>
            <h2 className='text-xl font-bold font-familly'>Child’s Shoes :</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    shoes.map(shoe=><ChildShopeCard key={shoe._id} shoe={shoe}></ChildShopeCard>)
                }
            </div>
        </div>
    );
};

export default ChildShope;