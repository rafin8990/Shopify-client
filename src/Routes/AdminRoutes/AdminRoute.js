import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Pages/Context/AuthProvaider/AuthProvider';
import Loading from '../../Pages/Shered/Spinner/Loading';
import useAdmin from '../../Pages/Shered/useAdmin/useAdmin';

const AdminRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext)
    const [isAdmin, isAdminLoader]=useAdmin(user?.email)
    const location=useLocation()
    if(loading || isAdminLoader){
        return <Loading></Loading>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/login'state={{from:location}} replace ></Navigate>
};

export default AdminRoute;