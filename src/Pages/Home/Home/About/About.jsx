import about from '../../../../assets/img/about01.png'
import about2 from '../../../../assets/img/about02.png'
import './About.css'
import icon from '../../../../assets/img/icon-1.png'
import icon2 from '../../../../assets/img/icon-2.png'
import icon3 from '../../../../assets/img/icon-3.png'
import icon4 from '../../../../assets/img/icon-4.png'
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='lg:px-16 md:px-12 sm:px-8 px-4 py-12 relative bg-[#ececec] banner-font'>
            <div className="grid lg:grid-cols-2 lg:gap-16 lg:space-y-0 space-y-6">
                <div className='flex items-center justify-center lg:ml-[-40px]'>
                    <div className='absolute bg-[#1363DF]  lg:top-20 lg:left-48 md:left-[20rem] sm:left-[32rem] left-10 top-20 p-5 md:top-16 sm:top-4  rounded text-center text-white'>
                        <h2 className='text-2xl font-bold'>12 +</h2>
                        <p className='text-base'>Years of <br />Experiences</p>
                    </div>
                    <img className='mt-5 hidden lg:block md:block relative left-10 top-12' src={about} alt="" />
                    <div className='flex items-center justify-center'>
                    <img src={about2} alt="" />
                    </div>
                </div>
                <div className=''>
                    <div className='flex items-center lg:items-start lg:justify-start justify-center'>
                    <p className='bg-[#E7EFFC]  items-center inline-block lg:px-4 md:px-2 px-1 py-1 text-[#1363DF] font-medium'>Get To Know About Us</p>
                    </div>
                    <h2 className='lg:text-[35px] text-center lg:text-left md:text-4xl text-2xl font-bold lg:leading-tight py-4 text-[#082A5E]'>Discover Top <span className='text-[#1363DF]'>Instructors</span> Around The World</h2>
                    <p className='text-[#6d6d6d]'>
                        Borem ipsum dolor sit amet, consectetur adipiscing eliawe awUt elit ellus, luctus nec ullamcorper mattisBorem ipsum dolor awes atnse awctetur adipis we followelit. Borem.
                    </p>
                    <div className='lg:grid md:grid sm:grid lg:grid-cols-2 md:grid-cols-2 md:gap-8 sm:grid-cols-2 sm:gap-8 lg:gap-8 mt-6 text-[#082A5E] flex flex-wrap gap-8 '>
                        <div className='flex items-center'>
                            <div>
                                <img className='w-[70%]' src={icon} alt="" />
                            </div>
                            <div>
                                <h2 className='font-medium'>20000</h2>
                                <p className='font-medium'>Expert Tutors</p>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <div>
                                <img className='w-[70%]' src={icon2} alt="" />
                            </div>
                            <div className='ml-[-12px]'>
                                <h2 className='font-medium'>18000</h2>
                                <p className='font-medium'>Over Students</p>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <div>
                                <img className='w-[70%]' src={icon3} alt="" />
                            </div>
                            <div>
                                <h2 className='font-medium'>1500</h2>
                                <p className='font-medium'>Top Lessons</p>
                            </div>
                        </div>

                        <div className='flex items-center ml-2'>
                            <div>
                                <img className='w-[70%]' src={icon4} alt="" />
                            </div>
                            <div>
                                <h2 className='font-medium'>32000</h2>
                                <p className='font-medium'>Pro Videos</p>
                            </div>
                        </div>
                    </div>
                   <Link to='/instructor'>
                   <button className='flex items-center mt-6 bg-[#1363DF] px-4 py-4 text-white rounded hover:bg-[#082A5E] duration-300 lg:text-base md:text-base text-[14px]'>DISCOVER MORE <span className='text-2xl px-0'><BsArrowRightShort></BsArrowRightShort></span></button>
                   </Link>
                </div>
            </div>

        </div>
    );
};

export default About;