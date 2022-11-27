import React, { useContext} from 'react';
import toast from 'react-hot-toast';
import { FaShopify } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../Context/AuthProvaider/AuthProvider';



const CategoryDetails = ({ category, setCategoryData }) => {
    const { user } = useContext(AuthContext)
    const navigate=useNavigate()
    
    const { NewPrice, picture, name, company, location, Years, Seller, post, ResalePrice, _id, wishlistData } = category;

    const handleWishlist = () => {
        const wishlistData = {
            wishlist: 'wishlist'
        }
        fetch(`http://localhost:5000/categoryitem/${_id}`, {
            method: "PUT",
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
    );
};

export default CategoryDetails;
