import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { componentData } from '../../adata/ApiData'

const Hero = () => {
    return (
        <>
            {componentData.map((data) => {
                const { id, bgColor, title, subtitle, highlights, btnText, applePlay, googlePlay, stars, ratings, reviews, heroImage, addCompTitle } = data;
                return (
                    <main key={id} className={`${bgColor === "white" ? "bg-white pb-16" : "bg-[#f6f6f9] pb-16"}`}>
                        {
                            addCompTitle ? (
                                <div className='max-w-[1050px] pt-10 mx-auto '>
                                    <div className='text-xl text-gray-600 '>Explore</div>
                                    <div className='flex items-center space-x-4 ml-10 mt-5'>
                                        <div className='p-4 w-[150px] flex flex-col justify-center items-center shadow-lg rounded-lg'>
                                            <div className='p-4 bg-orange-200 rounded-xl'>
                                                <img src="https://www.indmoney.com/stencil/images?url=/images/home-page/hero/chart-rising-up-dollar.svg&w=48&q=75" alt="" />
                                            </div>
                                            <div className='pt-2'>US Stocks</div>
                                        </div>
                                        <div className='p-4 w-[150px] flex flex-col justify-center items-center shadow-lg rounded-lg'>
                                            <div className='p-4 bg-orange-200 rounded-xl'>
                                                <img src="https://www.indmoney.com/stencil/images?url=/images/home-page/hero/chart-rising-up-rupee.svg&w=48&q=75" alt="" />
                                            </div>
                                            <div>IN Stocks</div>
                                        </div>
                                        <div className='p-4 w-[150px] flex flex-col justify-center items-center shadow-lg rounded-lg'>
                                            <div className='p-4 bg-orange-200 rounded-xl'>
                                                <img src="https://www.indmoney.com/stencil/images?url=/images/home-page/hero/palm-spread-out.svg&w=48&q=75" alt="" />
                                            </div>
                                            <div>Mutual Funds</div>
                                        </div>
                                        <div className='p-4 w-[150px] flex flex-col justify-center items-center shadow-lg rounded-lg'>
                                            <div className='p-4 bg-orange-200 rounded-xl'>
                                                <img src="https://www.indmoney.com/stencil/images?url=/images/home-page/hero/monument.svg&w=48&q=75" alt="" />
                                            </div>
                                            <div>Fixed Deposit</div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div></div>
                            )
                        }
                        <section className='flex max-w-[1050px] pt-10 mx-auto '>
                            <section className=''>
                                <div className='text-gray-500'>{subtitle}</div>
                                <div className='font-bold text-[36px] w-[400px] mt-3'>{title}</div>
                                {
                                    highlights.map((hl) => {
                                        return (
                                            <div className='font-bold mt-6 w-[340px]'>
                                                <li>{hl}</li>
                                            </div>
                                        );
                                    })
                                }
                                {
                                    btnText ? (
                                        <div>
                                            <button className='bg-blue-500 rounded-3xl px-20 py-4 text-white mt-6'>{btnText}</button>
                                        </div>
                                    ) : (
                                        <div></div>
                                    )
                                }
                                <div className='flex mt-6'>
                                    <div className='flex flex-col'>
                                        <div><img className='-ml-4 w-[160px] mb-4' src={applePlay} alt="app" /></div>
                                        <div className='flex text-yellow-400 -ml-4 text-lg'>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiOutlineStar />
                                        </div>
                                        <div className='flex -ml-4'>
                                            <div>{stars}</div>
                                            <div> • {ratings} ratings</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col pt-[4px]'>
                                        <div><img className='-mt-1 w-[140px] mb-4 ' src={googlePlay} alt="play" /></div>
                                        <div className='flex text-green-500 text-lg'>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiOutlineStar />
                                        </div>
                                        <div className='flex'>
                                            <div>{stars}</div>
                                            <div> • {reviews} reviews</div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className='ml-20'>
                                <div>
                                    <img className='w-[500px]' src={heroImage} alt="heroimg" />
                                </div>
                            </section>
                        </section>
                    </main>
                );
            })}
        </>
    )
}

export default Hero