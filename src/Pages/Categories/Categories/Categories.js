import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const Categories = () => {
    const categories = useLoaderData();

    return (
        <div>
            <div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5 md:m-0'>
                {
                    categories.map(category =><CategoryDetails 
                        key={category?._id}
                        category={category}
                    ></CategoryDetails> 
                    )}
            </div>
        </div>
    );
};

export default Categories;