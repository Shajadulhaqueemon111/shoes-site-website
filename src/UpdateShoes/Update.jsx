import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update= () => {
    const initialData = useLoaderData();
    const [shows,setShows] = useState(initialData);
    const navigate=useNavigate()
    useEffect(() => {
       setShows(initialData);
    }, [initialData]);

    console.log(shows)
    if (!shows) {
        // You might want to render a loading spinner or message here
        return null;
    }
     
    const {_id,shoeName,image,price}=shows
    const handelUpdate = (e) => {
        
        e.preventDefault()
        const name = e.target.shoeName.value
        const image = e.target.image.value
        const price= e.target.price.value
       

        const UpdateShows = { name, image, price}
        console.log(UpdateShows)

        fetch(`http://localhost:5000/shows/${_id}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(UpdateShows)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.modifiedCount>0){
                    Swal.fire({
                        title: 'Updated Successfully',
                        icon: 'success',
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
                navigate('/explore')
            })
    }
    return (
        <div className='bg-[#F4F3F0] p-24 '>
        <h2 className='text-3xl font-bold text-center mb-4'>Update Shows</h2>
        <p className='mb-4 text-center'>
            A to-do task is a concise description of an action or activity that needs to be completed, typically written in a brief, two-line format outlining the task and any essential details or deadlines.</p>
        <form onSubmit={handelUpdate}>
            {/* Form row */}
            <div className=' md:flex gap-4'>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Shows Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='shoeName' placeholder="Enter shoe name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='image' placeholder="Enter shoe Photo" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* Form row */}
            <div className=' md:flex gap-4'>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">

                        <input type="price" name='price' placeholder="Enter Price" className="input input-bordered w-full" />
                    </label>
                </div>
                
            </div>

            {/* Form row */}

            <button className="btn mt-4 btn-block bg-[#D2B48C]">Add</button>
        </form>
    </div>
    );
    
};

export default Update;