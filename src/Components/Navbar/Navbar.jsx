import React from "react";
import Button from "../Button/Button";
// import logo from "../../assets/ShowMeelove..png";
import logo from "../../assets/images/ShowMeeLove.png";
import { BsList } from "react-icons/bs";

const Navbar = () => {
	return (
		<div className=' pt-[3rem]  fixed top-0 left-0 right-0 z-40'>
			<div className='flex justify-between items-center w-[85%] mx-auto  '>
				<div className=' w-[130px] sm:w-[180px] h-[10px]'>
					<img src={logo} className='w-[100%]' alt='showlove' />
				</div>
				<div className='sm:flex items-center gap-x-10 hidden '>
					<div className='text-white flex gap-x-10'>
						<li>features</li>
						<li>faqs</li>
					</div>
					<Button text='get early access' />
				</div>
				{/* smaller screen  */}
				<div className='text-white text-[2rem] sm:hidden block'>
					<BsList />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
