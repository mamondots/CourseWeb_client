import { IoIosArrowForward } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { BiSearchAlt, BiTime } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import bgImg from '../../assets/img/courses.jpg'
import { useEffect, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";

const BlogDetailsPage = () => {

    const { id } = useParams()
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch(`https://eduvalt-server-site.vercel.app/blogs/${id}`)
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, [])

    return (
        <div>
            <div className='laryer'>
                <img src={bgImg} alt="" />
                <div className=' absolute bottom-[20%] left-10 text-white space-x-1 cursor-pointer'>
                    <h2 className='lg:text-3xl md:text-2xl text-xl font-bold lg:py-6'>Details Of This Blog</h2>
                    <div className='flex items-center'>
                        <Link to='/'>
                            <p className='flex items-center hover:text-[#1363DF] duration-300 font-medium'>Home <span className='px-2'><IoIosArrowForward></IoIosArrowForward></span></p>
                        </Link>

                        <Link to='/blogcon'>
                            <p className='flex items-center hover:text-[#1363DF] duration-300 font-medium'>Blog <span className='px-2'><IoIosArrowForward></IoIosArrowForward></span></p>
                        </Link>
                        <p className=''>Details</p>
                    </div>
                </div>
            </div>


            <div className='lg:px-16 md:px-12 sm:px-8 px-4 py-6 bg-[#ECECEC]'>
                <div className="flex py-4">
                    <div className="w-full">
                       
                        <img src={blogs.image} alt="" />

                        <div className="">
                            <h2 className="text-4xl font-semibold py-2 mt-4 text-[#082A5E]">{blogs.title}</h2>
                            <div className="flex space-x-4 py-2 pb-6 text-[#262626a0]">
                                <p className="flex items-center"><AiOutlineUserAdd></AiOutlineUserAdd><span className="px-2">{blogs.name}</span></p>
                                <p className="flex items-center"><MdOutlineDateRange></MdOutlineDateRange><span className="px-2">{blogs.date}</span></p>
                                <p className="flex items-center"><BiTime></BiTime><span className="px-2">10PM - 03PM</span></p>
                                <p className="flex items-center"><BsTelephone></BsTelephone><span className="px-2">+8801646286477</span></p>
                            </div>
                        </div>

                        <div className="w-[92%] py-4">
                            <p className="text-[#262626a0]">
                                Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit. All the Lorem Ipsum generators on the Internet tend to repeat that predefined chunks as necessary, making this the first true dummy generator on the Internet. It uses a dictionary of over 200 Latin words, combined Lorem Ipsum looks reasonable.
                            </p>

                            <p className="text-[#262626a0] mt-4 px-4 border-l-4 border-[#1363DF]">
                                Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit.
                            </p>

                            <h2 className="text-xl font-bold text-[#082A5E] pt-6">During this program</h2>
                            <p className="py-2 text-[#262626a0] border-b-2 pb-8 border-[#2626260f]">
                            Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit.
                            </p>
                            <div className="flex justify-between items-center py-4 border-b-2 pb-6 border-[#2626260f]">
                                 <div className="flex items-center space-x-4">
                                    <h2 className="text-lg font-medium">Tags :</h2>
                                    <div className="flex items-center space-x-4">
                                        <p className="bg-[#1377e228] text-[#1378E2] px-3 ">Courses</p>
                                        <p className="bg-[#1377e228] text-[#1378E2] px-3 ">Education</p>
                                    </div>
                                 </div>
                                 <div className="flex items-center space-x-2 cursor-pointer text-[#04040470]">
                                        <p className="hover:text-[#1378E2] duration-300"><FaFacebookF></FaFacebookF></p>
                                        <p className="hover:text-[#1378E2] duration-300"><FaInstagram></FaInstagram></p>
                                        <p className="hover:text-[#1378E2] duration-300"><FaTwitter></FaTwitter></p>
                                        <p className="hover:text-[#1378E2] duration-300"><FaLinkedinIn></FaLinkedinIn></p>
                                 </div>
                            </div>

                            <div className="py-4">
                                <h2 className="text-2xl font-medium py-2">Leave A Reply</h2>
                                <p className="text-[#26262656]">Your email address will not be published. Required fields are marked *</p>
                                <div className="py-4">
                                     <form className="w-full space-y-3">
                                          <div className="w-full flex space-x-2">
                                            <div className="w-full">
                                                <input className="w-full bg-[#F0F6FC] outline-none border border-[#cde1f4] rounded py-2 px-3" type="text" placeholder="Enter Name" />
                                            </div>
                                            <div className="w-full">
                                            <input className="w-full bg-[#F0F6FC] outline-none border border-[#cde1f4] rounded py-2 px-3" type="email" placeholder="Enter Email" />
                                            </div>
                                          </div>
                                          <div className="w-full">
                                          <input className="w-full bg-[#F0F6FC] outline-none border border-[#cde1f4] rounded py-2 px-3" type="text" placeholder="Enter Website" />
                                          </div>
                                          <div className="w-full">
                                            <textarea className="w-full bg-[#F0F6FC] outline-none border border-[#cde1f4] rounded py-2 px-3" name="" placeholder="Enter Your Comment" cols="30" rows="10"></textarea>
                                          </div>
                                          <div className="w-full">
                                            <input className="bg-[#1363DF] py-4 px-6 rounded text-white hover:bg-[#061E43] duration-300 cursor-pointer" type="submit" value="POST COMMENT" />
                                          </div>
                                     </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="border border-[#26262614]  px-8 py-4 rounded flex items-center justify-between">
                            <input className="outline-none bg-transparent" type="text" placeholder="Search here" />
                            <p className="text-2xl text-[#1363DF] cursor-pointer"><BiSearchAlt></BiSearchAlt></p>
                        </div>

                        <div className="border border-[#26262614]  px-8 py-4 rounded mt-4">
                            <h2 className="text-xl font-semibold pb-4">Categories</h2>
                            <ul className="text-[#262626c7] space-y-2">
                                <li>Art & Design</li>
                                <li>Business</li>
                                <li>Data Science</li>
                                <li>Finance</li>
                                <li>Google Map</li>
                            </ul>
                            <div className="py-2">
                               

                                <Link to='/'>
                                    <p className="text-[#1363DF] py-2 cursor-pointer">View Venue Website</p>
                                </Link>
                            </div>
                        </div>

                        <div className="border border-[#26262614]  px-8 py-4 rounded mt-4">
                            <h2 className="text-xl font-semibold pb-4">Organizer</h2>
                            <ul className="text-[#262626c7] space-y-2">
                                <li>Jon Doe</li>
                            </ul>
                            <div className="py-2">
                                <p className="text-xl font-semibold pb-1">Phone:</p>
                                <p className="text-[#262626c7]">123 599 8222</p>

                                <p className="text-lg  py-3">Email:</p>
                                <p className="text-[#262626c7]">xyz@gmail.com</p>

                                <Link to='/'>
                                    <p className="text-[#1363DF] py-2 cursor-pointer">View Venue Website</p>
                                </Link>
                            </div>
                        </div>
                        <div className="border border-[#26262614]  px-8 py-4 rounded mt-4">
                            <h2 className="text-xl font-semibold pb-4">Recent Comments</h2>
                            <p className="pt-2 pb-2 text-[#262626a0]">No comments to show.</p>
                            
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default BlogDetailsPage;