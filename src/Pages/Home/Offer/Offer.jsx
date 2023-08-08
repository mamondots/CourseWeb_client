import { BsArrowRightShort } from 'react-icons/bs';
import './Offer.css'
import { Link } from 'react-router-dom';

const Offer = () => {
    return (
        <div className='py-12 bg-[#ECECEC]'>
            <div className='fixedBg bg-fixed  bg-[#ECECEC]'>
                 <div className='flex justify-center items-center flex-col text-white z-10 relative top-[30%] text-center'>
                      <p className='text-base py-2'>ARE YOU READY FOR THIS OFFER</p>
                      <h2 className='lg:text-4xl md:text-3xl text-2xl font-bold py-1'>50% Offer For Very First 50</h2>
                      <p className='text-xl font-medium py-1'>Student’s & Mentors</p>
                     <div className='py-4'>
                     <Link to='/singup'>
                     <button className='flex items-center px-4 py-3 border border-[#1363DF] bg-[#1363DF] hover:bg-[#061E43]  rounded  text-white duration-300'>BECOME A STUDENT <span className='text-2xl'><BsArrowRightShort></BsArrowRightShort></span></button>
                     </Link>
                     </div>
                 </div>
            </div>
        </div>
    );
};

export default Offer;