import React from "react";

const Button = ({ text, type }) => {
	return (
		<button
			type={type}
			className=' w-[350px] sm:w-[200px] py-[1.2rem] px-[0.5rem] bg-gradient-to-r from-[#1864FF] to-[#42AAFF] text-white text-center rounded-[50px]'>
			{text}
		</button>
	);
};

export default Button;
