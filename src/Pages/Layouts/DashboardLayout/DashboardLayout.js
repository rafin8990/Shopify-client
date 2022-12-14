import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvaider/AuthProvider';
import Navbar from '../../Shered/Navbar/Navbar';
import useAdmin from '../../Shered/useAdmin/useAdmin';
import useSeller from '../../Shered/useSeller/useSeller';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 ">
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard/wishlist'>My Wishlist</Link></li>


                        {
                            (isSeller) && <>
                                <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                                <li><Link to='/dashboard/myproducts'>My Product</Link></li>
                            </>
                        }

                        {
                            isAdmin && <>

                                <li><Link to='/dashboard/allseller'>All Seller</Link></li>
                                <li><Link to='/dashboard/allbuyer'>All Buyer</Link></li>
                            </>
                        }


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;