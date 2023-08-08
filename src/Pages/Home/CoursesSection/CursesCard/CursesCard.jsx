import { PiNotebookBold } from 'react-icons/pi';
import { BiTime } from 'react-icons/bi';
import { AiOutlineUsergroupDelete } from 'react-icons/ai';
import { Rating } from '@smastrom/react-rating'
import './CursesCard.css'

import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const CursesCard = ({ course }) => {
    const { image, category, title, book, hours, minutes, enroll, rating, price,_id } = course
    return (
        <div>
            <Link to={`/courseDetails/${_id}`}>
            <div className="border border-[#cfcfcf] rounded px-4 py-4 mx-2 cursor-pointer card">
                <div className='syniEffect'>
                    <img className="rounded w-full" src={image} alt="" />
                </div>
                <div className="py-2">
                    <p className="bg-[#F7EEFA] inline-block px-4 py-1 text-[#BC18E4] mt-1 rounded">{category}</p>
                    <h2 className="py-2 font-medium text-[#082A5E]">{title}</h2>
                    <div className="flex items-center space-x-8 py-2 border-b-2 border-[#cfcfcf9b]">
                        <p className='flex items-center'><PiNotebookBold></PiNotebookBold><span className='px-1'>{book}</span></p>
                        <div className="flex items-center space-x-1">
                            <p className='flex items-center'><BiTime></BiTime><span className='px-1'>{hours}hr</span></p>
                            <p>{minutes}m</p>
                        </div>
                        <p className='flex items-center'><AiOutlineUsergroupDelete></AiOutlineUsergroupDelete><span className='px-1'>{enroll}</span></p>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                        <h2 className='text-[#1363DF] text-xl'>${price}</h2>
                        <p><Rating
                            style={{ maxWidth: 90 }}
                            value={rating}
                            readOnly
                        /></p>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default CursesCard;