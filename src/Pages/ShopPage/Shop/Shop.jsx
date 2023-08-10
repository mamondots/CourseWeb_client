import { Link } from 'react-router-dom';
import bgImg from '../../../assets/img/courses.jpg'
import { IoIosArrowForward } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import { AiOutlineAppstore,AiOutlineShoppingCart,AiFillHeart,AiFillEye } from 'react-icons/ai';
import useProducts from '../../../Hooks/useProducts';
import { Rating } from '@smastrom/react-rating'
import './Shop.css'

import '@smastrom/react-rating/style.css'

const Shop = () => {
   const [products] = useProducts()
   return (
      <div>
         <div className='laryer'>
            <img src={bgImg} alt="" />
            <div className=' absolute bottom-[20%] left-10 text-white space-x-1 cursor-pointer'>
               <h2 className='lg:text-3xl md:text-2xl text-xl font-bold lg:py-8'>Our Products</h2>
               <div className='flex items-center'>
                  <Link to='/'>
                     <p className='flex items-center hover:text-[#1363DF] duration-300 font-medium'>Home <span className='px-2'><IoIosArrowForward></IoIosArrowForward></span></p>
                  </Link>
                  <p className=''>Shop</p>
               </div>
            </div>
         </div>
         <div className='lg:px-16 md:px-12 sm:px-8 px-4 py-6 bg-[#F1F5F8]'>
            <div className='flex space-x-4'>
               <div className='w-1/3 cursor-pointer hidden lg:block'>
                  <div className='flex items-center space-x-2 border px-2 py-2 rounded'>
                     <p className='text-xl'><CiSearch></CiSearch></p>
                     <input className='bg-transparent outline-none w-full' type="search" placeholder='Search' />
                  </div>

                  <div className='border mt-4 px-6 py-4 rounded'>
                     <h2 className='text-xl font-medium py-2 under'>Product categories</h2>
                     <div className='py-4 space-y-2'>
                        <div className='flex items-center space-x-2'>
                           <input type="checkbox" name="" id="" />
                           <p>Art & Design</p>
                        </div>

                        <div className='flex items-center space-x-2'>
                           <input type="checkbox" name="" id="" />
                           <p>Uncategorized</p>
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
                           <p>$20-$60</p>
                        </div>

                        <div className='flex items-center space-x-2'>
                           <input type="checkbox" name="" id="" />
                           <p>$60-$80</p>
                        </div>
                     </div>

                  </div>

                  <div className='border mt-4 px-6 py-4 rounded'>
                     <h2 className='text-xl font-medium py-2 under'>Product tags</h2>
                     <div className='py-4 flex flex-wrap space-y-2 space-x-2'>
                        <p className='bg-[#E6F2FF] px-2 py-1 text-[#1363DF]'>Apps</p>
                        <p className='bg-[#E6F2FF] px-2 py-1 text-[#1363DF]'>Business</p>
                        <p className='bg-[#E6F2FF] px-2 py-1 text-[#1363DF]'>Cover</p>
                        <p className='bg-[#E6F2FF] px-2 py-1 text-[#1363DF]'>Development</p>
                        <p className='bg-[#E6F2FF] px-2 py-1 text-[#1363DF]'>Data-Science</p>
                        <p className='bg-[#E6F2FF] px-2 py-1 text-[#1363DF]'>LifeStyle</p>
                        <p className='bg-[#E6F2FF] px-2 py-1 text-[#1363DF]'>UI/UX</p>
                     </div>

                  </div>

               </div>


               <div className='w-full'>
                  <div className='flex lg:flex-row flex-col lg:space-y-0 space-y-4 items-center lg:justify-between justify-center px-2 lg:py-2 py-8'>
                     <div>
                        <h2 className='mt-[-10px]'>Showing all <span>{products.length}</span> results</h2>
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

                  <div className='grid lg:grid-cols-3 lg:gap-8 md:grid-cols-2 md:gap-4 lg:space-y-0 md:space-y-0 space-y-3'>
                     {
                        products.map((product, index) => <div key={index}>

                           <div className='border product-box'>
                          
                           <div>
                              <div>
                                 <img src={product.image} alt="" />
                              </div>
                              <div className='text-center flex items-center flex-col py-2'>
                                 <p className='text-xl font-medium text-[#1363DF]'>${product.price}</p>
                                 <h2 className='text-xl font-medium py-1'>{product.title}</h2>
                                 <p className='pb-2'>
                                    <Rating
                                       style={{ maxWidth: 80 }}
                                       value={product.rating}
                                       readOnly
                                    />
                                 </p>
                              </div>
                           </div>
                           
                              <div className='z-10 flex items-center justify-center text-[#1363DF] absolute top-[35%] left-[30%] space-x-2 products-icon text-lg'>
                                    <Link to={`/productDetails/${product._id}`}>
                                    <p><AiOutlineShoppingCart></AiOutlineShoppingCart></p>
                                    </Link>
                                    <p><AiFillHeart></AiFillHeart></p>
                                    <Link to={`/productDetails/${product._id}`}><p><AiFillEye></AiFillEye></p></Link>
                              </div>
                              
                           </div>
                           

                        </div>)
                     }
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Shop;