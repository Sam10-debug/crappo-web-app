import bitcoin from '../images/Icon (1).png'
import ethereum from '../images/Icon (3).png'
import litecoin from '../images/Icon (2).png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import arrowRight from '../images/Arrow Right.png'
import { useEffect, useState } from 'react'

const Trade = () => {
	const [showSecondText,setShowSecondText]=useState(false)
	const [showFirstText,setShowFirstText]=useState(false)
	const [showThirdText,setShowThirdText]=useState(false)
	const ShowText=()=>{
		setShowFirstText(false)
	}
	const hideText=()=>{
		setShowFirstText(true)
		
	}
	const ShowSecondText=()=>{
		setShowSecondText(false)
	}
	const hideSecondText=()=>{
		setShowSecondText(true)
		
	}
	const ShowThirdText=()=>{
		setShowThirdText(false)
	}
	const hideThirdText=()=>{
		setShowThirdText(true)
		
	}

	useEffect(()=>{
		AOS.init({duration: 2000})
	})
	return ( 
		<section className="pt-60 md:pt-40 md:px-16 w-screen mb-12 bg-slate-100 mt-40 md:mt-28" data-aos="fade-right">
			<h2 className='trade-heading w-[90%] text-[40px] font-bold text-center mx-auto'>Trade securely and market the high growth cryptocurrencies.</h2>
			<div className="flex flex-col md:flex-row mt-16 w-full" data-aos="zoom-in">
				<div className="flex flex-col justify-center items-center mx-auto md:w-[30%] w-[90%] crypto h-[433px] text-center  rounded-xl px-2">
					<img src={bitcoin} alt="bitcoin-image" className="w-[80px] h-[80px]" />
					<div className="flex items-center gap-2">
					<h3 className="text-[32px] font-bold ">Bitcoin</h3>
					<span className="volume ml-2 text-[14px]">BTC</span>
					</div>
					<p className="">Digital currency in which a record of transactions is maintained.</p>
					
					<div onMouseEnter={hideText} onMouseLeave={ShowText} className="font-semibold  mx-auto py-2 px-4  md:py-0 h-[48px]  md:w-[90%] try flex  md:h-[64px] justify-center items-center rounded-[32px] gap-6 mt-4  text-white">{showFirstText&&<p className='mr-2'>Start mining</p>} <img src={arrowRight} alt="right-arrow icon " className='' /></div>
				</div>
				<div className="flex flex-col justify-center items-center mx-auto md:w-[30%] w-[90%] crypto h-[433px] my-4 md:my-0 md:mx-16 text-center  rounded-xl">
					<img src={ethereum} alt="ethereum-image" className="w-[80px] h-[80px]" />
					<div className="flex items-center gap-2">
					<h3 className="text-[32px] font-bold ">Ethereum</h3>
					<span className="volume ml-2 text-[14px]">ETH</span>
					</div>
					<p className="">Blockchain technology to create and run decentralized digital applications.</p>
					<div onMouseEnter={hideSecondText} onMouseLeave={ShowSecondText} className="font-semibold  mx-auto py-2 px-4  md:py-0 h-[48px]  md:w-[90%] try flex  md:h-[64px] justify-center items-center rounded-[32px] gap-6 mt-4  text-white">{showSecondText&&<p className='mr-2'>Start mining</p>} <img src={arrowRight} alt="right-arrow icon " className='' /></div>
				</div>
				<div className="flex flex-col justify-center items-center mx-auto md:w-[30%] w-[90%] crypto h-[433px] text-center  rounded-xl px-2">
					<img src={litecoin} alt="litecoin-image" className="w-[80px] h-[80px]" />
					<div className="flex items-center gap-2">
					<h3 className="text-[32px] font-bold ">Litecoin</h3>
					<span className="volume ml-2 text-[14px]">LTC</span>
					</div>
					<p className="">Cryptocurrency that enables instant payments to anyone in the world.</p>
			<div onMouseEnter={hideThirdText} onMouseLeave={ShowThirdText} className="font-semibold  mx-auto py-2 px-4  md:py-0 h-[48px]  md:w-[90%] try flex  md:h-[64px] justify-center items-center rounded-[32px] gap-6 mt-4  ">{showThirdText&&<p className='mr-2'>Start mining</p>} <img src={arrowRight} alt="right-arrow icon " className='' /></div>
				</div>
			</div>
		</section>
	 );
}
 
export default Trade;