import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#061E43] py-16 lg:px-16 md:px-12 sm:px-8 px-4'>
            <div className="text-white grid lg:grid-cols-3 lg:gap-18 md:grid-cols-2 md:gap-8">
                 <div>
                    <h2 className='text-xl font-medium py-2'>MamonDots</h2>
                    <p className='text-[#ffffff73]'>
                    when an unknown printer took galley of type and scrambled it to make pspecimen bookt has.
                    </p>
                    <p className='py-2'>Road-02,Block-C,Dhaka</p>
                    <p>+8801646286477</p>
                    <div className='flex items-center space-x-2 py-2 cursor-pointer'>
                        <p className='hover:text-[#1363DF] duration-300'><FaFacebookF></FaFacebookF></p>
                        <p className='hover:text-[#1363DF] duration-300'><FaTwitter></FaTwitter></p>
                        <p className='hover:text-[#1363DF] duration-300'><FaInstagram></FaInstagram></p>
                        <p className='hover:text-[#1363DF] duration-300'><FaLinkedinIn></FaLinkedinIn></p>
                    </div>
                 </div>
                 <div className='flex lg:space-x-4 lg:gap-0 gap-12 lg:justify-around'>
                    <div>
                    <h2 className='text-xl font-medium py-2'>Resources</h2>
                    <ul className='space-y-2 text-[#ffffff73]'>
                        <li className='hover:text-[#1363DF] duration-300'><a href="">About</a></li>
                        <li className='hover:text-[#1363DF] duration-300'><a href="">Contact</a></li>
                        <li className='hover:text-[#1363DF] duration-300'><a href="">Help Center</a></li>
                        <li className='hover:text-[#1363DF] duration-300'><a href="">Refund</a></li>
                        <li className='hover:text-[#1363DF] duration-300'><a href="">Conditions</a></li>
                        <li className='hover:text-[#1363DF] duration-300'><a href="">Privacy Policy</a></li>
                    </ul>
                    </div>
                    <div>
                 <h2 className='text-xl font-medium py-2'>Courses</h2>
                    <ul className='space-y-2 text-[#ffffff73]'>
                        <li className='hover:text-[#1363DF] duration-300'><a href="">Life Coach</a></li>
                        <li className='hover:text-[#1363DF] duration-300'><a href="">Business Coach</a></li>
                        <li className='hover:text-[#1363DF] duration-300'><a href="">Health Coach</a></li>
                        <li className='hover:text-[#1363DF] duration-300'><a href="">Development</a></li>
                        <li className='hover:text-[#1363DF] duration-300'><a href="">Web Design</a></li>
                        <li className='hover:text-[#1363DF] duration-300'><a href="">SEO Optimize</a></li>
                    </ul>
                 </div>
                 </div>
                 
                 <div className='lg:mt-0 mt-4'>
                    <h2 className='text-xl font-medium py-2 lg:ml-10'>Working Hours</h2>
                    <div className='space-y-2 lg:ml-0 ml-[-30px]'>
                         <div className='flex items-center justify-between mx-10 text-[#ffffff73] border-b-[1px] py-3 border-[#ffffff39]'>
                              <p className='text-white'>Mon - Fri</p>
                              <p>8:00 AM - 5:00 PM</p>
                         </div>

                         <div className='flex items-center justify-between mx-10 text-[#ffffff73] border-b-[1px] py-3 border-[#ffffff39]'>
                              <p className='text-white'>Mon - Fri</p>
                              <p>6:00 AM - 8:00 PM</p>
                         </div>

                         <div className='flex items-center justify-between mx-10 text-[#ffffff73] py-3'>
                              <p className='text-white'>Mon - Fri</p>
                              <p>9:00 AM - 10:00 PM</p>
                         </div>

                    </div>
                 </div>
            </div>
        </div>
    );
};

export default Footer;