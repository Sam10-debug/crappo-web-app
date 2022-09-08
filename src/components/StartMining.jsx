import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const StartMining = () => {
	useEffect(()=>{
		AOS.init({duration: 2000})
	})
	return ( 
		<section className="flex justify-center items-center py-24" data-aos="zoom-in">
			<div className="mining ww-[95%] mx-2 md:w-3/5 rounded-lg p-8 flex flex-col md:flex-row">
				<div className="md:flex-1 flex flex-col justify-center md:justify-start md:items-start items-center mb-4 md:mb-0">
					<h3 className="font-bold text-center md:text-left text-white text-[32px]">Start mining now</h3>
					<p className="volume w-3/5 text-center md:text-left leading-[28px] mt-4">Join now with CRAPPO to get the latest news and start mining now</p>
				</div>
				<form action="" className="md:flex-1 mt-4 md:mt-0 flex items-center justify-between">
					<div className="w-[68%]">
						<label htmlFor="email" className=" text-white">Enter your email</label>
						<input type="email" name="" id="email" className="w-full mt-1 border-2 border-x-0 border-t-0" />
					</div>
					<button className="bg-white w-[30%] h-[54px] rounded-[32px] ml-2 font-semibold">Subscribe</button>
				</form>
			</div>
		</section>
	 );
}
 
export default StartMining;