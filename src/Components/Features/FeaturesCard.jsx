import React from "react";
import money from "../../assets/images/moneyIcon.png";

const FeaturesCard = ({ text, icon }) => {
	return (
		<div className='w-[350px] text-[#565656]  h-[350px] flex flex-col gap-y-[1rem] items-center justify-center border-[1px] border-[#EEEEEE] bg-[#fff] drop-shadow-l p-[1rem] rounded-[25px]'>
			<div className='w-[50px]'>
				<img src={icon} alt='Money' />
			</div>
			<h2 className='font-[500] text-[20px]'>recieve donation</h2>
			<p className='text-center'>{text}</p>
		</div>
	);
};

export default FeaturesCard;
