import React from 'react';
import { useRouteError } from 'react-router-dom';
import error1 from '../../../assets/404.png'

const ErrorElements = () => {
    const error =useRouteError()
    return (
        <div className='flex justify-center items-center'>
            <div>
                <img src={error1} alt="" />
                <h1 className='text-4xl text-red-600 text-center'>Opps An error Occurd !!!</h1>
                <p className='text-red-600 text-3xl text-center'>{error.message || error.statusText  }</p>
            </div>
        </div>
    );
};

export default ErrorElements;