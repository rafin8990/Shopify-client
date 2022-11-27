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
                        <p>Brand Name : {company}</p>
                        <p>Location : {location}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>New Price : {NewPrice}</p>
                        <p>Resale Price : {ResalePrice}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Seller Name : {Seller}</p>
                        <p>Years of Use: {Years}</p>
                    </div>
                    <p className='text-center'>Post Time: {post}</p>
                    <div>
                        <button className='btn w-full'>Advertise</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProductDetails;