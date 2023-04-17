import React, { useState } from "react";
import FAQCard from "./FAQCard";
import { faq } from "@/utils/faq";
import Heading from "../Heading/Heading";

const FAQ = () => {
	const [Open, setopen] = useState(false);
	const [clicked, setclicked] = useState("0");

	const handleToggle = (index) => {
		console.log(index);
		if (clicked === index) {
			return setclicked("0");
		}
		setclicked(index);
	};
	const textColor = Open ? "text-[#004DB3]" : "text-black";

	return (
		<div className='pt-[2rem] lg:pt-[5rem] pb-[3rem]'>
			<Heading title={"Frequently Asked Questions"} />
			<div className='flex flex-col items-center justify-center  mx-auto'>
				{faq.map((faq, idx) => (
					<FAQCard
						faq={faq}
						key={idx}
						active={clicked === idx}
						onToggle={() => handleToggle(idx)}
					/>
				))}
			</div>
		</div>
	);
};

export default FAQ;
