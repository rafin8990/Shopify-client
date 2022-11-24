import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvaider/AuthProvider';

const BookingModal = ({ categoryData }) => {
    console.log(categoryData)
    const {name, ResalePrice    }=categoryData

    const { user } = useContext(AuthContext)
    return (
        <div>
            <input type="checkbox" id="category-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className='mt-5 '>
                        <label className='mb-5 text-gray-500'>Your Email:</label>
                        <input type="email" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full " />
                    </div>
                    <div className='mt-3 '>
                        <label className='mb-5 text-gray-500'>Item Name :</label>
                        <input type="text" defaultValue={name} disabled  placeholder="" className="input input-bordered w-full " />
                    </div>
                    <div className='mt-3 '>
                        <label className='mb-5 text-gray-500'>Price:</label>
                        <input type="text" defaultValue={ResalePrice} disabled placeholder="" className="input input-bordered w-full " />
                    </div>
                    <div className='mt-3 '>
                        <label className='mb-5 text-gray-500'>Mobile Number:</label>
                        <input type="text" required placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className='mt-3 '>
                        <label className='mb-5 text-gray-500'>Meeting Location</label>
                        <input type="text" required placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                   
                    <div className="mt-5">
                        <label htmlFor="category-modal" className="btn btn-sm">Submit</label>
                        <label  className="btn btn-sm ml-3">cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;