import React from 'react';

const CategoryDetails = ({ category, setCategoryData }) => {

    const { NewPrice, picture, name, company, location, Years, Seller, post, ResalePrice } = category
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
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
                    <div className="card-actions justify-end">
                        <label onClick={() => setCategoryData(category)} htmlFor="my-modal-3" className="btn w-full">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;