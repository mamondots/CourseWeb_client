import React, { useContext } from 'react';
import { BsArrowBarRight } from 'react-icons/bs';
import { MdManageAccounts, MdManageSearch, MdOutlineSettings } from 'react-icons/md';
import { AiOutlineHome,AiOutlineFileAdd } from 'react-icons/ai';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

import userImg from '../../../assets/img/userImg.jpg'

const AdminDasboard = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden absolute left-0">Open drawer</label>

                </div>
                <div className="drawer-side">
                    
                    <ul className="p-4 lg:w-80 md:w-40 h-full cursor-pointer bg-[#1363DF] px-16 text-white space-y-2">
                        {/*admin info*/}
                        <div className='flex flex-col items-center justify-center py-4'>
                            {
                                user ?.photoURL ?
                                <>
                                   <img className='rounded-full w-18 h-18' src={user.photoURL} alt="" />
                                </>
                                :
                                <>
                                  <img className='rounded-full w-10 h-10' src={userImg} alt="" />
                                </>
                            }
                         <div className='py-4 text-center text-[#ffffffaf]'>
                         <h2>{user?.displayName}</h2>
                         <p>{user?.email}</p>
                         </div>
                         </div>
                        {/* Sidebar content here */}
                        <li className=''>
                        <NavLink to='/dasboard'>
                        <a className='flex items-center text-base font-medium '><AiOutlineHome></AiOutlineHome><span className='px-2'>Admin Home</span></a>
                        </NavLink>
                        </li>

                        <li>
                          <NavLink to='/dasboard/addcourses'>
                          <a className='flex items-center text-base font-medium'><AiOutlineFileAdd></AiOutlineFileAdd><span className='px-2'>Add Courses</span></a>    
                        </NavLink>  
                        </li>

                        <li>
                            <NavLink to='/dasboard/managecourses'>
                            <a className='flex items-center text-base font-medium'><MdManageSearch></MdManageSearch><span className='px-2'>Manage Courses</span></a>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/dasboard/addproduct'>
                            <a className='flex items-center text-base font-medium'><AiOutlineFileAdd></AiOutlineFileAdd><span className='px-2'>Add Products</span></a>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/dasboard/manageproduct'>
                            <a className='flex items-center text-base font-medium'><MdManageSearch></MdManageSearch><span className='px-2'>Manage Products</span></a>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/dasboard/manageuser'>
                            <a className='flex items-center text-base font-medium'><MdManageAccounts></MdManageAccounts><span className='px-2'>Manage User</span></a>
                            </NavLink>
                        </li>

                       <div className='pt-20 space-y-2'>
                           
                       <li>
                            <NavLink to='/'>
                            <a className='flex items-center text-base font-medium'><AiOutlineHome></AiOutlineHome><span className='px-2'>Home</span></a>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>
                            <a className='flex items-center text-base font-medium'><MdOutlineSettings></MdOutlineSettings><span className='px-2'>Profile Setting</span></a>
                            </NavLink>
                        </li>

                       </div>
                        <label htmlFor="my-drawer-2" className="lg:hidden ml-40 relative  mt-12"><BsArrowBarRight></BsArrowBarRight></label>
                    </ul>

                    
                    
                </div>
            </div>
        </div>
    );
};

export default AdminDasboard;