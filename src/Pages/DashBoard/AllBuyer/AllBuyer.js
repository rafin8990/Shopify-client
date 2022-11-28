import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';


const AllBuyer = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['Buyer'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users?role=Buyer', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    const handleDeleteUser = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
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
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i) => <tr key={user?._id}>
                                <th>{i + 1}</th>
                                <th>{user?.name}</th>
                                <td>{user?.email}</td>
                                <td><button onClick={() => handleDeleteUser(user?._id)} className='btn btn-sm'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;