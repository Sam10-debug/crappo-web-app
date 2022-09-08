import bitcoin from '../images/Icon (1).png'
import upArrow from '../images/Group 96.png'
import eth from '../images/Icon (3).png'
import ltc from '../images/Icon (2).png'
import downArrow from '../images/down-arrow.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const GrowProfits = () => {
	useEffect(()=>{
		AOS.init({duration: 2000})
	})
	return ( 
		<section className="flex flex-col  md:flex-row px-4 md:px-12 md:gap-4 pt-8" data-aos="fade-left">
			<div className="md:flex-1 flex justify-center items-center flex-col md:justify-start md:items-start">
				<h2 className="text-white text-[32px] font-bold">Grow your profit and track your investments</h2>
				<p className="volume leading-[28px] md:w-4/5">Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.</p>
				<button className="try w-[162px] h-[59px] my-4  rounded-[32px] text-white font-semibold mt-4">Learn More</button>
			</div>
			<div className="md:flex-1 trends rounded-xl p-2 md:p-4">
				<div className="flex justify-between">
					<div className="flex h-[80px] items-end w-[25%]">
						<img src={bitcoin} alt="bitcoin-image" className="w-[40px] h-[40px] mr-2" />
						<div className="">
							<h5 className='text-white font-bold'>BTC</h5>
							<span className="volume text-[14px]">Bitcoin</span>
						</div>
					</div>
					<div className="flex h-[80px] flex-col justify-between items-center w-[25%]">
						<p className="text-white">Price</p>
						<p className="volume text-[14px]">$6750</p>
					</div>
					<div className="flex h-[80px] flex-col justify-between w-[25%]">
						<p className="text-white">Change</p>
						<div className="flex items-center">
							<img src={upArrow} alt="up-arrow-icon" className="mr-2" />
							<span className='green text-[14px]'>+7.3%</span>
						</div>
					</div>
					<div className="flex h-[80px] items-center flex-col justify-between w-[25%]">
						<p className="text-white">Volume(24h)</p>
						<p className="volume text-[14px]">$3420214</p>
					</div>
				</div>
				<div className="flex justify-between my-4 md:relative eth md:right-[20%] p-2 rounded-md ">
					<div className="flex w-[25%]">
						<img src={eth} alt="ethereum-icon" className="w-[40px] h-[40px] mr-2" />
						<div className="">
							<h5 className='text-white font-bold' >ETH</h5>
							<p className="volume text-[14px]">Ethereum</p>
						</div>
					</div>
					<div className="w-[25%] flex justify-center items-center">
						<span className="volume text-[14px]">$156.83</span>
					</div>
					<div className="flex items-center w-[25%]">
						<img src={downArrow} alt="down-array" className="mr-2" />
						<span className="red text-[14px]">-0.9%</span>
					</div>
					<div className="w-[25%] flex justify-center items-center">
						<p className="volume text-[14px]">$1812350</p>
					</div>
				</div>
				<div className="flex justify-between">
					<div className="flex w-[25%]">
						<img src={ltc} alt="litecoin-icon" className="w-[40px] h-[40px] mr-2" />
						<div className="">
							<h5 className='text-white font-bold'>LTC</h5>
							<p className="volume text-[14px]">Litecoin</p>
						</div>
					</div>
					<div className="w-[25%] flex justify-center items-center">
						<span className="volume text-[14px]">$8535</span>
					</div>
					<div className="w-[25%] flex items-center">
						<img src={downArrow} alt="down-array" className="mr-2" />
						<span className="green text-[14px]">+8.2%</span>
					</div>
					<div className="w-[25%] flex justify-center items-center">
						<p className="volume text-[14px]">$5820399</p>
					</div>
				</div>
			</div>
		</section>
	 );
}
 
export default GrowProfits;