import React from 'react'
import { blogs } from '../../adata/blogsdata'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const IndBlogs = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <>
            <main className='bg-[#f6f6f9]'>
                <div className='font-bold text-3xl text-center p-10'>IND Blogs</div>
                <div className='flex items-center justify-center pb-20'>
                    {/* <Slider {...settings}> */}
                        {blogs.map((data) => {
                            const { id, imgurl, headline, date } = data;
                            return (
                                <div key={id} className="shadow-xl rounded-2xl w-[355px] mx-2 h-[320px] ">
                                    <div className='w-[350px] mx-auto h-[200px]'>
                                        <img className='rounded-t-2xl w-full h-full object-contain' src={imgurl} alt="" />
                                    </div>
                                    <div className='p-2'>{headline}</div>
                                    <div className='px-2'>{date}</div>
                                </div>
                            )
                        })}
                    {/* </Slider> */}
                </div>
            </main>
        </>
    )
}

export default IndBlogs


