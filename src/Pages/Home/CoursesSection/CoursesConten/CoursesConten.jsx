import { BsArrowRightShort } from 'react-icons/bs';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useQuery } from '@tanstack/react-query';
import CursesCard from '../CursesCard/CursesCard';

import { BsArrowLeftShort, } from 'react-icons/bs';
import { BiRightArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function SampleNextArrow({ onClick }) {
  return (
    <div className='arrow arrow-next' onClick={onClick}>
      <BsArrowLeftShort></BsArrowLeftShort>
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className='arrow arrow-prev' onClick={onClick}>
      <BiRightArrowAlt></BiRightArrowAlt>
    </div>
  );
}


const CoursesConten = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const { data: courses = [] } = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const res = await fetch('https://eduvalt-server-site.vercel.app/courses')
      return res.json()
    }

  })

  return (
    <div className='lg:px-16 md:px-12 sm:px-8 px-4 py-12 bg-[#ECECEC]'>
      <div className="lg:flex lg:justify-between lg:items-center">
        <div>
          <div className='flex items-center lg:items-start lg:justify-start justify-center'>
            <p className='bg-[#E7EFFC]  items-center inline-block lg:px-4 md:px-2 px-1 py-1 text-[#1363DF] font-medium'>10,000+ Unique Online Courses</p>
          </div>
          <h2 className='lg:text-[40px] text-center lg:text-left md:text-4xl text-2xl font-bold lg:leading-tight py-4 text-[#082A5E]'>Recent <span className='text-[#1363DF]'>Trending</span> Courses</h2>
        </div>
        <div>
          <div className='flex items-center justify-center lg:mt-0 mt-2'>
            <Link to='/coursesCon'>
            <button className='flex items-center px-4 py-3 border border-[#1363DF] rounded text-[#1363DF] hover:bg-[#1363DF] hover:text-white duration-300'>VIEW ALL COURSES  <span className='text-2xl'><BsArrowRightShort></BsArrowRightShort></span></button>
            </Link>
          </div>
        </div>
      </div>

      <div className='py-12 card-box'>
        <Slider {...settings}>
          {
            courses.map((course, index) => <CursesCard key={index} course={course}></CursesCard>)
          }
        </Slider>
      </div>
    </div>
  );
};

export default CoursesConten;