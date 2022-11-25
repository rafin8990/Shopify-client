import React from 'react';

const Addproduct = () => {
    return (
        <div>
            <div>
                <h1 className='text-4xl font-bold text-center'>Add A Product</h1>
            </div>
            <form className='flex justify-center items-center m-10'>
                <div className='border p-5 border-gray-300 rounded-lg shadow-2xl'>
                    <div className='flex flex-col md:flex-row'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your full name" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full md:ml-5 max-w-xs">
                            <label className="label">
                                <span className="label-text">Product name</span>
                            </label>
                            <input type="text" placeholder="Product name" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Mobile No</span>
                            </label>
                            <input type="text" placeholder="Your Mobile No" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full md:ml-5 max-w-xs">
                            <label className="label">
                                <span className="label-text">Product name</span>
                            </label>
                            <input type="text" placeholder="Product name" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" placeholder="Enter Your Location" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full md:ml-5 max-w-xs">
                            <label className="label">
                                <span className="label-text">Resale Price</span>
                            </label>
                            <input type="text" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs">
                                <option>Nissan</option>
                                <option>Toyota</option>
                                <option>Suzuki</option>
                            </select>
                        </div>
                        <div className="form-control w-full md:ml-5 max-w-xs">
                            <label className="label">
                                <span className="label-text">New Price</span>
                            </label>
                            <input type="text" placeholder="New Price" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Condition</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs">
                                <option>Excillent</option>
                                <option>Good</option>
                                <option>Fair</option>
                            </select>
                        </div>
                        <div className="form-control w-full md:ml-5 max-w-xs">
                            <label className="label">
                                <span className="label-text">Total used</span>
                            </label>
                            <input type="text" placeholder="Enter used In Year" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div>
                            <label className="label">
                                <span className="label-text">Enter Product Picture</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Addproduct;