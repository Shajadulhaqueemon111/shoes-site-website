import React from 'react';
import '../StyleCss/style.css'
import { BiSolidShoppingBags } from "react-icons/bi";
import Swal from 'sweetalert2';
import axios from 'axios';
const FormalCard = ({formal}) => {
    const {shoeName,image,price,}=formal;

    const cardStyle={
        hight:"350px",
        width:"300px"
    }

    const handelFormal = async () => {
        try {
            
            const apiUrl = 'http://localhost:5000/addShoes';

            
            const requestData = {
                shoeName:formal.shoeName,
                image:formal.image,
                price:formal.price,

            };

           
            const response = await axios.post(apiUrl, requestData);

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Shoes Iteam has been saved",
                showConfirmButton: false,
                timer: 1500
              });
            console.log('Response from server:', response.data);

            
        } catch (error) {
            // Handle errors
            console.error('Error while sending the POST request:', error.message);
        }
    };
    return (
        <div className='mx-auto '>
            <div style={cardStyle} className="relative flex flex-col mt-6 text-gray-700 bg-white  bg-clip-border rounded-xl w-96">
                <div
                    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <img className='p-4'
                        src={image}
                        alt="card-image" />
                </div>
                <div className="p-8 flex gap-8 ">
                   <div >
                   <h5 className="block mb-2 font-sans  font-familly antialiased  leading-snug tracking-normal text-blue-gray-900">
                        {shoeName}
                    </h5>
                   </div>
                    <div>
                    <p className="block font-familly  font-sans text-base antialiased  leading-relaxed text-inherit">
                        ${price}
                    </p>
                    </div>
                </div>
                <div className="p-6 pt-0">
                    <button onClick={handelFormal}
                        className="align-middle font-familly  flex select-none text-[#B226E3] font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-mxs py-3 px-6 rounded-lg   shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button">
                    <BiSolidShoppingBags className='text-xl font-bold'></BiSolidShoppingBags> 
                    
                   <div>
                   Buy 
                   </div>
                        
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FormalCard;