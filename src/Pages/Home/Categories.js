import React from 'react';

import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const Categories = () => {

    const { data: categories = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/category')
            const data = await res.json()
            return data
        }
    })
    return (
        <div>
            <div>
                <h1 className='text-4xl font-semibold text-center m-10'>All categories Here</h1>
                <h1 className='text-2xl font-semibold text-center m-10'>Select Your Brand</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-5 md:m-0'>
                {
                    categories?.map(category => <div key={category?._id} className='border border-gray-500 shadow-2xl rounded-xl'>
                        <div>
                            <img className='h-72 w-full rounded-xl' src={category?.image} alt="" />
                        </div>
                        <div>
                            <Link to={`/category/${category?.categoryName}`}><h1 className='text-2xl font-bold flex justify-center items-center my-5 btn'>{category?.categoryName}</h1></Link>
                        </div>
                    </div>)
                }


            </div>
        </div>
    );
};

export default Categories;