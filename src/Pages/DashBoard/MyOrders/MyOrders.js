import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvaider/AuthProvider';


const MyOrders = () => {

    const { user } = useContext(AuthContext)

    const { data: bookings = [] } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/booking?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            console.log(data)
            return data
        }
    })

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, i) => <tr key={booking?._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="w-24 rounded-full">
                                        <img src={booking.picture} alt='' />
                                    </div>
                                </td>
                                <td>{booking?.itemName}</td>
                                <td>{booking?.price}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid &&
                                        <td className='bg-white text-black'><Link to={`/dashboard/payment/${booking?._id}`}><button className='btn btn-sm btn-primary'>Pay</button></Link></td>
                                    }
                                    {
                                        booking?.price && booking?.paid &&
                                        <td className='bg-white text-black'><span className='text-green-500'>Paid</span></td>
                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;