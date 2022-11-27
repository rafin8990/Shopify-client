import React from 'react';

const MyProductDetails = ({product}) => {
    const { NewPrice, picture, name, company, location, Years, Seller, post, ResalePrice }=product
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img className=' h-60 w-full' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex justify-between'>
                        <p><span className='font-bold'>Brand Name</span> : {company}</p>
                        <p><span className='font-bold'>Location</span> : {location}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p><span  className='font-bold'>New Price </span>: ${NewPrice}</p>
                        <p><span  className='font-bold'>Resale Price </span>  : ${ResalePrice}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p><span className='font-bold'>Seller Name</span> : {Seller}</p>
                        <p><span className='font-bold'>Years of Use</span>: {Years}</p>
                    </div>
                    <p className='text-center'><span className='font-bold'>Post Time</span>: {post}</p>
                    <div>
                        <button className='btn w-full'>Advertise</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProductDetails;