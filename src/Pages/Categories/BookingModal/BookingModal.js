import React, { useContext } from 'react';

import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvaider/AuthProvider';

const BookingModal = ({ categoryData }) => {
    const { name, ResalePrice,picture, _id } = categoryData
    const { user } = useContext(AuthContext)
    const navigate=useNavigate()
    
    const handleModal = event => {
        event.preventDefault()
        const form = event.target;
        const email= form.email.value;
        const itemName =form.itemName.value;
        const price=form.price.value;
        const mobile=form.mobile.value;
        const location=form.location.value;
        const categoryId= _id
        const modalData = {
            email: email,
            itemName: itemName,
            price:price,
            mobile: mobile,
            meetingLocation: location,
            picutre:picture,
            categoryId:categoryId
        }
        console.log(modalData)
        fetch('https://shopify-server.vercel.app/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(modalData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Modal Data Updated Successfully')
                    form.reset()
                    navigate('/dashboard')
                }
            })

    }

    return (
        <div>
            <div>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <form onSubmit={handleModal}>
                            <div className='mt-5 '>
                                <label className='mb-5 text-gray-500'>Your Email:</label>
                                <input type="email" name='email' defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full " />

                            </div>
                            <div className='mt-3 '>
                                <label className='mb-5 text-gray-500'>Item Name :</label>
                                <input type="text" name='itemName' defaultValue={name} disabled placeholder="" className="input input-bordered w-full " />

                            </div>
                            <div className='mt-3 '>
                                <label className='mb-5 text-gray-500'>Price:</label>
                                <input  type="text" name='price' defaultValue={ResalePrice} disabled placeholder="" className="input input-bordered w-full " />

                            </div>
                            <div className='mt-3 '>
                                <label className='mb-5 text-gray-500'>Mobile Number:</label>
                                <input type="text" name='mobile' required placeholder="Type here" className="input input-bordered w-full " />
                                
                            </div>
                            <div className='mt-3 '>
                                <label className='mb-5 text-gray-500'>Meeting Location</label>
                                <input type="text" name='location' required placeholder="Type here" className="input input-bordered w-full " />
                                

                            </div>

                            <div className="mt-5">
                                <button  type='submit' className="btn btn-sm">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;