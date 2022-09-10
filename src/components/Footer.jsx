import logo from '../images/Logo (2).png'
import visa from '../images/Visa.png'
import master from '../images/Mastercard.png'
import bitcoin from '../images/Bitcoin (2).png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const Footer = () => {
	useEffect(()=>{
		AOS.init({duration: 2000})
	})
	return ( 
		<footer className="footer pt-12 w-full" data-aos="fade-left">
			<div className="flex flex-col  md:flex-row md:justify-between">
				<div className="flex justify-center items-center md:justify-start md:items-start">
					<img src={logo} alt="logo" />
				</div>
				<ul className='leading-[2.0] text-center md:text-left my-4 md:my-0'>
					<li className="mb-4 font-semibold"><a href="#">Quick Link</a></li>
					<li><a href="#">Home</a></li>
					<li><a href="#">Products</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Features</a></li>
					<li><a href="#">Contacts</a></li>
				</ul>
				<ul className='leading-[2.0] text-center md:text-left'>
					<li className="mb-4 font-semibold"><a href="#">Resources</a></li>
					<li><a href="#">Download Whitepaper</a></li>
					<li><a href="#">Smart token</a></li>
					<li><a href="#">Blockchain explorer</a></li>
					<li><a href="#">Crypto API</a></li>
					<li><a href="#">Interest</a></li>
				</ul>
				<div className="">
					<h2 className="text-white font-bold text-[32px] leading-[150%] mb-4 text-center md:text-left">We accept following payment systems</h2>
					<div className="flex justify-center">
						<img src={visa} alt="visa-image" className="" />
						<img src={master} alt="mastercard-image" className="mx-4" />
						<img src={bitcoin} alt="bitcoin-image" className="" />
					</div>
				</div>
			</div>
			<div className="flex flex-col md:flex-row justify-center items-center md:justify-between py-12 gap-4 ">
				<div className="">
					<p className='volume text-[16px]'>&copy;2021.CRAPPO.All rights reserved</p>
				</div>
			<div className="flex gap-2">
				<svg className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M15.12 5.32003H17V2.14003C16.0897 2.04538 15.1751 1.99865 14.26 2.00003C11.54 2.00003 9.67999 3.66003 9.67999 6.70003V9.32003H6.60999V12.88H9.67999V22H13.36V12.88H16.42L16.88 9.32003H13.36V7.05003C13.36 6.00003 13.64 5.32003 15.12 5.32003Z" fill="white"/>
				</svg>
				<svg className="w-[16px] h-[16px] md:w-[24px] md:h-[24px] mx-1 md:mx-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M17.34 5.46C17.1027 5.46 16.8707 5.53038 16.6733 5.66224C16.476 5.79409 16.3222 5.98151 16.2313 6.20078C16.1405 6.42005 16.1168 6.66133 16.1631 6.89411C16.2094 7.12689 16.3236 7.34071 16.4915 7.50853C16.6593 7.67635 16.8731 7.79064 17.1059 7.83694C17.3387 7.88324 17.5799 7.85948 17.7992 7.76866C18.0185 7.67783 18.2059 7.52402 18.3378 7.32668C18.4696 7.12935 18.54 6.89734 18.54 6.66C18.54 6.34174 18.4136 6.03652 18.1885 5.81147C17.9635 5.58643 17.6583 5.46 17.34 5.46ZM21.94 7.88C21.9206 7.0503 21.7652 6.2294 21.48 5.45C21.2257 4.78313 20.83 4.17928 20.32 3.68C19.8248 3.16743 19.2196 2.77418 18.55 2.53C17.7727 2.23616 16.9508 2.07721 16.12 2.06C15.06 2 14.72 2 12 2C9.28 2 8.94 2 7.88 2.06C7.04915 2.07721 6.22734 2.23616 5.45 2.53C4.78168 2.77665 4.17693 3.16956 3.68 3.68C3.16743 4.17518 2.77418 4.78044 2.53 5.45C2.23616 6.22734 2.07721 7.04915 2.06 7.88C2 8.94 2 9.28 2 12C2 14.72 2 15.06 2.06 16.12C2.07721 16.9508 2.23616 17.7727 2.53 18.55C2.77418 19.2196 3.16743 19.8248 3.68 20.32C4.17693 20.8304 4.78168 21.2234 5.45 21.47C6.22734 21.7638 7.04915 21.9228 7.88 21.94C8.94 22 9.28 22 12 22C14.72 22 15.06 22 16.12 21.94C16.9508 21.9228 17.7727 21.7638 18.55 21.47C19.2196 21.2258 19.8248 20.8326 20.32 20.32C20.8322 19.8226 21.2283 19.2182 21.48 18.55C21.7652 17.7706 21.9206 16.9497 21.94 16.12C21.94 15.06 22 14.72 22 12C22 9.28 22 8.94 21.94 7.88ZM20.14 16C20.1327 16.6348 20.0178 17.2637 19.8 17.86C19.6403 18.2952 19.3839 18.6884 19.05 19.01C18.7256 19.3405 18.3332 19.5964 17.9 19.76C17.3037 19.9778 16.6748 20.0927 16.04 20.1C15.04 20.15 14.67 20.16 12.04 20.16C9.41 20.16 9.04 20.16 8.04 20.1C7.38089 20.1123 6.72459 20.0109 6.1 19.8C5.68578 19.6281 5.31136 19.3728 5 19.05C4.66809 18.7287 4.41484 18.3352 4.26 17.9C4.01586 17.2952 3.88044 16.6519 3.86 16C3.86 15 3.8 14.63 3.8 12C3.8 9.37 3.8 9 3.86 8C3.86448 7.35106 3.98295 6.70795 4.21 6.1C4.38605 5.67791 4.65627 5.30166 5 5C5.30381 4.65617 5.67929 4.3831 6.1 4.2C6.70955 3.98004 7.352 3.86508 8 3.86C9 3.86 9.37 3.8 12 3.8C14.63 3.8 15 3.8 16 3.86C16.6348 3.86728 17.2637 3.98225 17.86 4.2C18.3144 4.36865 18.7223 4.64285 19.05 5C19.3777 5.30718 19.6338 5.68273 19.8 6.1C20.0223 6.70893 20.1373 7.35178 20.14 8C20.19 9 20.2 9.37 20.2 12C20.2 14.63 20.19 15 20.14 16ZM12 6.87C10.9858 6.87198 9.99496 7.17453 9.15265 7.73942C8.31035 8.30431 7.65438 9.1062 7.26763 10.0438C6.88089 10.9813 6.78072 12.0125 6.97979 13.0069C7.17886 14.0014 7.66824 14.9145 8.38608 15.631C9.10392 16.3474 10.018 16.835 11.0129 17.0321C12.0077 17.2293 13.0387 17.1271 13.9755 16.7385C14.9123 16.35 15.7129 15.6924 16.2761 14.849C16.8394 14.0056 17.14 13.0142 17.14 12C17.1413 11.3251 17.0092 10.6566 16.7512 10.033C16.4933 9.40931 16.1146 8.84281 15.6369 8.36605C15.1592 7.88929 14.5919 7.51168 13.9678 7.25493C13.3436 6.99818 12.6749 6.86736 12 6.87ZM12 15.33C11.3414 15.33 10.6976 15.1347 10.15 14.7688C9.60234 14.4029 9.17552 13.8828 8.92348 13.2743C8.67144 12.6659 8.6055 11.9963 8.73398 11.3503C8.86247 10.7044 9.17963 10.111 9.64533 9.64533C10.111 9.17963 10.7044 8.86247 11.3503 8.73398C11.9963 8.6055 12.6659 8.67144 13.2743 8.92348C13.8828 9.17552 14.4029 9.60234 14.7688 10.15C15.1347 10.6976 15.33 11.3414 15.33 12C15.33 12.4373 15.2439 12.8703 15.0765 13.2743C14.9092 13.6784 14.6639 14.0454 14.3547 14.3547C14.0454 14.6639 13.6784 14.9092 13.2743 15.0765C12.8703 15.2439 12.4373 15.33 12 15.33Z" fill="white"/>
				</svg>
				<svg className="w-[16px] h-[16px] md:w-[24px] md:h-[24px] mx-1 md:mx-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23 9.70998C23.0495 8.27864 22.7365 6.858 22.09 5.57998C21.6514 5.05558 21.0427 4.70169 20.37 4.57998C17.5875 4.32751 14.7936 4.22403 12 4.26998C9.21667 4.22194 6.43274 4.32208 3.66003 4.56998C3.11185 4.6697 2.60454 4.92683 2.20003 5.30998C1.30003 6.13998 1.20003 7.55998 1.10003 8.75998C0.954939 10.9175 0.954939 13.0824 1.10003 15.24C1.12896 15.9154 1.22952 16.5858 1.40003 17.24C1.5206 17.745 1.76455 18.2123 2.11003 18.6C2.51729 19.0034 3.03641 19.2752 3.60003 19.38C5.75594 19.6461 7.92824 19.7564 10.1 19.71C13.6 19.76 16.67 19.71 20.3 19.43C20.8775 19.3316 21.4112 19.0595 21.83 18.65C22.11 18.3699 22.3191 18.0271 22.44 17.65C22.7977 16.5526 22.9733 15.4041 22.96 14.25C23 13.69 23 10.31 23 9.70998ZM9.74003 14.85V8.65998L15.66 11.77C14 12.69 11.81 13.73 9.74003 14.85Z" fill="white"/>
				</svg>

				<svg className="w-[16px] h-[16px] md:w-[24px] md:h-[24px] mx-1 md:mx-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M22 5.79997C21.2483 6.12606 20.4534 6.34163 19.64 6.43997C20.4982 5.92729 21.1413 5.12075 21.45 4.16997C20.6436 4.65003 19.7608 4.98826 18.84 5.16997C18.2245 4.50254 17.405 4.05826 16.5098 3.90682C15.6147 3.75537 14.6945 3.90532 13.8938 4.33315C13.093 4.76099 12.4569 5.4425 12.0852 6.2708C11.7135 7.09911 11.6273 8.02736 11.84 8.90997C10.2094 8.82749 8.61444 8.40292 7.15865 7.66383C5.70287 6.92474 4.41885 5.88766 3.39 4.61997C3.02914 5.25013 2.83952 5.96379 2.84 6.68997C2.83872 7.36435 3.00422 8.02858 3.32176 8.62353C3.63929 9.21848 4.09902 9.72568 4.66 10.1C4.00798 10.0822 3.36989 9.90726 2.8 9.58997V9.63997C2.80489 10.5849 3.13599 11.4991 3.73731 12.2279C4.33864 12.9568 5.17326 13.4556 6.1 13.64C5.74326 13.7485 5.37287 13.8058 5 13.81C4.74189 13.807 4.48442 13.7835 4.23 13.74C4.49391 14.5528 5.00462 15.2631 5.69107 15.7721C6.37753 16.2811 7.20558 16.5635 8.06 16.58C6.6172 17.7152 4.83588 18.3348 3 18.34C2.66574 18.3411 2.33174 18.321 2 18.28C3.87443 19.4902 6.05881 20.1327 8.29 20.13C9.82969 20.146 11.3571 19.855 12.7831 19.274C14.2091 18.6931 15.505 17.8338 16.5952 16.7465C17.6854 15.6591 18.548 14.3654 19.1326 12.9409C19.7172 11.5164 20.012 9.98969 20 8.44997C20 8.27996 20 8.09997 20 7.91997C20.7847 7.33478 21.4615 6.61739 22 5.79997Z" fill="white"/>
				</svg>
				<svg className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M20.47 1.9999H3.53C3.33958 1.99725 3.1505 2.03214 2.97356 2.10258C2.79663 2.17302 2.6353 2.27762 2.4988 2.41041C2.36229 2.5432 2.25328 2.70158 2.17799 2.87651C2.1027 3.05143 2.06261 3.23947 2.06 3.4299V20.5699C2.06261 20.7603 2.1027 20.9484 2.17799 21.1233C2.25328 21.2982 2.36229 21.4566 2.4988 21.5894C2.6353 21.7222 2.79663 21.8268 2.97356 21.8972C3.1505 21.9676 3.33958 22.0025 3.53 21.9999H20.47C20.6604 22.0025 20.8495 21.9676 21.0264 21.8972C21.2034 21.8268 21.3647 21.7222 21.5012 21.5894C21.6377 21.4566 21.7467 21.2982 21.822 21.1233C21.8973 20.9484 21.9374 20.7603 21.94 20.5699V3.4299C21.9374 3.23947 21.8973 3.05143 21.822 2.87651C21.7467 2.70158 21.6377 2.5432 21.5012 2.41041C21.3647 2.27762 21.2034 2.17302 21.0264 2.10258C20.8495 2.03214 20.6604 1.99725 20.47 1.9999ZM8.09 18.7399H5.09V9.7399H8.09V18.7399ZM6.59 8.4799C6.17626 8.4799 5.77947 8.31554 5.48691 8.02298C5.19435 7.73043 5.03 7.33363 5.03 6.9199C5.03 6.50616 5.19435 6.10937 5.48691 5.81681C5.77947 5.52425 6.17626 5.3599 6.59 5.3599C6.80969 5.33498 7.03217 5.35675 7.24287 5.42378C7.45357 5.49081 7.64774 5.60159 7.81265 5.74886C7.97757 5.89613 8.10952 6.07657 8.19987 6.27838C8.29021 6.48018 8.33692 6.69879 8.33692 6.9199C8.33692 7.141 8.29021 7.35961 8.19987 7.56141C8.10952 7.76322 7.97757 7.94366 7.81265 8.09093C7.64774 8.23821 7.45357 8.34898 7.24287 8.41601C7.03217 8.48304 6.80969 8.50481 6.59 8.4799ZM18.91 18.7399H15.91V13.9099C15.91 12.6999 15.48 11.9099 14.39 11.9099C14.0527 11.9124 13.7242 12.0182 13.4488 12.2131C13.1735 12.408 12.9645 12.6826 12.85 12.9999C12.7717 13.2349 12.7378 13.4825 12.75 13.7299V18.7299H9.75C9.75 18.7299 9.75 10.5499 9.75 9.7299H12.75V10.9999C13.0225 10.527 13.4189 10.1374 13.8964 9.8731C14.374 9.60878 14.9146 9.47975 15.46 9.4999C17.46 9.4999 18.91 10.7899 18.91 13.5599V18.7399Z" fill="white"/>
				</svg>
			</div>
			</div>
		</footer>
	 );
}
 
export default Footer;