import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Allseller = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch('https://shopify-server.vercel.app/users?role=Seller', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    const handleDeleteSeller= (id) => {
        fetch(`https://shopify-server.vercel.app/users/${id}`, {
            method: 'DElETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0){
                    toast.success('User deleted successfully')
                    refetch()
                }
        })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verify Now</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i) => <tr key={user?._id}>
                                <th>{i+1}</th>
                                <th>{user?.name}</th>
                                <td>{user?.email}</td>
                                <td><button className='btn btn-sm'>Verify Now</button></td>
                                {

                                }
                                <td><button onClick={()=>handleDeleteSeller(user?._id)} className='btn btn-sm'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allseller;