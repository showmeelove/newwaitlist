import React from "react";
import icon2 from "../../assets/images/heroIcon22.png";
import icon3 from "../../assets/images/featureIcon1.png";

const FeaturesHeader = () => {
	return (
		<div className=' flex flex-col w-[90%] sm:w-[60%] mx-auto mt-[4rem] justify-center items-center'>
			<h2 className='text-[26px] sm:text-[48px] font-bold text-center leading-tight mb-[2rem]'>
				helping you build a community out of your audience
			</h2>
			<p className='text-center text-[14px] sm:text-[1rem] sm:px-[5rem] px-0'>
				our platform is designed with creators like you in mind. you'll have all
				the tools you need to deepen your connection with your audience.
			</p>
			<div className='flex gap-x-5 mt-[2rem]'>
				<div>
					<img src={icon2} alt='/' />
				</div>
				<div>
					<img src={icon2} alt='/' />
				</div>
			</div>
		</div>
	);
};

export default FeaturesHeader;
