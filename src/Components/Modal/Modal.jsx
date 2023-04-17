import React from "react";
import icon1 from "../../assets/images/modalimg1.png";
import icon2 from "../../assets/images/modalimg2.png";
import icon3 from "../../assets/images/modalimg3.png";
import icon4 from "../../assets/images/modalimg4.png";

const Modal = ({ setModalOpen }) => {
	return (
		<div className='z-40 text-white bg-black/50 backdrop-blur-sm fixed top-0 right-0 left-0 h-[100%] w-[100%] overflow-hidden flex justify-center items-center'>
			<div className='flex flex-col gap-y-[2rem] justify-center items-center max-w-[489px] bg-black drop-shadow-xl py-4 px-[2rem] rounded-[20px] sm:rounded-[10px]'>
				<div className='flex items-center justify-center '>
					<div className='sm:w-[85.96px] w-[65px]'>
						<img src={icon1} className='' alt='' />
					</div>
					<div className='sm:w-[85.96px] w-[65px] ml-[-1rem]'>
						<img src={icon2} className='' alt='' />
					</div>
					<div className='sm:w-[85.96px] w-[65px] ml-[-1rem]'>
						<img src={icon3} className='' alt='' />
					</div>
					<div className='sm:w-[85.96px] w-[65px] ml-[-1rem]'>
						<img src={icon4} className='' alt='' />
					</div>
				</div>
				<h2 className='sm:text-[32px] text-[26px] text-center'>
					yo! you have been added to our waitlist!
				</h2>
				<p className='sm:text-[20px] text-[15px] text-center '>
					we will send you an email as soon as we ready launch. do well to
					invite other creators to join our waitlist so they can get early
					access when we launch.
				</p>
				{/* <Button text={"got it! thank you 🚀"} /> */}
				<button
					className=' w-[90%] py-[1.2rem] px-[0.5rem] bg-white text-black text-center rounded-[50px] mx-auto'
					onClick={setModalOpen}>
					got it! thank you 🚀
				</button>
			</div>
		</div>
	);
};

export default Modal;
