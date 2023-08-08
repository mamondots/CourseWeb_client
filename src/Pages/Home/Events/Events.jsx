import { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { MdCalendarMonth } from "react-icons/md";
import { Link } from "react-router-dom";


const Events = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setEvents(data)
            })
    }, [])
    return (
        <div className='lg:px-16 md:px-12 sm:px-8 px-4 py-6 bg-[#ECECEC]'>
            <div className="lg:flex lg:justify-between lg:items-center">
                <div>
                    <div className='flex items-center lg:items-start lg:justify-start justify-center'>
                        <p className='bg-[#E7EFFC]  items-center inline-block lg:px-4 md:px-2 px-1 py-1 text-[#1363DF] font-medium'>Featured Events</p>
                    </div>
                    <h2 className='lg:text-[40px] text-center lg:text-left md:text-4xl text-2xl font-bold lg:leading-tight py-4 text-[#082A5E]'> Upcoming <span className="text-[#1363DE]">Events</span></h2>
                </div>
                <div>
                    <div className='flex items-center justify-center lg:mt-0 mt-2'>
                        <button className='flex items-center px-4 py-3 border border-[#1363DF] rounded text-[#1363DF] hover:bg-[#1363DF] hover:text-white duration-300'>OUR ALL EVENTS<span className='text-2xl'><BsArrowRightShort></BsArrowRightShort></span></button>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 lg:gap-2 md:grid-cols-2 md:gap-6 lg:space-y-0 md:space-y-0 space-y-2 relative mt-6">
                {
                    events.slice(0, 3).map((item, index) => <div key={index}>
                        <Link to={`/eventDetails/${item._id}`}>
                        <div className="border border-[#cfcfcf] rounded px-4 py-4 mx-2 cursor-pointer card">
                           <div className='syniEffect'>
                           <img className="rounded" src={item.image} alt="" />
                           </div>
                            <div className="py-2">
                            <p className="text-lg font-medium  text-[#082A5E]">{item.title}</p>
                            <p className="flex items-center text-[#262626bf]"><BiMap></BiMap><span className="px-1">{item.address}</span></p>
                            <div className="inline-block absolute top-10">
                                <p className="flex bg-[#1363DF] ml-4 items-center py-1 px-2 text-white rounded "><MdCalendarMonth></MdCalendarMonth><span className="px-1">{item.date}</span></p>
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

export default Events;