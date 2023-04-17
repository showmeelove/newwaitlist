import React, { useState } from "react";
import Button from "../Button/Button";
import ButtonWithImg from "../Button/ButtonWithImg";
import icon1 from "../../assets/images/heroIcon11.png";
import icon2 from "../../assets/images/heroIcon22.png";
import icon3 from "../../assets/images/heroIcon3.png";
import icon4 from "../../assets/images/heroIcon4.png";
import icon5 from "../../assets/images/heroIcon5.png";
import icon6 from "../../assets/images/heroIcon6.png";

import logo from "../../assets/images/ShowMeeLove.png";
import Modal from "../Modal/Modal";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

const Hero = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const images = [icon1, icon2, icon3, icon4, icon5, icon6];
	const handleSubmit = (e) => {
		e.preventDefault();
		fetch("https://showmeelove-api.vercel.app/api/v1/waitlist", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: "emsunconcept@gmail.com",
			}),
		})
			.then((response) => {
				if (response.ok) {
					console.log("Request sent successfully!");
				} else {
					throw new Error("Error sending request.");
				}
			})
			.catch((error) => {
				console.error("Error:", error);
			});

		setModalOpen(true);
	};
	return (
		<div className='hero-container h-[100vh]  flex items-center justify-center flex-col pt-[5rem] overflow-x-hidden'>
			<div className='text-white flex flex-col items-center sm:w-[70%] w-[100%] z-40'>
				<div className=' w-[200px] sm:w-[249px] h-[49px] sm:mb-[6rem] mb-[4rem]'>
					<img src={logo} className='w-[100%]' alt='showlove' />
				</div>
				<div className='bg-[#1864FF]/30 p-[0.5rem] w-[300px] rounded-[50px] sm:mb-[1rem] mb-[2rem]'>
					<p className='text-[#1864FF] text-center'>
						empowering african creators 🚀
					</p>
				</div>
				<h1 className='text-[44px] sm:text-[56px] lg:text-[74px] font-bold text-center leading-tight sm:w-[100%] w-[90%] sm:mb-[5rem] mb-[2rem]'>
					let your fans <span className='text-[#1864FF]'>show you love</span>{" "}
					for your contents
				</h1>
				<p className='text-center text-[16px] sm:text-[22px] text-[#A3A3A3] px-[0.5rem] sm:px-[5rem] mb-[2rem] mb-[6rem]'>
					got a devoted fanbase? join our waitlist to get early acess tools that
					will help you unlock the power of direct support from your fans and
					deepen your connection with your audience.
				</p>
				<form className='relative mb-[6rem]'>
					<input
						type='text'
						className='sm:py-6 py-5 px-5 sm:w-[600px] w-[350px] border-[#A3A3A3] text-[#A3A3A3] bg-transparent border-[1px] outline-none rounded-[50px]'
						placeholder='enter your email address'
					/>
					<div className='sm:absolute relative top-[10%]  sm:right-[1%] right-0 mt-[1rem] sm:mt-0'>
						{/* <Button type='submit' text={"get early access"} /> */}
						<button
							type='submit'
							onClick={(e) => handleSubmit(e)}
							className=' w-[350px] sm:w-[200px] py-[1.2rem] px-[0.5rem] bg-gradient-to-r from-[#1864FF] to-[#42AAFF] text-white text-center rounded-[50px]'>
							get early access
						</button>
					</div>
				</form>
			</div>

			<div className='flex gap-x-[2rem] z-40 mb-[3rem] hero-animation'>
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

const EmojiSlider = () => {
	const images = [icon1, icon2, icon3, icon4, icon5, icon6];
	return (
		<Splide
			options={{
				type: "loop",
				gap: "50px",
				drag: "free",
				arrows: false,
				pagination: false,
				perPage: 1,
				autoScroll: {
					pauseOnHover: true,
					pauseOnFocus: false,
					rewind: true,
					speed: 1,
				},
			}}
			extensions={{ AutoScroll }}>
			<SplideSlide className='flex gap-x-[2rem] z-40'>
				{images.map((image, idx) => {
					return (
						<ButtonWithImg text={"developers"} key={idx}>
							<div className='w-[50px]'>
								<img src={image} alt='/' className='w-[100%]' />
							</div>
						</ButtonWithImg>
					);
				})}

				{/* <ButtonWithImg text={"writers"}>
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

				<ButtonWithImg text={"musicians"}>
					<div className='w-[50px]'>
						<img src={icon6} alt='/' className='w-[100%]' />
					</div>
				</ButtonWithImg> */}
			</SplideSlide>
		</Splide>
	);
};

export default Hero;
