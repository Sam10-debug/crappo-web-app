import upArrow from '../images/Group 96.png'
import andriy from '../images/Ellipse 48.png'
import graph from '../images/Group 6.png'
import downArrow from '../images/down-arrow.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const DetailedStatistics = () => {
	useEffect(()=>{
		AOS.init({duration: 2000})
	})
	return ( 
		<section className="mt-40 flex flex-col md:flex-row gap-12" data-aos="zoom-in">
			<section className="flex-1">
			<div className="trends flex rounded-2xl px-2 md:px-8 justify-between py-4 mr-2 ">
				<div className="flex items-center">
					<img src={upArrow} alt="up-arrow-icon" className="mr-1 " />
					<div className=" mr-2">
						<p className="text-[12px] flex flex-col md:flex-row text-white md:text-[16px]"><span className="green  text-[12px] md:text-[16px]">+7.3%</span>(+146$)</p>
						<span className="volume text-[12px] md:text-[16px]">Trends</span>
					</div>
				</div>
				<div className=" mr-2">
					<h5 className="text-[12px] md:text-[16px] text-white font-semibold">$8256.00</h5>
					<p className="text-[12px] md:text-[16px] volume leading-3 mt-1">Total amount</p>
				</div>
				<div className=" mr-2">
					<h5 className="text-[12px] md:text-[16px] text-white font-semibold">$5234.31</h5>
					<span className="text-[12px] md:text-[16px] volume">High</span>
				</div>
				<div className=" mr-2">
					<h5 className="text-[12px] md:text-[16px] text-white font-semibold">$1531.80</h5>
					<span className="text-[12px] md:text-[16px] volume">Low</span>
				</div>
				<div className="flex gap-x-2 items-center">
					<img src={andriy} alt="andriy-image" className='w-[20px] h-[20px] mr-1' />
					<div className="">
						<h5 className="text-[12px] md:text-[16px] text-white font-semibold">Andriy Lenin</h5>
						<h6 className="text-[10px] md:text-[16px] green">VERIFIED</h6>
					</div>
				</div>
			</div>
				<div className="trends mt-2 rounded-2xl px-4 py-2">
					<div className="flex items-center flex-col justify-center gap-4 md:flex-row w-full">
						<div className=" flex items-center  gap-2 flex-2 mr-6">
							<h4  className="font-bold text-white">USD/BTC</h4>
							<img src={downArrow} alt="down-arrow-icon ml-2" />
						</div>
						<div className="flex flex-2 my-4 md:mr-6 items-center">
							<div className="">
								<p className="text-white">$6278.13</p>
								<p className="text-[12px] volume">Last Price</p>
							</div>
							<span className='last text-[12px] ml-2'>+2.74%</span>
						</div>
						<div className="flex-2 md:mr-6 mb-4 flex md:flex-col gap-2 md:gap-0">
							<p className="text-white mr-2 md:mr-0">38.25 BTC</p>
							<p className="text-[12px] volume">Volume(24h)</p>
						</div>
						<div className="flex-1 flex justify-end">
							<button className="w-[70px] h-[34px] buy rounded-[32px]">Buy</button>
							<button className="w-[70px] h-[34px] sell rounded-[32px] ml-4">Sell</button>
						</div>
					</div>
					<img src={graph} alt="graph-image" className='mt-4' />
				</div>
			</section>
				<div className="flex-1 flex flex-col  justify-center items-center ">
					<h2 className='text-[32px] font-bold text-white text-center md:text-left'>Detailed Statistics</h2>
					<p className='volume leading-[28px] my-8 w-4/5 md:w-3/5'>View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.</p>
					<button className="try w-[162px] h-[59px] rounded-[32px] text-white font-semibold ">Learn More</button>
				</div>
			
		</section>
	 );
}
 
export default DetailedStatistics;