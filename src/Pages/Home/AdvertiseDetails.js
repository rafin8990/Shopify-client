import React from 'react';

const AdvertiseDetails = ({advertise}) => {
    return (
        <div>
            <div className="card card-compact w-96  bg-base-100 shadow-xl">
                            <figure><img className=' h-60 w-full' src={advertise?.picture} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{advertise?.name}</h2>
                                <div className='flex justify-between'>
                                    <p>Brand Name : {advertise?.company}</p>
                                    <p>Location : {advertise?.location}</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>New Price : {advertise?.NewPrice}</p>
                                    <p>Resale Price : {advertise?.ResalePrice}</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>Seller Name : {advertise?.Seller}</p>
                                    <p>Years of Use: {advertise?.Years}</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>Post Time: {advertise?.post}</p>
                                </div>
    
                                <div className="card-actions justify-end">
                                    <label  htmlFor="my-modal-3" className="btn w-full">Book Now</label>
                                </div>
                            </div>
                        </div>
        </div>
    );
};

export default AdvertiseDetails;