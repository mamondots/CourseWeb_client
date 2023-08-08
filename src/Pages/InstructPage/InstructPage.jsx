
import { Link } from 'react-router-dom';
import bgImg from '../../assets/img/courses.jpg'
import bgImg2 from '../../assets/img/insruct01.jpg'
import bgImg3 from '../../assets/img/insruct02.jpg'
import { IoIosArrowForward } from 'react-icons/io';
import useInstructor from '../../Hooks/useInstructor';
import { BiShareAlt } from 'react-icons/bi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';
const InstructPage = () => {
    const [instructors] = useInstructor()
    return (
        <div>
            <div className='laryer'>
                <img src={bgImg} alt="" />
                <div className=' absolute bottom-[20%] left-10 text-white space-x-1 cursor-pointer'>
                <h2 className='lg:text-3xl md:text-2xl text-xl font-bold lg:py-8'>Top Class Instructors</h2>
                    <div className='flex items-center'>
                    <Link to='/'>
                        <p className='flex items-center hover:text-[#1363DF] duration-300 font-medium'>Home <span className='px-2'><IoIosArrowForward></IoIosArrowForward></span></p>
                    </Link>
                    <p className=''>Instructor</p>
                    </div>
                </div>
            </div>
            <div className='lg:px-16 md:px-12 sm:px-8 px-4 py-12 bg-[#F1F5F8]'>

                <div>
                <div className="grid lg:grid-cols-4 lg:gap-8 md:grid-cols-3 md:gap-6 sm:grid-cols-2 sm:gap-4 lg:space-y-0 md:space-y-0 sm:space-y-0 space-y-4" >
                    {
                      instructors.map((instructor,index) => <div key={index}>

                        <div className="py-12">
                            <div className="bg-[#1364de1a] rounded-tl-full">
                              <img src={instructor.image} alt="" />
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="py-2">
                                    <p className="text-[#2626268d]">{instructor.title}</p>
                                    <h2 className="text-xl font-medium text-[#082A5E]">{instructor.name}</h2>
                                </div>
                                <div className="pr-2 isicon relative">
                                     <div className="drage-Icon">
                                     <p className="text-xl px-2 py-2 rounded-full text-[#1363DE]  bg-[#1364de1a] hover:bg-[#1363DE] hover:text-white cursor-pointer duration-500"><BiShareAlt></BiShareAlt></p>
                                     </div>
                                     <div className="all-icon space-y-2 text-white">
                                            <div className="icon"><FaFacebookF></FaFacebookF></div>
                                            <div className="icon"><FaTwitter></FaTwitter></div>
                                            <div className="icon"><FaInstagram></FaInstagram></div>
                                            <div className="icon"><FaLinkedinIn></FaLinkedinIn></div>
                                     </div>
                                </div>
                            </div>
                        </div>

                      </div>)  
                    }
                </div>

                <div className='grid lg:grid-cols-2 lg:gap-8 relative lg:space-y-0 space-y-4'>
                    <div>
                        <img className='object-cover rounded w-full' src={bgImg2} alt="" />
                        <div className='px-10 absolute lg:top-[24%] md:top-[16] top-[8%]'>
                             <h2 className='text-white lg:text-3xl md:text-2xl text-xl font-bold lg:w-[40%]'>Best Instructors From Around The World</h2>
                             <Link to='/singup'>
                             <button className='bg-white px-6 py-3 rounded mt-4 flex items-center hover:bg-[#1363DF] hover:text-white duration-300'>REGESTER NOW  <span className='text-xl px-1'><BsArrowRightShort></BsArrowRightShort></span></button>
                             </Link>
                        </div>
                    </div>
                    <div className='relative'>
                    <img className='object-cover rounded w-full' src={bgImg3} alt="" />
                    <div className='px-10 absolute lg:top-[24%] md:top-[16] top-[10%]'>
                             <h2 className='text-white lg:text-3xl md:text-2xl text-xl font-bold lg:w-[58%]'>Get Unlimited Access To 6,000+ Of Courses</h2>
                             <Link to='/coursesCon'>
                             <button className='bg-white px-6 py-3 rounded mt-4 flex items-center hover:bg-[#1363DF] hover:text-white duration-300'>DISCOVER NOW  <span className='text-xl px-1'><BsArrowRightShort></BsArrowRightShort></span></button>
                             </Link>
                        </div>
                    </div>
                </div>

                </div>

            </div>
        </div>
    );
};

export default InstructPage;