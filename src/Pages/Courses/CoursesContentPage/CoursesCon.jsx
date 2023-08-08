import { Link } from 'react-router-dom';
import bgImg from '../../../assets/img/courses.jpg'
import './CoursesCon.css'
import { IoIosArrowForward } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import { AiOutlineAppstore } from 'react-icons/ai';
import UseCourses from '../../../Hooks/UseCourses';
import CursesCard from '../../Home/CoursesSection/CursesCard/CursesCard';

const CoursesCon = () => {
    const [courses]=UseCourses()
    return (
        <div>
            <div className='laryer'>
                <img src={bgImg} alt="" />
                <div className='flex items-center absolute bottom-[20%] left-10 text-white space-x-1 cursor-pointer'>
                    <Link to='/'>
                        <p className='flex items-center hover:text-[#1363DF] duration-300 font-medium'>Home <span className='px-2'><IoIosArrowForward></IoIosArrowForward></span></p>
                    </Link>
                    <p className=''>Courses</p>
                </div>
            </div>
            <div className='lg:px-16 md:px-12 sm:px-8 px-4 py-20 bg-[#F1F5F8]'>

                <div className='flex space-x-4'>
                    <div className='w-1/3 cursor-pointer hidden lg:block'>
                        <div className='flex items-center space-x-2 border px-2 py-2 rounded'>
                            <p className='text-xl'><CiSearch></CiSearch></p>
                            <input className='bg-transparent outline-none w-full' type="search" placeholder='Search' />
                        </div>

                        <div className='border mt-4 px-6 py-4 rounded'>
                            <h2 className='text-xl font-medium py-2 under'>Faculties</h2>
                            <div className='py-4 space-y-2'>
                            <div className='flex items-center space-x-2'>
                               <input type="checkbox" name="" id="" />
                               <p>Business</p>
                            </div>

                            <div className='flex items-center space-x-2'>
                               <input type="checkbox" name="" id="" />
                               <p>Design</p>
                            </div>

                            <div className='flex items-center space-x-2'>
                               <input type="checkbox" name="" id="" />
                               <p>Development</p>
                            </div>

                            <div className='flex items-center space-x-2'>
                               <input type="checkbox" name="" id="" />
                               <p>Health & Fitness</p>
                            </div>

                            <div className='flex items-center space-x-2'>
                               <input type="checkbox" name="" id="" />
                               <p>Marketing</p>
                            </div>
                            </div>

                        </div>

                        <div className='border mt-4 px-6 py-4 rounded'>
                            <h2 className='text-xl font-medium py-2 under'>Departments</h2>
                            <div className='py-4 space-y-2'>
                            <div className='flex items-center space-x-2'>
                               <input type="checkbox" name="" id="" />
                               <p>Finace</p>
                            </div>

                            <div className='flex items-center space-x-2'>
                               <input type="checkbox" name="" id="" />
                               <p>Project Management</p>
                            </div>

                            <div className='flex items-center space-x-2'>
                               <input type="checkbox" name="" id="" />
                               <p>Sales</p>
                            </div>

                            <div className='flex items-center space-x-2'>
                               <input type="checkbox" name="" id="" />
                               <p>Graphic Design</p>
                            </div>

                            <div className='flex items-center space-x-2'>
                               <input type="checkbox" name="" id="" />
                               <p>UI/UX Design</p>
                            </div>

                            <div className='flex items-center space-x-2'>
                               <input type="checkbox" name="" id="" />
                               <p>3D & Animation</p>
                            </div>

                            <div className='flex items-center space-x-2'>
                               <input type="checkbox" name="" id="" />
                               <p>Javascript</p>
                            </div>

                            <div className='flex items-center space-x-2'>
                               <input type="checkbox" name="" id="" />
                               <p>PHP</p>
                            </div>

                            <div className='flex items-center space-x-2'>
                               <input type="checkbox" name="" id="" />
                               <p>Wordpress</p>
                            </div>
                            </div>

                        </div>

                        <div className='border mt-4 px-6 py-4 rounded'>
                            <h2 className='text-xl font-medium py-2 under'>Prices</h2>
                            <div className='py-4 space-y-2'>
                            <div className='flex items-center space-x-2'>
                               <input type="checkbox" name="" id="" />
                               <p>Free</p>
                            </div>

                            <div className='flex items-center space-x-2'>
                               <input type="checkbox" name="" id="" />
                               <p>Paid</p>
                            </div>
                            </div>

                        </div>

                        <div className='border mt-4 px-6 py-4 rounded'>
                            <h2 className='text-xl font-medium py-2 under'>Levels</h2>
                            <div className='py-4 space-y-2'>
                            <div className='flex items-center space-x-2'>
                               <input type="checkbox" name="" id="" />
                               <p>All Levels</p>
                            </div>

                            <div className='flex items-center space-x-2'>
                               <input type="checkbox" name="" id="" />
                               <p>Beginner</p>
                            </div>

                            <div className='flex items-center space-x-2'>
                               <input type="checkbox" name="" id="" />
                               <p>Intermediate</p>
                            </div>

                            <div className='flex items-center space-x-2'>
                               <input type="checkbox" name="" id="" />
                               <p>Expert</p>
                            </div>
                            </div>

                        </div>

                    </div>
                    <div className='w-full'>
                        <div className='flex lg:flex-row flex-col lg:space-y-0 space-y-4 items-center lg:justify-between justify-center px-2 lg:py-2 py-8'>
                            <div>
                            <h2 className='mt-[-10px]'>Showing all 11 results</h2>
                            </div>
                            <div className='flex items-center space-x-4 cursor-pointer'>
                               <div className='px-2 py-2 border rounded text-[#262626a7]'>
                                <select className='outline-none bg-transparent'>
                                     <option>Newest</option>
                                     <option>Oldest</option>
                                     <option>Price Low to High</option>
                                     <option>Price High to Low</option>
                                     <option>Courses (A-Z)</option>
                                </select>
                               </div>
                               <div className='text-2xl text-white bg-[#1363DF] py-2 px-2 rounded'>
                                <AiOutlineAppstore></AiOutlineAppstore>
                                </div> 
                            </div>
                        </div>

                        <div className='mt-0'>
                 <div className='grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 lg:gap-6 lg:space-y-0 md:space-y-0 space-y-4'>
                     {
                       courses.map((course,index) => <CursesCard key={index} course={course}></CursesCard>)
                     }
                 </div>
            </div>
                    </div>
                </div>

            </div>

            
        </div>
    );
};

export default CoursesCon;