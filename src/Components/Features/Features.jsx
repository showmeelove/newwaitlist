import React from "react";
import FeaturesCard from "./FeaturesCard";
import FeaturesHeader from "./FeaturesHeader";
import money from "../../assets/images/moneyIcon.png";
import cart from "../../assets/images/Cart.png";
import gem from "../../assets/images/gem.png";
import volt from "../../assets/images/volt.png";
import hit from "../../assets/images/hit.png";
import gift from "../../assets/images/gift.png";

const Features = () => {
	return (
		<div className='w-[100%] mx-auto mb-[2rem]'>
			<FeaturesHeader />
			<div className='flex flex-wrap flex-col sm:flex-row items-center justify-center gap-[3rem] mt-[2rem] mx-auto sm:w-[95%]'>
				<FeaturesCard
					icon={money}
					text={
						"give your audience a fun and easy way to say thanks. they don’t need to create an account."
					}
				/>
				<FeaturesCard
					icon={cart}
					text={
						"sell things you don’t need a shopify or selar store for. Could be a 1-1 Zoom call, books, arts, etc."
					}
				/>
				<FeaturesCard
					icon={gem}
					text={
						"earn recurring income by letting fans show you love on an ongoing basis as you want."
					}
				/>
				<FeaturesCard
					icon={volt}
					text={
						"offer your fans personalized services like custom work or pay for direct access to you."
					}
				/>
				<FeaturesCard
					icon={hit}
					text={
						"let your fans help you raise money for a project/goal or contribute to help you smash it."
					}
				/>
				<FeaturesCard
					icon={gift}
					text={
						"give your audience a reward (exclusive post, content, member-only products) for showing you love."
					}
				/>
			</div>
		</div>
	);
};

export default Features;
