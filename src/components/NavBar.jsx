import logo from '../images/Logo (2).png'
import divider from '../images/Divider.png'  
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const NavBar = ({showNav,setShowNav}) => {
	useEffect(()=>{
		AOS.init({duration: 2000})
	})

	const ShowNav=()=>{
		setShowNav(true)
	}


	return ( 
		<nav className=" h-[52px] flex mx-auto justify-between items-center" data-aos="zoom-in">
				<img src={logo} alt="logo" />
				<div className=" hidden nav-menu md:flex items-center">
					<ul className="font-lg flex w-[339px] justify-between">
						<li><a href="#">Products</a></li>
						<li><a href="#">Features</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
					<div className="sign-in flex w-[221px] items-center ml-6">
						<button className="w-[130px] h-[52px]">Login</button>
						<img src={divider} alt="divider" className='mx-4' />
						<button className="w-[130px] h-[52px]">Register</button>
					</div>
				</div>
				
					<svg onClick={ShowNav} className="flex md:hidden" width="24px" height="24px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"/></svg>
			</nav>
	 );
}
 
export default NavBar;