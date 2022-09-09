
import { useState } from 'react';
import Illustration from './Illustration';
import MobileNav from './MobileNav';
import NavBar from './NavBar';


const Header = () => {
	const [showNav,setShowNav]=useState(false)
	return ( 
		<header className=" header w-screen md:h-[850px] px-4 md:px-16 py-2 md:py-6 ">
				<NavBar showNav={showNav} setShowNav={setShowNav} />
	 			{showNav&&<MobileNav showNav={showNav} setShowNav={setShowNav} />}
				<Illustration />
		</header>
	 );
}
 
export default Header;