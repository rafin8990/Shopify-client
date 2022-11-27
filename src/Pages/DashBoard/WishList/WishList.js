/* import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import BookingModal from '../../Categories/BookingModal/BookingModal';

const WishList = () => {

    const { data: wishlist = [] } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categoryitem?wishlishData=wishlist', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            
            {
                wishlist.map(wish => <div key={wish?._id} className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img className=' h-60 w-full' src={wish?.picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{wish?.name}</h2>
                        <div className='flex justify-between'>
                            <p>Brand Name : {wish?.company}</p>
                            <p>Location : {wish?.location}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>New Price : {wish?.NewPrice}</p>
                            <p>Resale Price : {wish?.ResalePrice}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Seller Name : {wish?.Seller}</p>
                            <p>Years of Use: {wish?.Years}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Post Time: {wish?.post}</p>
                        </div>

                        <div className="card-actions justify-end">
                            <Link to={`/dashboard/payment/${wish?._id}`}><label  className="btn btn-sm w-full">Pay Now</label></Link>
                        </div>
                    </div>
                </div>)
            }

            <div>
            
            </div>
        </div>
    );
};

export default WishList; */