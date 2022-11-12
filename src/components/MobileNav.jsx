import logo from '../images/Logo (2).png'
import divider from '../images/Divider.png'  
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const MobileNav = ({setShowNav}) => {

	  

	const HideNav=()=>{
		setShowNav(false)
	}
	useEffect(()=>{
		AOS.init({duration: 2000})
	})
	
	return ( 
		<div className=" eth h-screen flex justify-center flex-col  top-0 left-0 fixed z-50 w-screen items-center md:hidden" data-aos="fade-left">
			<svg onClick={HideNav} className="absolute right-[2%] top-[2%]" width="40px" height="40px" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><title/><path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/></svg>
					<ul className="font-lg flex flex-col leading-[58px] ">
						<li className="text-[32px] text-white"><a href="#">Products</a></li>
						<li className="text-[32px] text-white"><a href="#">Features</a></li>
						<li className="text-[32px] text-white"><a href="#">About</a></li>
						<li className="text-[32px] text-white"><a href="#">Contact</a></li>
					</ul>
					<div className="sign-in flex  items-center mt-12">
						<button className="text-white font-semibold text-[20px] w-[130px] h-[52px]">Login</button>
						<img src={divider} alt="divider" className='mx-4' />
						<button className="text-white font-semibold text-[20px] w-[130px] h-[52px]">Register</button>
					</div>
				</div>
	 );
}
 
export default MobileNav;