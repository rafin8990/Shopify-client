
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import advertise from '../../assets/Mahindra-Scorpio.jpg'
import AdvertiseDetails from './AdvertiseDetails';

const Advertise = () => {

    const {data: advertises=[]}=useQuery({
        queryKey:['advertise'],
        queryFn:async()=>{
            const res= await fetch('http://localhost:5000/categoryitem?advertise=advertise')
            const data= await res.json();
            return data
        }
    })
    return (
        <div>
            <div className='my-20'>
                <div className="hero border rounded-2xl shadow-2xl">
                    <div className="hero-content flex-col md:flex-row">
                        <img src={advertise} className=" rounded-xl  md:w-[50%]"  alt=''/>
                        <div className='md:w-[50%] ml-10'>
                            <h1 className="text-2xl md:text-5xl font-bold">Need Car???</h1>
                            <p className="py-6">Please perchase old car from here. We Provide the best car at a cheap rate . So Don't be late.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            advertises?.map(advertise=><AdvertiseDetails
                            key={advertise?._id}
                            advertise={advertise}
                            
                            ></AdvertiseDetails> )}
                    </div>
            </div>
        </div>
    );
};

export default Advertise;