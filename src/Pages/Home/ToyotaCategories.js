import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ToyotaCart from './ToyotaCart';

const ToyotaCategories = () => {

    const {data:toyotas=[]}=useQuery({
        queryKey:['toyota'],
        queryFn:async()=>{
            const res= await fetch('http://localhost:5000/toyota')
            const data=await res.json();
            return data
        }
    })
    return (
        <div>
            <div>

            </div>
            <div>
                {
                    toyotas?.map(toyota=><ToyotaCart
                    key={toyota?._id}
                    toyota={toyota}
                    ></ToyotaCart>)
                }
            </div>
        </div>
    );
};

export default ToyotaCategories;