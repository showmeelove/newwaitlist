import React, { useState } from "react";

import ButtonWithImg from "../Button/ButtonWithImg";
import icon1 from "../../assets/images/heroIcon11.png";
import icon2 from "../../assets/images/heroIcon22.png";
import icon3 from "../../assets/images/heroIcon3.png";
import icon4 from "../../assets/images/heroIcon4.png";
import icon5 from "../../assets/images/heroIcon5.png";
import icon6 from "../../assets/images/heroIcon6.png";

import logo from "../../assets/images/ShowMeeLove.png";
import Modal from "../Modal/Modal";

const Hero = () => {
	const [modalOpen, setModalOpen] = useState(false);

	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState("");
	// const [formErrors, setformErrors] = useState({});

	let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
	const validate = (email) => {
		const errors = {};
		if (!email) {
			errors.email = "Email is required";
		} else if (!regex.test(email)) {
			errors.email = "Enter a valid email";
		}
		return errors;
	};

	const error = validate(email);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);

		fetch("https://showmeelove-api.vercel.app/api/v1/waitlist", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
			}),
		})
			.then((response) => {
				if (response.ok) {
					console.log("Request sent successfully!");
					console.log(response);
					setModalOpen(true);
					setIsLoading(false);
				} else {
					throw new Error("Error sending request.");
				}
			})
			.catch((error) => {
				console.error("Error:", error);
				setIsLoading(false);
				// setError(error.message);
			});
	};
	return (
		<div className='hero-container  relative flex items-center justify-center flex-col pt-[2rem] sm:pt-[0.5rem] overflow-hidden'>
			<div className='hidden sm:block w-[600px] h-[600px] absolute top-[-10%] left-[-10%] bg-[#1864FF]/10 rounded-[50%] z-40 drop-shawdow-xl'></div>
			<div className='hidden sm:block w-[600px] h-[600px] absolute bottom-[-10%] right-[-10%] bg-[#1864FF]/10 rounded-[50%] z-40'></div>
			<div className='text-white flex flex-col items-center sm:w-[70%] w-[100%] z-40'>
				<div className=' w-[200px] sm:w-[249px] h-[49px] sm:mb-[3rem] mb-[1rem]'>
					<img src={logo} className='w-[100%]' alt='showlove' />
				</div>
				<div className='bg-[#1864FF]/30 p-[0.5rem] w-[300px] rounded-[50px]'>
					<p className='text-[#1864FF] text-center'>
						empowering african creators 🚀
					</p>
				</div>
				<div className='sm:w-[75%] w-[100%] mx-auto'>
					<h1 className=' text-[40px] sm:text-[48px] lg:text-[58px] font-bold text-center leading-tight sm:w-[100%] w-[90%] sm:mb-[2rem] mb-[1.5rem] mx-auto'>
						let your fans <span className='text-[#1864FF]'>show you love</span>{" "}
						for your contents
					</h1>
					<p className='text-center text-[14px] sm:text-[18px] text-[#A3A3A3] px-[0.5rem] sm:px-[5rem] mb-[2rem] '>
						got a devoted fanbase? join our waitlist to get early acess tools
						that will help you unlock the power of direct support from your fans
						and deepen your connection with your audience.
					</p>
				</div>
				<form className='relative sm:mb-[3rem] mb-[1rem]'>
					<input
						type='email'
						className={`sm:py-6 py-[0.75rem] px-5 sm:w-[600px] w-[350px] text-[#A3A3A3] bg-transparent border-[1px] outline-none rounded-[50px] ${
							error.email ? "focus:border-red-500" : "focus:border-[#A3A3A3]"
						} `}
						placeholder='enter your email address'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<div className='sm:absolute relative sm:top-[8%] top-[0]  sm:right-[1%] right-0 mt-[0.5rem] sm:mt-0'>
						<button
							type='submit'
							onClick={(e) => handleSubmit(e)}
							className={` w-[350px] sm:w-[200px] py-[0.75rem] sm:py-[1.1rem] px-[0.5rem]  text-white text-center bg-gradient-to-r from-[#1864FF] to-[#42AAFF] rounded-[50px]`}
							disabled={error.email}>
							{isLoading ? "submit..." : "get early access"}
						</button>
					</div>
					{error.email ? (
						<p className='text-red-500 p-2'>{error.email}</p>
					) : null}
				</form>
			</div>

			<div className='flex gap-x-[2rem] z-40 sm:mt-[3rem] mt-[0.75rem] hero-animation'>
				<ButtonWithImg text={"developers"}>
					<div className='w-[50px]'>
						<img src={icon1} alt='/' className='w-[100%]' />
					</div>
				</ButtonWithImg>
				<ButtonWithImg text={"writers"}>
					<div className='w-[50px]'>
						<img src={icon2} alt='/' className='w-[100%]' />
					</div>
				</ButtonWithImg>
				<ButtonWithImg text={"podcasters"}>
					<div className='w-[50px]'>
						<img src={icon3} alt='/' className='w-[100%]' />
					</div>
				</ButtonWithImg>
				<ButtonWithImg text={"comedians"}>
					<div className='w-[50px]'>
						<img src={icon4} alt='/' className='w-[100%]' />
					</div>
				</ButtonWithImg>
				<ButtonWithImg text={"community"}>
					<div className='w-[50px]'>
						<img src={icon5} alt='/' className='w-[100%]' />
					</div>
				</ButtonWithImg>
				<ButtonWithImg text={"musicians"}>
					<div className='w-[50px]'>
						<img src={icon6} alt='/' className='w-[100%]' />
					</div>
				</ButtonWithImg>
			</div>

			{modalOpen ? <Modal setModalOpen={() => setModalOpen(false)} /> : null}
			<div className='hero-overlay'></div>
		</div>
	);
};

export default Hero;
