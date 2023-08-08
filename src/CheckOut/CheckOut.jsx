import { AiOutlineCreditCard } from 'react-icons/ai';
import bgImg from '../assets/img/courses.jpg'
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const CheckOut = () => {
    return (
        <div>
            <div className='laryer'>
                <img src={bgImg} alt="" />
                <div className=' absolute bottom-[20%] left-10 text-white space-x-1 cursor-pointer'>
                    <h2 className='lg:text-3xl md:text-2xl text-xl font-bold lg:py-6'>CheckOut</h2>
                    <div className='flex items-center'>
                        <Link to='/'>
                            <p className='flex items-center hover:text-[#1363DF] duration-300 font-medium'>Home <span className='px-2'><IoIosArrowForward></IoIosArrowForward></span></p>
                        </Link>

                        <Link to='/shoppage'>
                            <p className='flex items-center hover:text-[#1363DF] duration-300 font-medium'>Products <span className='px-2'><IoIosArrowForward></IoIosArrowForward></span></p>
                        </Link>
                        <p className=''>Checkout</p>
                    </div>
                </div>
            </div>

            <div className='lg:px-16 md:px-12 sm:px-8 px-4 py-6 bg-[#ECECEC]'>
                <div className='flex items-center space-x-4 py-4 px-4 bg-[#a4c2f365] border-t-2 border-[#1363DF] cursor-pointer '>
                    <p className='text-xl text-[#1363DF]'><AiOutlineCreditCard></AiOutlineCreditCard></p>
                    <p>Have a coupon? <span className='text-[#1363DF] hover:text-[#ff000078] duration-300'>Click here to enter your code</span></p>
                </div>

                <div className='flex space-x-8 py-8'>
                    <div className='w-full'>
                        <h2 className='text-2xl font-medium py-4 border-b-2 border-[#2626260f]'>Billing details</h2>

                        <div>
                            <form className='flex flex-col space-y-4 py-8'>
                                <div className='flex space-x-3 w-full'>
                                    <div className='flex flex-col w-full'>
                                        <label className='py-2 text-[#262626a5]'>First Name</label>
                                        <input className='w-full py-2 px-4 border border-[#26262639] bg-transparent rounded outline-none' type="text" />
                                    </div>
                                    <div className='flex flex-col w-full'>
                                        <label className='py-2 text-[#262626a5]'>Last Name</label>
                                        <input className='w-full py-2 px-4 border border-[#26262639] bg-transparent rounded outline-none' type="text" />
                                    </div>
                                </div>


                                <div>
                                    <div className='flex flex-col'>
                                        <label className='py-2 text-[#262626a5]'>Company name (optional)</label>
                                        <input className='w-full py-2 px-4 border border-[#26262639] bg-transparent rounded outline-none' type="text" />
                                    </div>
                                </div>


                                <div>
                                    <div className='flex flex-col'>
                                        <label className='py-2 text-[#262626a5]'>Country / Region <span>*</span></label>
                                        <select className='w-full py-2 px-4 border border-[#26262639] bg-transparent rounded outline-none'>
                                            <option>Bangladesh</option>
                                            <option>India</option>
                                            <option>Japan</option>
                                            <option>London</option>
                                            <option>United States(UK)</option>
                                        </select>
                                    </div>
                                </div>


                                <div>
                                    <div className='flex flex-col'>
                                        <label className='py-2 text-[#262626a5]'>Street address <span>*</span></label>
                                        <input className='w-full py-2 px-4 border border-[#26262639] bg-transparent rounded outline-none' type="text" />
                                    </div>
                                </div>


                                <div>

                                    <div className='flex flex-col'>
                                        <label className='py-2 text-[#262626a5]'>Town / City  <span>*</span></label>
                                        <input className='w-full py-2 px-4 border border-[#26262639] bg-transparent rounded outline-none' type="text" />
                                    </div>

                                </div>


                                <div>
                                    <div className='flex flex-col'>
                                        <label className='py-2 text-[#262626a5]'>ZIP Code  <span>*</span></label>
                                        <input className='w-full py-2 px-4 border border-[#26262639] bg-transparent rounded outline-none' type="text" />
                                    </div>
                                </div>


                                <div>
                                    <div className='flex flex-col'>
                                        <label className='py-2 text-[#262626a5]'>Phone  <span>*</span></label>
                                        <input className='w-full py-2 px-4 border border-[#26262639] bg-transparent rounded outline-none' type="text" />
                                    </div>
                                </div>


                                <div>
                                    <div className='flex flex-col'>
                                        <label className='py-2 text-[#262626a5]'>Email  <span>*</span></label>
                                        <input className='w-full py-2 px-4 border border-[#26262639] bg-transparent rounded outline-none' type="email" />
                                    </div>
                                </div>


                            </form>
                        </div>
                    </div>
                    <div className='w-3/4'>
                        <h2 className='text-2xl font-medium py-4 border-b-2 border-[#2626260f]'>Your order</h2>

                        <div className='border mt-4 border-[#2626260f]'>
                            <div className='px-8 py-4 space-y-2'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-base font-medium text-[#082A5E]'>Product</p>
                                    <p className='text-base font-medium text-[#082A5E]'>Subtotal</p>
                                </div>
                                <div>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-[#262626af]'>A Million To One  × 1</p>
                                        <p className='text-[#262626af]'>$39.00</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-[#262626af]'>Book Cover Design  × 1</p>
                                        <p className='text-[#262626af]'>$36.00</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-base font-medium text-[#082A5E]'>Subtotal</p>
                                        <p className='text-[#262626af]'>	$75.00</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-base font-medium text-[#082A5E]'>Total</p>
                                        <p className='text-[#262626af]'>$75.00</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='bg-[#78a8f527] p-8 mt-6'>
                            <div className='flex  space-x-4 py-4 px-4 bg-[#fefefe] border-t-2 border-[#1363DF] cursor-pointer '>
                                <p className='text-xl text-[#1363DF]'><AiOutlineCreditCard></AiOutlineCreditCard></p>
                                <p className='text-[#262626b3]'>
                                Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements.
                                </p>
                            </div>
                            <div className='mt-4'>
                                 <p className='py-2 text-[#262626b3]'>
                                 Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                                 </p>
                                 <input className='w-full text-center py-2 bg-[#1363DF] text-white rounded mt-2 hover:bg-[#061E43] cursor-pointer duration-300' type="submit" value="PLACE ORDER" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;