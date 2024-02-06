import React from 'react';
import Banner from '../Banner/Banner';
import TrandingShoe from '../Tranding/TrandingShoe';
import FormalShoe from '../Formal/FormalShoe';
import ChildShope from '../ChildShope/ChildShope';

const Homepage = () => {
    return (
        <div>
         <Banner></Banner> 
         <TrandingShoe></TrandingShoe>
         <FormalShoe></FormalShoe>
         <ChildShope></ChildShope>
        </div>
    );
};

export default Homepage;