import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Check = () => {
	useEffect(()=>{
		AOS.init({duration: 2000})
	})
	return ( 
		<section className="check-section flex items-center justify-start md:justify-center h-[500px] flex-col w-full md:h-[457px] relative" data-aos="fade-left">
			<h2 className="font-bold text-white text-[40px] px-2 text-center" >Check how much you can earn</h2>
			<p className="check text-[18px] md:w-[622px] text-center mt-4" >Let’s check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.</p>
			<div className="w-[90%] md:w-4/5 bg-white mx-auto rounded-xl p-6 mt-4 absolute bottom-[-30%] md:bottom-[-25%]  "data-aos="zoom-in">
				<div className="hash flex  flex-col md:flex-row justify-center items-center">
					<div className=" md:h-[38px] md:w-1/2 flex flex-col w-full">
						<label className="">Enter your harsh rate</label>
						<input type="text" className="border-2 w-full md:w-1/2 border-x-0 border-t-0" />
					</div>
		
						<select name="" id="" className="border-2 w-full mt-8 rounded-lg h-[40px] md:w-1/4 md:mx-4">
							<option value="TH/s">TH/s</option>
						</select>
					<button className="flex-1  mx-auto py-2  md:py-0 h-[48px] w-full try flex md:w-1/4 md:h-[64px] justify-center items-center rounded-[32px] gap-6 mt-4 text-white">Calculate</button>
				</div>
				<h3 className="estimated mt-4 font-bold">ESTIMATED 24 HOUR REVENUE:</h3>
				<h2 className="font-bold text-[32px]">0.055 130 59 ETH <span className="doll">($1275)</span></h2>
				<p>Revenue will change based on mining difficulty and Ethereum price</p>
			</div>
		</section>
	 );
}
 
export default Check;