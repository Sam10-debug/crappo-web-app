import arrowRight from '../images/Arrow Right.png'
import illustrationImage from '../images/Illustration.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Illustration = () => {
	useEffect(()=>{
		AOS.init({duration: 2000})
	})
	return ( 
		<section className="illustration md:mt-16 flex flex-col md:flex-row" data-aos="fade-up">
			<div className="value flex-1 mt-4 md:mt-[127px] md:h-[468px]">
				<div className="info w-[365px] h-[40px] flex text-white items-center rounded-[32px] justify-between px-2">
					<div className="save w-[113px] h-[32px] pt-1 px-4 flex gap-2.5">
						<span>75%</span>
						<span>SAVE</span>
					</div>
					<p>For the Black Friday weekend</p>
				</div>
				<h1 className="md:text-[64px] text-[40px] md:w-[558px] md:h-[228px] text-center md:text-left font-bold leading-[56px] md:leading-[76px] text-white">Fastest &amp; secure platform to invest in crypto</h1>
				<p className=" mt-4 md:w-[435px] md:h-[56px] text-center md:text-left font-normal">Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in tranactions.</p>
				<button className="try flex w-[202px] mx-auto md:mx-0 h-[64px] justify-center items-center rounded-[32px] gap-6 mt-4 text-white">Try for FREE <img src={arrowRight} alt="right-arrow icon" /></button>
			</div>
			<div className="image flex-1 h-[585px]">
				<img src={illustrationImage} alt="illustration-image w-full h-full" />
			</div>
		</section>
	 );
}
 
export default Illustration;