import React, { useEffect, useState } from 'react';
import ExploreCard from './ExploreCard';
import '../StyleCss/style.css'
const Expolore = () => {

    const [shows,setShows]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/getShows')
        .then(res=>res.json())
        .then(data=>setShows(data))
    },[])

    const refetch=()=>{
        fetch('http://localhost:5000/getShows')
        .then(res => res.json())
        .then(data => setShows(data))
        .catch(error => console.error('Error fetching data:', error));
    }
    return (
        <div>
            <h2 className='text-2xl font-familly mt-6 mb-4 text-center font-bold'>ADD ALL <span className=' text-sky-600'>SHOES</span></h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    shows.map(show=><ExploreCard key={show._id} refetch={refetch} show={show}></ExploreCard>)
                }
            </div>
        </div>
    );
};

export default Expolore;