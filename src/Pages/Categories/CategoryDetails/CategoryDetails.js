import React from 'react';
import toast from 'react-hot-toast';
import { FaShopify } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';





const CategoryDetails = ({ category, setCategoryData }) => {
    
    const navigate = useNavigate()

    const { NewPrice, picture, name, company, location, Years, Seller, post, ResalePrice, _id, wishlistData } = category;

    const handleWishlist = () => {
        const wishlistData = {
            wishlist: 'wishlist'
        }
        fetch(`https://shopify-server.vercel.app/categoryitem/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(wishlistData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Added to wishlist successfully')
                    navigate('/dashboard/wishlist')

                }
            })
    }
    return (
        <div>

            {
                category && category.paid ?
                    <></>
                    :
                    <div>
                        <div className="hero  ">
                            <div className="hero-content flex-col lg:flex-row border m-5 rounded-2xl shadow-2xl ">
                                <img src={picture} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                                <div className=''>
                                    <h1 className="text-4xl font-bold">{name}!</h1>
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
                                    <div className='flex justify-between'>
                                        <p>Post Time: {post}</p>
                                        {
                                            wishlistData ?
                                                <> <p className='text-xl'>Wishlist Added</p></>
                                                :
                                                <div onClick={handleWishlist} className='flex items-center btn btn-sm btn-link'>
                                                    <FaShopify></FaShopify>
                                                    <p>Add To Wishlist</p>
                                                </div>
                                        }
                                    </div>

                                    <div className="card-actions justify-end">
                                        <label onClick={() => setCategoryData(category)} htmlFor="my-modal-3" className="btn w-full">Book Now</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }



        </div>
    );
};

export default CategoryDetails;
