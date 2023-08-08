import { BsArrowRightShort } from "react-icons/bs";
import useBlogs from "../../../Hooks/useBlogs";
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BiCalendar } from 'react-icons/bi';
import { Link } from "react-router-dom";

const Blogs = () => {
    const [blogs] = useBlogs()
    return (
        <div className='lg:px-16 md:px-12 sm:px-8 px-4 py-12 bg-[#ECECEC]'>
            <div className="lg:flex lg:justify-between lg:items-center">
                <div>
                    <div className='flex items-center lg:items-start lg:justify-start justify-center'>
                        <p className='bg-[#E7EFFC]  items-center inline-block lg:px-4 md:px-2 px-1 py-1 text-[#1363DF] font-medium'>Always Smart To Hear News</p>
                    </div>
                    <h2 className='lg:text-[40px] text-center lg:text-left md:text-4xl text-2xl font-bold lg:leading-tight py-4 text-[#082A5E]'>Our<span className="text-[#1363DE]">Latest</span> Blog</h2>
                </div>
                <div>
                    <div className='flex items-center justify-center lg:mt-0 mt-2'>
                        <Link to='/blogcon'>
                        <button className='flex items-center px-4 py-3 border border-[#1363DF] rounded text-[#1363DF] hover:bg-[#1363DF] hover:text-white duration-300'>SEE ALL BLOGS  <span className='text-2xl'><BsArrowRightShort></BsArrowRightShort></span></button>
                        </Link>
                    </div>
                </div>
            </div> 

            <div className="grid lg:grid-cols-3 lg:gap-2 md:grid-cols-2 md:gap-6 lg:space-y-0 md:space-y-0 space-y-2 relative mt-6">
                {
                    blogs.slice(0,3).map((blog,index) =><div key={index}>

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
    );
};

export default Blogs;