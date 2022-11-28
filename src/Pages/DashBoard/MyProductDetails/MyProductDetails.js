import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const MyProductDetails = ({ product }) => {
    const { picture, name, company, post, ResalePrice, _id } = product;
    const navigate = useNavigate()

    const handleAdvertise = () => {

        const advertise = {
            number: 5000
        }
        fetch(`https://shopify-server.vercel.app/advertise/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(advertise)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Advertise Completed Successfully')
                    navigate('/')
                }
            })
    }
    return (
        <div>
            <div className="hero m-5  ">
                <div className="hero-content flex-col lg:flex-row rounded-2xl shadow-2xl">
                    <img src={picture} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <div className='flex justify-between'>
                            <p><span className='font-bold'>Brand Name</span> : {company}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p><span className='font-bold'>Resale Price </span>  : ${ResalePrice}</p>
                        </div>
                        <p className=''><span className='font-bold'>Post Time</span>: {post}</p>
                        <div>
                            {
                                product && product.paid ?
                                    <h1 className='text-xl text-gray-500'>This product was sold.Not available</h1>
                                    :
                                    <div className=' flex justify-between items-center'>
                                        <p className=' text-green-500'>product is available</p>
                                        {
                                            product && product.advertise ?
                                                <p className='text-green-500 ml-10'>Advertised Completed</p>
                                                :

                                                <button onClick={handleAdvertise} className='btn btn-sm'>Advertise</button>
                                        }

                                    </div>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProductDetails;