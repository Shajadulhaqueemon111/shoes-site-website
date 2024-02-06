
import React from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const ExploreCard = ({show,refetch}) => {

    const {_id,shoeName,image,price}=show;
    const cardStyle={
        hight:"350px",
        width:"300px"
    }

    const handelDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/deleteShows/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            console.log(res.data.deletedCount);
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            
                        }
                    })
                    .catch(error => {
                        console.error('Error deleting data:', error);
                        Swal.fire({
                            title: "Error!",
                            text: "An error occurred while deleting the file.",
                            icon: "error"
                        });
                    });
            }
        });
    };


    return (
        <div className='mx-auto '>
        <div style={cardStyle} className="relative flex flex-col mt-6 text-gray-700 bg-white  bg-clip-border rounded-xl w-96">
            <div
                className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img
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
              
              <div>
              <button onClick={()=>handelDelete(show._id)}
                    className="align-middle font-familly select-none text-[#B226E3] font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg   shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">
                    <RiDeleteBin5Line className='text-2xl'></RiDeleteBin5Line>
                </button>
                
                <Link to={`/update/${_id}`}> 
                 <button 
                    className="align-middle font-familly select-none text-[#B226E3] font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg   shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">
                     
                     <FaEdit className='text-2xl'></FaEdit>
                   
                    
                </button>
                </Link>
             <Link to={`/payment/${_id}`}>
             <button 
                    className="align-middle font-familly select-none text-[#B226E3] font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg   shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">
                    <MdOutlinePayment className='text-2xl'></MdOutlinePayment>
                </button>
             </Link>
              </div>
               
            </div>
        </div>
    </div>
    );
};

export default ExploreCard;