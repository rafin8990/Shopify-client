import React from 'react';

const ToyotaCart = ({ toyota }) => {

    const { NewPrice, picture, name, company, location, ResalePrice, years,
        seller, post, } = toyota
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{NewPrice}</h2>
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">{company}</h2>
                    <h2 className="card-title">{location}</h2>
                    <h2 className="card-title">{years}</h2>
                    <h2 className="card-title">{seller}</h2>
                    <h2 className="card-title">{post}</h2>
                    <p>{ResalePrice}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyotaCart;