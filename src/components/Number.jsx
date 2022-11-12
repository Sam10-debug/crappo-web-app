import icon from '../images/Icon.png'
import icon2 from '../images/Icon (4).png'
import icon3 from '../images/Icon (5).png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'



const Number = () => {
	useEffect(()=>{
		AOS.init({duration: 2000})
	})


	//   console.log(showNav)
	return ( 
		<section className=" md:h-[92px] flex flex-col md:flex-row mx-auto justify-between items-center" data-aos="zoom-in">
			<div className="md:w-[334px] h-[92px] flex items-end">
				<img src={icon} alt="icon-image" className="w-[80px] h-[80px]" />
				<div className="">
				<h5 className="font-bold text-[32px] md:text-[40px] mill">$30B</h5>
				<p className="volume">Digital Currency Exchange</p>
				</div>
			</div>
			<div className="md:w-[334px] h-[92px] flex items-end">
				<img src={icon2} alt="icon-image" className="w-[80px] h-[80px]" />
				<div className="">
					<h5 className="font-bold text-[32px] md:text-[40px] mill">10M+</h5>
					<p className="volume">Trusted Wallet Investors</p>
				</div>
			</div>
			<div className="md:w-[334px] h-[92px] flex items-end">
				<img src={icon3} alt="icon-image" className="w-[80px] h-[80px]" />
				<div className="">
				<h5 className="font-bold text-[32px] md:text-[40px] mill">195</h5>
				<p className="volume">Countries supported</p>
				</div>
			</div>
		</section>
	 );
}
 
export default Number;