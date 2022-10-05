import React from 'react'

const Awards = () => {
  return (
    <>  
        <main className='bg-[#f6f6f9] pt-5 pb-20'>
        <div className='font-semibold text-[40px] text-center py-14'>Awards</div>
        <div className='flex space-x-8 justify-center items-center '>        
            <div className='p-4 w-[300px] flex flex-col justify-center items-center rounded-2xl shadow-md h-60'>
                <span className='font-semibold text-2xl'>NASSCOM </span>
                <span className='font-semibold text-2xl'>INDIAN AWARDS -</span>
                <span className='font-semibold text-2xl'>India Fintech</span>
                <span className='py-2'>2021</span>
                <div className='py-2'>
                    <img src="https://www.indmoney.com/stencil/images?url=/images/about-page/award-nasscom.png&w=1920&q=75" alt="" />
                </div>
            </div>
            <div className='p-4 w-[300px] flex flex-col justify-center items-center rounded-2xl shadow-md h-60'>
                <span className='font-semibold text-2xl'>Excellence</span>
                <span className='font-semibold text-2xl'>in WealthTech -</span>
                <span className='font-semibold text-2xl'>Startup</span>
                <span className='py-2'>2021</span>
                <div className='py-2 max-w-[200px]'>
                    <img src="https://www.indmoney.com/stencil/images?url=/images/about-page/award-1.png&w=1920&q=75" alt="" />
                </div>
            </div>
            <div className='p-4 w-[300px] flex flex-col justify-center items-center rounded-2xl shadow-md h-60'>
                <span className='font-semibold text-2xl'>CBInsight Top </span>
                <span className='font-semibold text-2xl'>250 Fintech</span>
                <span className='py-2'>2020</span>
                <div className='py-2'>
                    <img src="https://www.indmoney.com/stencil/images?url=/images/about-page/award-2.png&w=1920&q=75" alt="" />
                </div>
            </div>
        </div>
        </main>
    </>
  )
}

export default Awards