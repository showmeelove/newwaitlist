import React from "react";

const ButtonWithImg = ({ type, text, children, icon }) => {
	return (
		<button
			type={type}
			className='w-[220px] py-[0.4rem] px-[0.5rem] bg-transparent border-[1px] border-[#A3A3A3] text-white text-center rounded-[50px] flex items-center  gap-x-5'>
			{icon}
			{children}
			{text}
		</button>
	);
};

export default ButtonWithImg;
