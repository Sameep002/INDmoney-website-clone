import React from 'react'

const Footer = () => {
  return (
    <>
        <main className='p-10 bg-[#191C1F]'>
        <div className='flex justifiy-center items-center space-x-96'>
            <div className='ml-20'>
                <div>
                        <img src="https://cdn.indmoney.com/assets/images/INDlogo_white.svg" alt=""/>
                </div>
                <div className='flex space-x-4 my-4'>
                    <div className='w-[150px]'>
                            <img className='w-full h-full' src="https://www.indmoney.com/stencil/images?url=/images/common/footer/old-app-store.svg&w=1920&q=75" alt="" />
                    </div>
                    <div className='w-[150px]'>
                            <img className='w-full h-full' src="https://www.indmoney.com/stencil/images?url=/images/common/footer/old-play-store.svg&w=1920&q=75" alt="" />
                    </div>
                </div>
                <div className='flex space-x-3'>
                        <img className='w-8' src="https://www.indmoney.com/stencil/images?url=/images/common/footer/social/facebook.svg&w=1920&q=75" alt="" />
                        <img className='w-8' src="https://www.indmoney.com/stencil/images?url=/images/common/footer/social/linkedin.svg&w=1920&q=75" alt="" />
                        <img className='w-8' src="https://www.indmoney.com/stencil/images?url=/images/common/footer/social/twitter.svg&w=1920&q=75" alt="" />
                        <img className='w-8' src="https://www.indmoney.com/stencil/images?url=/images/common/footer/social/youtube.svg&w=1920&q=75" alt="" />
                        <img className='w-8' src="https://www.indmoney.com/stencil/images?url=/images/common/footer/social/instagram.svg&w=1920&q=75" alt="" />
                </div>
            </div>
            <div className='flex space-x-20 pt-20'>
                <div className='text-white flex flex-col '>   
                        <div className='font-bold py-2'>Explore Products</div>
                        <span>Mutual Funds</span>
                        <span>IN Stocks</span>
                        <span>US Stocks</span>
                        <span>IPO</span>
                        <span>Bonds</span>
                        <span>Fixed Deposit</span>
                        <span>Calculators</span>
                </div>
                <div className='text-white  flex flex-col '>
                        <div className='font-bold py-2'>Company</div>
                        <span>About Us</span>
                        <span>Blog</span>
                        <span>Privacy Policy</span>
                        <span>Terms & Conditions</span>
                        <span>Security</span>
                        <span>Google API Disclosure</span>
                        <span>Grievance Redressal Policy</span>
                        <span>Regulatory Disclosure</span>
                        <span>SEBI Investor Charter</span>
                        <span>Complaints Status</span>
                        <span>Site Map</span>
                </div>
                <div className='text-white  flex flex-col '>
                        <div className='font-bold py-2'>Contacts</div>
                        <span>Customer Service</span>
                </div>
            </div>
        </div>
        </main>
    </>
  )
}

export default Footer