import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvaider/AuthProvider';
import useToken from '../../Shered/UseToken/useToken';

const Register = () => {

    const navigate = useNavigate();
    const { createUser, googleSignIn, updateUser } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signUpError, setSignUpError] = useState('');
    const [userEmail, setUserEmail]=useState('')
    const [token]= useToken(userEmail)

    if(token){
        navigate('/')
    }
    const handleRegister = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                .then(()=>{

                   
                })
                .catch()
                const role=data.option
                const email=data.email
                const name=data.name
                const userCollection={
                    role: role,
                    email: email,
                    name: name
                }
                fetch('https://shopify-server.vercel.app/users',{
                    method:'POST',
                    headers:{
                        'content-type' : 'application/json'
                    },
                    body:JSON.stringify(userCollection)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    setUserEmail(email)
                })

            })
            .catch(error => {
                console.error(error)
                setSignUpError(error.message)
            
            })

    }
    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                const email=user.email;
                const role= 'Buyer';
                const Collection={
                    email: email,
                    role: role
                }
                fetch('https://shopify-server.vercel.app/users',{
                    method:'POST',
                    headers:{
                        'content-type' : 'application/json'
                    },
                    body:JSON.stringify(Collection)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                })
                toast.success('user update successfully')
                navigate('/')
            })
            .catch(error => console.error(error))
    }



    return (
        <div>
            <div className='h-[800px] flex justify-center items-center rounded-xl'>
                <div>
                    <div className='border  p-5 rounded-xl shadow-2xl'>
                        <h2 className='text-xl font-semibold text-center'>Sign UP</h2>
                        <form onSubmit={handleSubmit(handleRegister)}>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="">Name</span>
                                </label>
                                <input {...register("name", { required: "Name is required" })} type="text" placeholder="Enter Name" className="input input-bordered md:w-[450px] " />
                                {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                            </div>
                            <div className="form-control w-full mb-3">
                                <label className="label">
                                    <span className="">Select A option</span>
                                </label>
                                <select {...register("option", { required: "option is required" })} className="select select-bordered w-full">
                                    <option disabled selected>Buyer</option>
                                    <option>Seller</option>
                                </select>
                                {errors.option && <p className="text-red-600">{errors.option?.message}</p>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="">Email</span>
                                </label>
                                <input {...register("email", { required: "Email Address is required" })} type="email" placeholder="Enter Email" className="input input-bordered md:w-[450px] " />
                                {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="">Password</span>
                                </label>
                                <input  {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "pasword must be 6 characters or longer" }

                                })} type="password" name='password' placeholder="Enter password" className="input input-bordered w-full" />
                                {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
                                <p className="text-red-600">{signUpError}</p>
                            </div>
                            <div className='form-control w-full mt-5'>
                                <button className='btn '>Sign Up</button>
                                <p className='mt-3'>Already Have an account ? <Link to='/login'><span className='text-[#19D3AE] hover:underline'> Please login</span></Link> </p>
                            </div>
                            <div className="divider">OR</div>

                        </form>
                        <div className='form-control w-full'>
                            <button onClick={handleGoogle} className='btn btn-outline btn-primary'>Sign In With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;