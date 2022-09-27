import React from "react";
import { useSelector } from "react-redux";
import { Swiper } from "swiper/react";
import { Grid, Pagination } from "swiper";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const Slide_2x2 = ({ children }) => {
	return (
		<>
			<div className="slide">
				<Swiper
					slidesPerView="2"
					grid={{
						rows: 2,
					}}
					spaceBetween={20}
					pagination={{
						clickable: true,
					}}
					modules={[Grid, Pagination]}
					className="mySwiper"
				>
					{children}
				</Swiper>
			</div>
		</>
	);
};

export default Slide_2x2;
