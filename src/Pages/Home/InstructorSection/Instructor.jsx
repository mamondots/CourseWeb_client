import { BsArrowRightShort } from "react-icons/bs";
import useInstructor from "../../../Hooks/useInstructor";
import { BiShareAlt } from 'react-icons/bi';
import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn } from 'react-icons/fa';
import './Instructor.css'
import { Link } from "react-router-dom";

const Instructor = () => {
    const [instructors] = useInstructor()
    return (
        <div className='lg:px-16 md:px-12 sm:px-8 px-4 py-6 bg-[#ECECEC]'>
           <div className="lg:flex lg:justify-between lg:items-center">
                <div>
                    <div className='flex items-center lg:items-start lg:justify-start justify-center'>
                        <p className='bg-[#E7EFFC]  items-center inline-block lg:px-4 md:px-2 px-1 py-1 text-[#1363DF] font-medium'>Our Qualified People Matter</p>
                    </div>
                    <h2 className='lg:text-[40px] text-center lg:text-left md:text-4xl text-2xl font-bold lg:leading-tight py-4 text-[#082A5E]'>Top <span className="text-[#1363DE]">Class</span> Instructor</h2>
                </div>
                <div>
                    <div className='flex items-center justify-center lg:mt-0 mt-2'>
                        <Link to='/instructor'>
                        <button className='flex items-center px-4 py-3 border border-[#1363DF] rounded text-[#1363DF] hover:bg-[#1363DF] hover:text-white duration-300'>ALL INSTRUCTORS  <span className='text-2xl'><BsArrowRightShort></BsArrowRightShort></span></button>
                        </Link>
                    </div>
                </div>
            </div> 

                <div className="grid lg:grid-cols-4 lg:gap-8 md:grid-cols-3 md:gap-6 sm:grid-cols-2 sm:gap-4 lg:space-y-0 md:space-y-0 sm:space-y-0 space-y-4" >
                    {
                      instructors.slice(0,4).map((instructor,index) => <div key={index}>

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

        </div>
    );
};

export default Instructor;