import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.scss";
import { Link } from "react-router-dom";

const SlideAuto = () => {
	return (
		<div className="slide-fade">
			<Swiper
				autoplay={{
					delay: 5000,
					disableOnInteraction: true,
				}}
				spaceBetween={30}
				effect={"fade"}
				// navigation={true}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay, EffectFade, Navigation, Pagination]}
				className="mySwiper"
			>
				<div className="slide-title">
					<h2>Bring your collectors to digital word and digital economy</h2>
					{/* <p>Collector Chain allow you to extend your physical collection to the digital world</p> */}
				</div>
				<SwiperSlide>
					<Link to="/resources">
						<div className="slide-img">
							<h3>Based on blockchain and NFT techno</h3>
							<img src="https://cdn.pixabay.com/photo/2022/03/16/17/16/nft-7072864_960_720.jpg" />
							{/* <img src="https://media.istockphoto.com/photos/futuristic-background-picture-id1357752706?k=20&m=1357752706&s=612x612&w=0&h=R-lLDe0Xoz5-3NVCyG6bJ6G8xr8mBc-oLeACRxbI1fY=" /> */}
						</div>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link to="/resources">
						<div className="slide-img">
							<h3>Enjoy your digital showcase</h3>
							<img src="https://media.istockphoto.com/photos/video-archives-concept-picture-id1032516536?k=20&m=1032516536&s=612x612&w=0&h=1v1vz3AYBwmgyWvbpP8SzA7uv_CujrukUUgzYFps5wE=" />
						</div>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link to="/resources">
						<div className="slide-img">
							<h3>Earn passive incomes</h3>
							<img src="https://images.pexels.com/photos/8185629/pexels-photo-8185629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
						</div>
					</Link>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default SlideAuto;
