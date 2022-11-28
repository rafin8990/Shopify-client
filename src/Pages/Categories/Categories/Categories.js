import React, { useState } from 'react';
import { useLoaderData} from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const Categories = () => {
    const categories = useLoaderData();
   
    const [categoryData, setCategoryData] = useState(null)
    
    return (
        <div>
            <div>

            </div>
            <div className=' m-5 md:m-0'>
                {
                    categories.map(category => <CategoryDetails
                        key={category?._id}
                        category={category}
                        setCategoryData={setCategoryData}
                    ></CategoryDetails>
                    )}
            </div>
            <div>
                {
                    categoryData &&
                    <BookingModal
                        categoryData={categoryData}
                    ></BookingModal>
                }
            </div>
        </div>
    );
};

export default Categories;