import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.scss";
import SlideAuto from "../../slides/SlideAuto";
import CollectionCard from "../../card/CollectionCard";
import Slide_2x2 from "../../slides/Slide_2x2";
import { Link } from "react-router-dom";
import { fetchCollections } from "../../../../store/actions/data";
import { useEffect } from "react";

const HomePage = () => {
	// import depuis le state de la liste en cours
	const list = useSelector((state) => state.collections.list);

	//Responsive
	const { innerWidth } = window;

	console.log(innerWidth);

	return (
		<>
			<main>
				<div className="homePage">
					<div className="homePage__ressources">
						<SlideAuto />
						<div className="homePage__highlightedCollections">
							<h2>Hightlighted collections</h2>
							{/* {width <= 415 ? ( */}
							<Slide_2x2>
								{list.map((collection) => {
									return (
										<SwiperSlide key={collection.id}>
											<CollectionCard text={collection.name} media={collection.media} id={collection.id} />
										</SwiperSlide>
									);
								})}
							</Slide_2x2>
							{/* ) : (
								<h2>test</h2>
							)} */}
						</div>
					</div>

					<div className="homePage__creationProcess">
						<Link to="/creation">
							<h2>our NFT creation process</h2>
							<img src="https://bladerender.com/media/simple-responsive-slideshow/2.jpg" />
						</Link>
					</div>
					<div className="homePage__latestCollections">
						<h2>Latest Collections</h2>
						<Slide_2x2>
							{list.map((collection) => {
								return (
									<SwiperSlide key={collection.id}>
										<CollectionCard text={collection.name} media={collection.media} id={collection.id} />
									</SwiperSlide>
								);
							})}
						</Slide_2x2>
					</div>
				</div>
			</main>
		</>
	);
};

export default HomePage;
