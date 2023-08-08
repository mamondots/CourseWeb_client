import { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";


const Category = () => {
    const [categores,setCategores] = useState([])
    useEffect(() =>{
        fetch('category.json')
        .then(res => res.json())
        .then(data =>{
            setCategores(data)
        })
    },[])
    return (
        <div className='lg:px-16 md:px-12 sm:px-8 px-4 py-6  bg-[#ECECEC]'>
            <div className="lg:flex lg:justify-between lg:items-center">
                <div>
                    <div className='flex items-center lg:items-start lg:justify-start justify-center'>
                        <p className='bg-[#E7EFFC]  items-center inline-block lg:px-4 md:px-2 px-1 py-1 text-[#1363DF] font-medium'>Unique online courses</p>
                    </div>
                    <h2 className='lg:text-[40px] text-center lg:text-left md:text-4xl text-2xl font-bold lg:leading-tight py-4 text-[#082A5E]'>Browse <span className='text-[#1363DF]'>By Categories</span> </h2>
                </div>
                <div>
                    <div className='flex items-center justify-center lg:mt-0 mt-2'>
                    <Link to='/coursesCon'>
                        <button className='flex items-center px-4 py-3 border border-[#1363DF] rounded text-[#1363DF] hover:bg-[#1363DF] hover:text-white duration-300'>ALL CATEGORIES  <span className='text-2xl'><BsArrowRightShort></BsArrowRightShort></span></button>
                        </Link>
                    </div>
                </div>
            </div>

                <div className="grid lg:grid-cols-4 lg:gap-6 lg:space-y-0 md:grid-cols-3 md:gap-4 md:space-y-0 sm:grid-cols-2 sm:gap-2 sm:space-y-0 space-y-4 mt-8 overflow-hidden">
                     {
                        categores.map((categore,index) =><div key={index}>

                        <div className="group overflow-hidden rounded relative">
                             <img className="rounded w-full group-hover:scale-105 duration-700 " src={categore.image} alt="" />
                             <div className="mt-5 absolute bottom-10 z-10 left-5">
                                <p className="px-6 py-2 inline-block group-hover:text-[#BC18E4] duration-700 bg-[#1363DF] rounded text-white">{categore.total_courses} Courses</p>
                                <h2 className="px-6 py-2 text-xl font-medium bg-white rounded cursor-pointer group-hover:text-[#1363DF] duration-700">{categore.title}</h2>
                             </div>
                        </div>

                        </div>)
                     }
                </div>

        </div>
    );
};

export default Category;