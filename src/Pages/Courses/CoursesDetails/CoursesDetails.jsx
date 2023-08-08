import { useEffect, useState } from 'react';
import './CoursesDetails.css'
import { Link, useParams } from 'react-router-dom';
import userImg from '../../../assets/img/userImg.jpg'

import { PiNotebookBold } from 'react-icons/pi';
import { BiTime } from 'react-icons/bi';
import { FiBarChart } from 'react-icons/fi';
import { RiGraduationCapLine } from 'react-icons/ri';
import { AiOutlineUsergroupDelete } from 'react-icons/ai';
import { TbReload } from 'react-icons/tb';
import { BiStopwatch } from 'react-icons/bi';
import { Rating } from '@smastrom/react-rating'

import video from '../../../assets/video/code.mp4'
import CoursesTab from '../CoursesTab/CoursesTab';

const CoursesDetails = () => {
    const { id } = useParams()
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/courses/${id}`)
            .then(res => res.json())
            .then(data => {
                setCourses(data)
            })
    }, [])
    return (
        <div className=''>
            <div className='lg:px-16 md:px-12 sm:px-8 px-4 py-12 bg-[#041734]'>
                <div className='text-white'>
                    <p className='bg-[#04BC53] py-1 px-4 rounded-2xl inline-block'>{courses.category}</p>
                    <h2 className='lg:text-3xl md:text-3xl text-2xl  font-semibold pt-4'>{courses.title}</h2>
                    <p className='py-2 text-[#a1a1a1]'>{courses.subtitle}</p>
                    <div className='flex flex-wrap gap-4 lg:gap-0 items-center space-x-4 text-[#acabab] py-4'>
                         <div className='flex lg:w-[10%] md:w-[10%] sm:w-[12%] w-[18%] items-center space-x-2'>
                         <img className='w-[30%] rounded-full' src={userImg} alt="" />
                         <p>mamon</p>
                         </div>
                         <p className='flex items-center'><PiNotebookBold></PiNotebookBold><span className='px-1'>{courses.book}</span></p>
                         <div className='flex'>
                            <p className='flex items-center'><BiTime></BiTime><span className='px-1'>{courses.hours}h</span></p>
                            <p className='px-1'>{courses.minutes}m</p>
                         </div>
                         <p className='flex items-center'><AiOutlineUsergroupDelete></AiOutlineUsergroupDelete>{courses.enroll}</p>
                         <div className='flex items-center space-x-2'>
                         <p><Rating
                            style={{ maxWidth: 90 }}
                            value={courses.rating}
                            readOnly
                        /></p>
                         <p>({courses.rating})</p>
                         </div>
                    </div>
                </div>
            </div>

            <div className='lg:px-16 md:px-12 sm:px-8 px-4 py-12 bg-[#F1F5F8]'>
                <div className='flex lg:gap-8'>
                    <div className='w-full'>
                        <div className='border-[#2a37c122] border-8'>
                             <video controls muted src={video}></video>
                        </div>

                        <div>
                            <CoursesTab></CoursesTab>
                        </div>

                    </div>
                    <div className='w-1/3 relative top-[-42vh]'>
                        <div className='border bg-[#F1F5F8] rounded'>
                                <div className='border-b-2 text-center py-8'>
                                <p className='text-2xl font-semibold text-[#39557E]'>${courses.price}</p>
                                <Link to='/checkout'>
                                <button className='px-4 py-2 text-white text-base rounded mt-2 bg-[#1363DF] hover:bg-[#041734] duration-300'>Enroll Now</button>
                                </Link>
                                <p className='py-3 text-[#26262687]'>Paid access this course</p>
                                </div>
                                <div className='py-10 px-4 space-y-4 text-[#26262687]'>
                                     <p className='flex items-center'><FiBarChart></FiBarChart><span className='px-2'>All Levels</span></p>
                                     <p className='flex items-center '><RiGraduationCapLine></RiGraduationCapLine><span span className='px-2'>7 Total Enrolled</span></p>
                                     <p className='flex items-center'><RiGraduationCapLine></RiGraduationCapLine><span span className='px-2'>English</span></p>
                                     <p className='flex items-center'><BiStopwatch></BiStopwatch><span span className='px-2'>12 hours 30 minutes</span></p>
                                     <p className='flex items-center'><TbReload></TbReload><span span className='px-2'>July 20, 2023 Last Updated</span></p>
                                     
                                </div>
                        </div>

                        <div className='border mt-4  py-8 text-[#26262676]'>
                                <div className='border-b-2 px-4 pb-4'>
                                     <h2 className='text-xl font-bold text-[#082A5E]'>A course by</h2>
                                     <div className='flex items-center space-x-3 py-4'>
                                        <img className='w-[18%]' src={userImg} alt="" />
                                        <p>mamon</p>
                                     </div>
                                </div>

                                <div className='px-4 py-8'>
                                     <h2 className='font-bold py-2 text-[#082A5E] text-xl'>Audience</h2>
                                     <p>Anyone wanting to learn the truth about dieting & meal planning</p>
                                     <p className='py-2'>Anyone with an open mind towards dieting</p>

                                     <h2 className='font-bold py-2 text-[#082A5E] text-xl'>Material Includes</h2>
                                     <p>4 hours on-demand video</p>
                                     <p>4 articles</p>
                                     <p>3 downloadable resources</p>
                                     <p>Full lifetime access</p>
                                     <p>Access on mobile and TV</p>
                                     <p>Certificate of Completion</p>

                                     <h2 className='font-bold py-2 text-[#082A5E] text-xl'>Requirements</h2>
                                     <p>No prior health knowledge is required or assumed</p>
                                     <p>A digital food scale will help but is not required</p>

                                     <div className='cursor-pointer space-y-3 mt-2'> 
                                         <h2 className='font-bold py-1 text-[#082A5E] text-xl'>Resources</h2>
                                         <p className='bg-[#1365df25] text-[#1363DF] hover:bg-[#1363DF] hover:text-white duration-300 inline-block px-2 py-1 rounded'>Adobe Photoshop</p>
                                         <p className='bg-[#1365df25] text-[#1363DF] hover:bg-[#1363DF] hover:text-white duration-300 inline-block px-2 py-1 rounded'>App Development</p>
                                         <p className='bg-[#1365df25] text-[#1363DF] hover:bg-[#1363DF] hover:text-white duration-300 inline-block px-2 py-1 rounded'>Heath & Fitness</p>
                                     </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesDetails;