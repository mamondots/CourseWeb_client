import { BsArrowRightShort } from "react-icons/bs";
import img01 from '../../../../assets/img/cta_shape01.svg'
import img02 from '../../../../assets/img/cta_shape02.svg'
import { Link } from "react-router-dom";

const ShortForm = () => {
    return (
        <div className='lg:px-16 md:px-12 sm:px-8 px-4 py-6 bg-[#ECECEC] relative'>
            <div className="bg-[#1363DF] py-16 rounded overflow-hidden relative">
                 <div className="flex items-center justify-between flex-wrap px-12 text-white overflow-hidden lg:space-y-0 md:space-y-2 space-y-4">
                     <h2 className="text-2xl font-bold  lg:w-[20%]">Join Us & Spread Experiences</h2>
                     <p className="lg:w-[50%]">Borem ipsum dolor sit amet, consectetur adipiscing eliawe awUt elit ellus, luctus nec ullamcorper mattisBorem</p>
                     <Link to='/singup'>
                     <button className='flex items-center bg-white text-[#082A5E] py-3 px-4 rounded cursor-pointer hover:text-[#1363DF] duration-300'>BECOME INSTRUCTORS  <span className='text-2xl'><BsArrowRightShort></BsArrowRightShort></span></button>
                     </Link>
                 </div>
                 <div className="overflow-hidden">
                        <img className="top-[-30px] left-10 overflow-hidden absolute" src={img01} alt="" />
                        <img className="bottom-[-60px] right-[-20px] rotate-45  overflow-hidden absolute" src={img02} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ShortForm;