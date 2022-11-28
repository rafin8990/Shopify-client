import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvaider/AuthProvider';

const Addproduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_IMGBB_KEY;
    const {user}=useContext(AuthContext)
    const navigate=useNavigate()

    const handleAddProduct = data => {
        const image = data.image[0];
        const formdata = new FormData();
        const date = new Date().toLocaleDateString();
        const email=user?.email
        formdata.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formdata
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
                if (imgData.success) {
                    const imgURL = imgData.data.url


                    const product = {
                        NewPrice: data.newprice,
                        picture: imgURL,
                        name: data.product,
                        company: data.company,
                        location: data.location,
                        ResalePrice: data.resalePrice,
                        Years: data.used,
                        Seller: data.name,
                        post: date,
                        categoryName: data.categoryName,
                        mobile: data.mobile,
                        condition: data.condition,
                        email:email
                    }

                    fetch('https://shopify-server.vercel.app/categoryitems', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.acknowledged) {
                                toast.success('Product Added Successfully')
                                navigate('/dashboard/myproducts')
                            }
                        })
                }
            })
    }
    return (
        <div>
            <div>
                <h1 className='text-4xl font-bold text-center'>Add A Product</h1>
            </div>
            <form onSubmit={handleSubmit(handleAddProduct)} className='flex justify-center items-center m-10'>
                <div className='border p-5 border-gray-300 rounded-lg shadow-2xl'>
                    <div className='flex flex-col md:flex-row'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: "Name  is required" })} type="text" placeholder="Your full name" className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full md:ml-5 max-w-xs">
                            <label className="label">
                                <span className="label-text">Product name</span>
                            </label>
                            <input {...register("product", { required: "Product  is required" })} type="text" placeholder="Product name" className="input input-bordered w-full max-w-xs" />
                            {errors.product && <p className="text-red-600">{errors.product?.message}</p>}
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Mobile No</span>
                            </label>
                            <input  {...register("mobile", { required: "Mobile no  is required" })} type="text" placeholder="Your Mobile No" className="input input-bordered w-full max-w-xs" />
                            {errors.mobile && <p className="text-red-600">{errors.mobile?.message}</p>}
                        </div>
                        <div className="form-control w-full md:ml-5 max-w-xs">
                            <label className="label">
                                <span className="label-text">Company</span>
                            </label>
                            <select {...register("company", { required: "Company  is required" })} className="select select-bordered w-full max-w-xs">
                                <option>Nissan</option>
                                <option>Toyota</option>
                                <option>Suzuki</option>
                            </select>
                            {errors.company && <p className="text-red-600">{errors.company?.message}</p>}
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input {...register("location", { required: "location  is required" })} type="text" placeholder="Enter Your Location" className="input input-bordered w-full max-w-xs" />
                            {errors.location && <p className="text-red-600">{errors.location?.message}</p>}
                        </div>
                        <div className="form-control w-full md:ml-5 max-w-xs">
                            <label className="label">
                                <span className="label-text">Resale Price</span>
                            </label>
                            <input {...register("resalePrice", { required: "ResalePrice  is required" })} type="text" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                            {errors.resalePrice && <p className="text-red-600">{errors.resalePrice?.message}</p>}
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select {...register("categoryName", { required: "CategoryName  is required" })} className="select select-bordered w-full max-w-xs">
                                <option>Nissan</option>
                                <option>Toyota</option>
                                <option>Suzuki</option>
                            </select>
                            {errors.categoryName && <p className="text-red-600">{errors.categoryName?.message}</p>}
                        </div>
                        <div className="form-control w-full md:ml-5 max-w-xs">
                            <label className="label">
                                <span className="label-text">New Price</span>
                            </label>
                            <input {...register("newprice", { required: "newprice  is required" })} type="text" placeholder="New Price" className="input input-bordered w-full max-w-xs" />
                            {errors.newprice && <p className="text-red-600">{errors.newprice?.message}</p>}
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Condition</span>
                            </label>
                            <select {...register("condition", { required: "condition  is required" })} className="select select-bordered w-full max-w-xs">
                                <option>Excillent</option>
                                <option>Good</option>
                                <option>Fair</option>
                            </select>
                            {errors.condition && <p className="text-red-600">{errors.condition?.message}</p>}
                        </div>
                        <div className="form-control w-full md:ml-5 max-w-xs">
                            <label className="label">
                                <span className="label-text">Total used</span>
                            </label>
                            <input {...register("used", { required: "Used year  is required" })} type="text" placeholder="Enter used In Year" className="input input-bordered w-full max-w-xs" />
                            {errors.used && <p className="text-red-600">{errors.used?.message}</p>}
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div>
                            <label className="label">
                                <span className="label-text">Enter Product Picture</span>
                            </label>
                            <input {...register("image", { required: "Image  is required" })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                            {errors.image && <p className="text-red-600">{errors.image?.message}</p>}
                        </div>
                    </div>
                    <div className='mt-5'>
                        <button className='btn btn-outline w-full'> Add Product</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Addproduct;