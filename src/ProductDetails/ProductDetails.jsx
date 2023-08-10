import { IoIosArrowForward } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import bgImg from '../assets/img/courses.jpg'
import { useEffect, useState } from "react";
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'
import useProducts from "../Hooks/useProducts";
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`https://eduvalt-server-site.vercel.app/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])

    const [toggle, setToggle] = useState(1)
    const toggleTab = (index) => {
        setToggle(index)
    }

    const [products] = useProducts()

    return (
        <div>
            <div className='laryer'>
                <img src={bgImg} alt="" />
                <div className=' absolute bottom-[20%] left-10 text-white space-x-1 cursor-pointer'>
                    <h2 className='lg:text-3xl md:text-2xl text-xl font-bold lg:py-6'>Details Of This Product</h2>
                    <div className='flex items-center'>
                        <Link to='/'>
                            <p className='flex items-center hover:text-[#1363DF] duration-300 font-medium'>Home <span className='px-2'><IoIosArrowForward></IoIosArrowForward></span></p>
                        </Link>

                        <Link to='/shoppage'>
                            <p className='flex items-center hover:text-[#1363DF] duration-300 font-medium'>Products <span className='px-2'><IoIosArrowForward></IoIosArrowForward></span></p>
                        </Link>
                        <p className=''>Details</p>
                    </div>
                </div>
            </div>

            <div className='lg:px-16 md:px-12 sm:px-8 px-4 py-6 bg-[#ECECEC]'>
                <div className="grid lg:grid-cols-2 lg:gap-16  py-8">
                    <div>
                        <div className="bg-[#07070722]">
                            <img src={product.image} alt="" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-medium text-[#082A5E]">{product.title}</h2>
                        <p className="flex items-center space-x-2 py-2 text-lg text-[#26262689] font-normal">
                            <Rating
                                style={{ maxWidth: 80 }}
                                value={product.rating}
                                readOnly
                            />
                           ( {product.rating} out of 5)
                        </p>
                        <p className="text-2xl font-medium text-[#1363DF] py-2">${product.price}</p>
                        <p className="text-[#262626a9]">{product.description}</p>

                        

                        <div className="flex items-center space-x-4 py-12 border-b-2 border-[#26262621]">
                             <div className="flex items-center cursor-pointer">
                                <p className="px-2 py-1  border border-[#26262685] text-xl">+</p>
                                <p className="px-4 py-1 border border-[#26262685] mx-1 text-xl">1</p>
                                <p className="px-2 py-1  border border-[#26262685] text-xl">-</p>
                             </div>
                             <div>
                                <Link to='/checkout'>
                                <button className="px-4 py-2 text-[14px] rounded bg-[#1363DF] text-white hover:bg-[#061E43] duration-300">BUY NOW</button>
                                </Link>
                             </div>
                        </div>

                        <div className="py-8">
                            <div className="py-2">
                                 <h2>Categories : <span className="text-[#262626a9]">{product.category}</span></h2>
                            </div>
                            <div>
                                 <h2>Tags : <span className="text-[#262626a9]">Apps, Finance</span></h2>
                            </div>
                        </div>

                        <div>
                             <h2 className="font-medium">About the Writer</h2>
                             <p className="text-[#262626a9] py-2">
                             Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur Vesti at bulum.
                             </p>
                        </div>

                    </div>
                </div>

                <div>
                     

                <div className="container py-12">
            <div className="block-tabs lg:flex  lg:space-x-6 cursor-pointer text-base font-medium ">
                <div
                    onClick={() => toggleTab(1)}
                    className={toggle === 1 ? "tabs active-tabs" : "tabs"}>Description
                </div>

                <div
                    onClick={() => toggleTab(2)}
                    className={toggle === 2 ? "tabs active-tabs" : "tabs"}>Reviews (0)
                </div> 
            </div>
            <div className="contents-tabs mt-6">
                <div className={toggle === 1 ? "content active-content" : "content"}>
                    <p className="text-[#26262691]">
                    Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio aea the dumm summ ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit. y to follow tutorials, Exercises, and solutions. This course does start from the beginning with very little knowledge and gives a great overview of common tools used for data science and progresses into more.
                    </p>
                </div>

                <div className={toggle === 2 ? "content active-content" : "content"}>
                    <h2 className='font-medium text-xl'>Reviews</h2>
                    <p className="py-2 text-[#2626267e]">There are no reviews yet.</p>
                    <h2 className="py-4 text-[#262626b6]">Be The First To Review “{products.title}”</h2>

                    <div>
                        <p className="py-8 text-[#262626b6]">Your email address will not be published. Required fields are marked *</p>
                         <form className="flex flex-col space-y-4">
                              <input className="py-2 px-4 rounded outline-none bg-[#F0F6FC] border-[#26262622] border" type="text" placeholder="Your Name*" />
                              <input className="py-2 px-4 rounded outline-none bg-[#F0F6FC] border-[#26262622] border" type="email" placeholder="Your Email*" />
                              <textarea className="py-2 px-4 rounded outline-none bg-[#F0F6FC] border-[#26262622] border" name="" placeholder="Your Review" cols="30" rows="10"></textarea>
                              <input className="bg-[#1363DF] text-white py-2 px-4 rounded items-start hover:bg-[#061E43] duration-300 cursor-pointer" type="submit" value="SUBMIT REVIEW" />
                         </form>
                    </div>
                    
                </div>
            </div>
                 </div>


                </div>

                <div className="py-12">
                    <h2 className="text-3xl font-bold py-4">Related Products</h2>
                <div className='grid lg:grid-cols-3 lg:gap-8 md:grid-cols-2 md:gap-4 lg:space-y-0 md:space-y-0 space-y-3'>
                     {
                        products.slice(0,3).map((product, index) => <div key={index}>

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
                                    <p><AiOutlineShoppingCart></AiOutlineShoppingCart></p>
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
    );
};

export default ProductDetails;