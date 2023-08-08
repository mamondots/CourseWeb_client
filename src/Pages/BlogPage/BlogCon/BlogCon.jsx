import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import bgImg from '../../../assets/img/courses.jpg'
import useBlogs from "../../../Hooks/useBlogs";
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BiCalendar } from 'react-icons/bi';

const BlogCon = () => {
    const [blogs] = useBlogs()
    return (
        <div>
            <div className='laryer'>
            <img src={bgImg} alt="" />
            <div className=' absolute bottom-[20%] left-10 text-white space-x-1 cursor-pointer'>
               <h2 className='lg:text-3xl md:text-2xl text-xl font-bold lg:py-6'>Our Latest Blogs</h2>
               <div className='flex items-center'>
                  <Link to='/'>
                     <p className='flex items-center hover:text-[#1363DF] duration-300 font-medium'>Home <span className='px-2'><IoIosArrowForward></IoIosArrowForward></span></p>
                  </Link>
                  <p className=''>Blog</p>
               </div>
            </div>
         </div>

         <div className='lg:px-16 md:px-12 sm:px-8 px-4 py-6 bg-[#F1F5F8]'>

         <div className="grid lg:grid-cols-3 lg:gap-4 md:grid-cols-2 md:gap-6 lg:space-y-0 md:space-y-0 space-y-2 relative mt-6">
                {
                    blogs.map((blog,index) =><div key={index}>

                    <Link to={`/blogDetails/${blog._id}`}>
                    <div className="border border-[#cfcfcf] rounded px-4 py-4 mx-2 cursor-pointer  card">
                    <div className='syniEffect relative'>
                           <img className="rounded object-cover" src={blog.image} alt="" />
                           <div className="py-2">
                               <p className="bg-[#1363DE] rounded px-2 py-2 inline-block text-white text-[12px]">{blog.category}</p>
                               <h2 className="font-medium text-xl py-1 text-[#082A5E]">{blog.title}</h2>
                               <div className="flex items-center space-x-4 text-[#26262686]">
                                <p className="flex items-center"><AiOutlineUserAdd></AiOutlineUserAdd> by <span className="px-2">{blog.name}</span></p>
                                <p className="flex items-center"><BiCalendar></BiCalendar><span className="px-2">{blog.date}</span></p>
                                </div>
                           </div>
                           </div>

                    </div>
                    </Link>

                    </div>)
                }
            </div>

         </div>
        </div>
    );
};

export default BlogCon;