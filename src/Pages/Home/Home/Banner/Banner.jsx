import { BsArrowRightShort } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import banner from '../../../../assets/img/bannerImg.png'
import './Banner.css'
import word from '../../../../assets/img/ani01.png'
import word2 from '../../../../assets/img/ani02.png'
import word3 from '../../../../assets/img/ani03.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='banner-font lg:px-16 md:px-12 sm:px-8 px-4 pt-8 bg-[#F1F5F8]'>
           <div className="grid lg:grid-cols-2 lg:gap-4 lg:space-y-0 space-y-2">
             <div className='lg:mt-28 mt-10'>
                <div className='flex items-center lg:items-start lg:justify-start justify-center'>
                <p className='bg-[#E7EFFC]  items-center inline-block lg:px-4 md:px-2 px-1 py-1 text-[#1363DF] font-medium'>100% Satisfaction Guarantee</p>
                </div>
                <h2 className='lg:text-[55px] text-center lg:text-left md:text-4xl text-2xl font-bold lg:leading-tight py-4 text-[#082A5E]'>Learn <span className='text-[#1363DF]'>Skills</span> From Our Top Instructors</h2>
                <p className='text-[#777777] lg:text-left text-center py-2'>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattisBorem ipsum dolor sit amet consectetur adipiscing area we followelit.
                </p>
                <div className="flex flex-wrap items-center lg:justify-normal justify-center py-6 lg:space-x-6 md:space-x-6 sm:space-x-4 space-x-0 lg:space-y-0 space-y-4">
                     <div className='flex items-center'>
                        <Link to='/coursesCon'>
                        <button className='flex items-center bg-[#1363DF] px-6 py-4 text-white rounded hover:bg-[#082A5E] duration-300 lg:text-base md:text-base text-[14px]'>EXPLORE COURSES <span className='text-2xl px-2'><BsArrowRightShort></BsArrowRightShort></span></button>
                        </Link>
                     </div>
                     <div className='flex items-center space-x-2'>
                        <p className='text-4xl text-[#1363DF]'><FiPhoneCall></FiPhoneCall></p>
                        <div>
                             <p className='text-[#5b5b5b]'>Have any Question?</p>
                             <h2>+8801646286477</h2>
                        </div>
                     </div>
                </div>
                <div className='absolute top-0 hidden lg:block'>
                    <div className='mt-40 ml-[-35px]'>
                    <img className='w-[50%]' src={word} alt="" />
                    </div>
                    <img className='w-[75%] top-[90vh] left-[90vh] absolute' src={word2} alt="" />
                    <img className='right-[-40vh] absolute w-[35%] top-[35vh]' src={word3} alt="" />
                </div>
             </div>
             <div className='text-center flex items-center justify-center'>
                <img src={banner} alt="" />
             </div>
           </div>
        </div>
    );
};

export default Banner;