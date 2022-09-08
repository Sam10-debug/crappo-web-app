import bitcoin from '../images/Icon (1).png'
import graph from '../images/Group 111.png'
import upArrow from '../images/Vector.png'
import DetailedStatistics from './DetailedStatistics';
import GrowProfits from './GrowProfits';
import StartMining from './StartMining';
import Footer from './Footer';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Features = () => {
	useEffect(()=>{
		AOS.init({duration: 2000})
	})
	return ( 
		<section className="features pt-16" data-aos="fade-right">
			<h2 className="text-center mx-4 text-[32px] text-white font-bold md:text-[40px] md:mx-32">Market sentiments, portfolio, and run the infrastructure of your choice</h2>
			<div className="flex flex-col md:flex-row  md:mx-12">
				<div className="invest flex flex-col items-center md:items-start  md:flex-1 p-4">
					<h3 className="text-white text-[32px] font-bold">Invest Smart</h3>
					<p className="w-3/5 my-4 leading-[28px]">Get full statistic information about the behaviour of buyers and sellers will help you to make the decision.</p>
					<button className="try w-[162px] h-[59px] rounded-[32px]">Learn More</button>
				</div>
				<div className="chart relative md:flex-1 p-4">
					<div className="flex justify-between item-center">
						<div className="flex items-center">
							<img src={bitcoin} alt="bitcoin-image" className="w-[40px] h-[40px]" />
							<div className="mx-2">
								<h4 className="text-white font-bold text-[24px]">Bitcoin</h4>
								<span className='btc text-[14px]'>0.00084 BTC</span>
							</div>
							<span className="btc text-[14px]">BTC</span>
						</div>
						<span className="small text-[14px]">+125%</span>
					</div>
					<img src={graph} alt="graph-image" />
					<div className="increase md:w-[178px] p-2 md:h-[174px] bg-red-600 absolute bottom-0 translate-y-[50%] rounded-2xl flex flex-col justify-center items-center">
						<h5 className='text-white text-[20px] font-semibold'>Increase in Trade</h5>
						<div className="flex items-center">
							<span className="text-white text-[24px] font-bold mr-2">+75%</span>
							<img src={upArrow} alt="arrow-vector" />
						</div>
						<span className="volume text-[12px]">Sell option</span>
					</div>
					<div className="increase md:w-[169px] p-2 md:h-[84px] bg-blue-900 absolute bottom-0 translate-y-[50%] left-[68%]  rounded-2xl flex flex-col justify-center items-center">
						<h5 className="text-white font-bold">$15.32</h5>
						<span className="volume text-[12px]">Price in dollar</span>
					</div>
				</div>
			</div>
			<DetailedStatistics />
			<GrowProfits />
			<StartMining />
			<Footer />
		</section>
	 );
}
 
export default Features;