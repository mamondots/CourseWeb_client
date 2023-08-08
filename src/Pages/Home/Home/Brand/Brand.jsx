import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import './Brand.css'

const Brand = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
    };

    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('brand.json')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])
    return (
       <div className="border-b-2 border-[#9a9a9a63]">
         <div className='lg:px-16 md:px-12 sm:px-8 px-4 py-8 bg-[#ECECEC]'>
            <div className="brand_img text-center">
                <Slider {...settings}>

                    {
                        items.map((item, index) => <div key={index}>
                            <div className="flex items-center justify-center">
                                <img  className="mt-5 object-cover" src={item.image} alt="" />
                            </div>
                        </div>)
                    }


                </Slider>
            </div>
        </div>
       </div>
    );
};

export default Brand;