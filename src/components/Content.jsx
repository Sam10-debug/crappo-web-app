import illustration2 from '../images/Illustrations.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Content = () => {
	useEffect(()=>{
		AOS.init({duration: 2000})
	})
	return ( 
		<section className='flex flex-col md:flex-row mt-16 w-screen justify-between md:px-24' data-aos="fade-right">
			<div className="flex-1">
			<img src={illustration2} alt="illustration-img  " />
			</div>
			<div className="flex flex-col md:justify-end pb-12 flex-1 ">
				<p className='experience mb-8'>Why you should choose CRAPPO</p>
				<p className=" experience w-4/5 h-[84px] leading-7">Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p>
				<button className="   try flex w-[146px] h-[59px] justify-center items-center rounded-[32px] gap-6 mt-4 text-white">Learn More</button>
			</div>
		</section>
	 );
}
 
export default Content;