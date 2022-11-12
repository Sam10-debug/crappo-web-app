
import Illustration from './Illustration';

import NavBar from './NavBar';


const Header = ({setShowNav}) => {
	
	return ( 
		<header className=" header w-screen md:h-[850px] px-4 md:px-16 py-2 md:py-6 ">
				<NavBar setShowNav={setShowNav} />
				<Illustration />
		</header>
	 );
}
 
export default Header;