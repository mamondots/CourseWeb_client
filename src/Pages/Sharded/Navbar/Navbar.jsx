import './Navbar.css'
import logo from '../../../assets/img/logo2.png'
import { FiSearch } from 'react-icons/fi';
import { BsBag } from 'react-icons/bs';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import useImg from '../../../assets/img/userImg.jpg'
const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(result => {
                const user = result.use
                console.log(user)
            })
    }

    return (

        <Headroom>
            <div className='lg:px-16 md:px-12 sm:px-8 px-4 py-6 bg-[#F1F5F8] fontStyle'>
                <div className='flex items-center justify-between'>
                    <div className='bg-[#262626] lg:w-[15%] md:w-[20%] sm:w-[20%] w-[50%]'>
                        <Link to='/'>
                            <img className=' w-[100%] bg-red-600' src={logo} alt="" />
                        </Link>
                    </div>
                    <div className='hidden lg:block'>
                        <ul className='flex items-center space-x-4 font-medium nav'>
                            <li><Link to='/'><a href="">Home</a></Link></li>
                            <li><Link to='/coursesCon'><a href="">Courses</a></Link></li>
                            <li><Link to='/instructor'><a href="">Instructor</a></Link></li>
                            <li><Link to='/shoppage'><a href="">Shop</a></Link></li>
                            <li><Link to='/blogcon'><a href="">Blogs</a></Link></li>
                        </ul>
                    </div>
                    <div>
                        <div className='flex items-center space-x-1'>

                            <div className='border hidden lg:block border-[#999999] px-4 py-2 rounded text-[#999999]'>
                                <form className='flex items-center'>
                                    <input type="text" name="" className='outline-none bg-[#F1F5F8]' placeholder='Search For Courses' />
                                    <p className='text-xl cursor-pointer hover:text-[#1363DF] duration-300'><FiSearch></FiSearch></p>
                                </form>
                            </div>
                            <div>
                                <p className='text-xl cursor-pointer px-4'><BsBag></BsBag></p>
                            </div>
                            <div className='relative mainto'>
                                <div className='hidden lg:block cursor-pointer'>
                                    {
                                        user ?
                                            <>
                                                <div className='das'>
                                                    <div>
                                                    {
                                                        user?.photoURL ?
                                                            <>
                                                                <img className='rounded-full w-8 h-8' src={user.photoURL} alt="" />
                                                            </>
                                                            :
                                                            <>
                                                                <img className='rounded-full w-8 h-8' src={useImg} alt="" />
                                                            </>
                                                    }
                                                    </div>
                                                            <div className='bg-[#1363DF] text-white hover:bg-[#061E43] duration-300 cursor-pointer px-4 py-2 absolute left-[-6vh] mt-2 board rounded'>
                                                                <h2 onClick={handleLogout} className='py-2 hover:text-[#ff00009d] duration-300'>Logout</h2>
                                                               <Link to='/dasboard'>
                                                               <h2 className='pb-1 hover:text-[#ff00009d] duration-300'>Dasboard</h2>
                                                               </Link>
                                                            </div>
                                                </div>
                                            </>
                                            :
                                            <>
                                                <Link to='/login'>
                                                    <button className='border border-[#999999] px-6 py-2 text-[#999999] font-medium hover:bg-[#082A5E] hover:text-white duration-300'>Log In</button>
                                                </Link>
                                            </>
                                    }


                                </div>

                                <div className='lg:hidden'>
                                    <p className='text-2xl font-bold px-2 py-2 border hover:text-[#1363DF]'>
                                        <HiOutlineMenuAlt2></HiOutlineMenuAlt2>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Headroom>
    );
};

export default Navbar;