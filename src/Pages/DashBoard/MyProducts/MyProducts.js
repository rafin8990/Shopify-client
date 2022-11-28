import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvaider/AuthProvider';
import MyProductDetails from '../MyProductDetails/MyProductDetails';


const MyProducts = () => {
 const {user}=useContext(AuthContext)

 const [products, setProducts]=useState([]);

 useEffect(()=>{
    axios.get(`https://shopify-server.vercel.app/categories?email=${user?.email}`)
    .then(data=>{
        
        setProducts(data.data)
    })
 },[user?.email])
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
         
         {
            products?.map(product=><MyProductDetails
            key={product?._id}
            product={product}
            ></MyProductDetails>)
         }
        </div>
    );
};

export default MyProducts;