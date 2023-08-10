import { IoIosArrowForward } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import bgImg from '../../assets/img/courses.jpg'
import { useEffect, useState } from "react";

const EventPage = () => {
    const {id} = useParams()
    const [event,setEvent] = useState([])
    useEffect(() =>{
        fetch(`https://eduvalt-server-site.vercel.app/events/${id}`)
        .then(res => res.json())
        .then(data =>{
            setEvent(data)
        })
    },[])
    return (
        <div>
         <div className='laryer'>
            <img src={bgImg} alt="" />
            <div className=' absolute bottom-[20%] left-10 text-white space-x-1 cursor-pointer'>
               <h2 className='lg:text-3xl md:text-2xl text-xl font-bold lg:py-6'>Details Of This Event</h2>
               <div className='flex items-center'>
                  <Link to='/'>
                     <p className='flex items-center hover:text-[#1363DF] duration-300 font-medium'>Home <span className='px-2'><IoIosArrowForward></IoIosArrowForward></span></p>
                  </Link>
                  <p className=''>Event</p>
               </div>
            </div>
         </div>

         <div className='lg:px-16 md:px-12 sm:px-8 px-4 py-6 bg-[#ECECEC]'>
             <div className="flex py-4">
                 <div className="w-full">
                    <div className="">
                         <h2 className="text-4xl font-semibold py-2 text-[#082A5E]">{event.title}</h2>
                         <div className="flex space-x-4 py-2 pb-6 text-[#262626a0]">
                             <p className="flex items-center"><FiMapPin></FiMapPin><span className="px-2">{event.address}</span></p>
                             <p className="flex items-center"><MdOutlineDateRange></MdOutlineDateRange><span className="px-2">{event.date}</span></p>
                             <p className="flex items-center"><BiTime></BiTime><span className="px-2">10PM - 03PM</span></p>
                             <p className="flex items-center"><BsTelephone></BsTelephone><span className="px-2">+8801646286477</span></p>
                         </div>
                    </div>
                     <img src={event.image} alt="" />
                     <div className="w-[92%] py-4">
                             <h2 className="text-xl font-medium py-2">About The Event :</h2>
                             <p className="text-[#262626a0]">
                             Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit. All the Lorem Ipsum generators on the Internet tend to repeat that predefined chunks as necessary, making this the first true dummy generator on the Internet. It uses a dictionary of over 200 Latin words, combined Lorem Ipsum looks reasonable.
                             </p>

                             <h2 className="text-xl font-medium py-2 mt-4">During this event we’ll cover :</h2>
                             <p className="text-[#262626a0]">
                             Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit.
                             </p>
                         </div>
                 </div>
                 <div className="w-1/3">
                    <div className="border border-[#26262614]  px-8 py-4 rounded">
                        <h2 className="text-xl font-semibold">Details</h2>
                        <p className="text-[#262626c7] pt-2 py-1">Starts:</p>
                        <p className="text-[#262626c7]">August 20 - 8:00 am</p>
                        <p className="text-[#262626c7] py-1">End:</p>
                        <p className="text-[#262626c7]">August 21 - 5:00 pm</p>
                    </div>

                    <div className="border border-[#26262614]  px-8 py-4 rounded mt-4">
                          <h2 className="text-xl font-semibold pb-4">Venue</h2>
                          <ul className="text-[#262626c7] space-y-2">
                            <li>United Kingdom</li>
                            <li>United Kingdom</li>
                            <li>United Kingdom, Great Britain</li>
                            <li>PO16 7GZ United Kingdom +</li>
                            <li>Google Map</li>
                          </ul>
                          <div className="py-2">
                          <p className="text-xl font-semibold pb-1">Phone:</p>
                          <p className="text-[#262626c7]">123 599 8222</p>

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
                 </div>
             </div>
         </div>
        </div>
    );
};

export default EventPage;