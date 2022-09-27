import React from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, useMap, Marker, Popup, Circle } from "react-leaflet";
import SearchBarEvents from "../../searchBars/SearchBarEvents";
import "./styles.scss";
import Share from "../../dynamicIcons/share";

const Events = () => {
	const center = [48.112490724339, -1.6795174922733247];
	const zoom = 11;

	const radius = 5500;
	const fillCircle = { fillColor: "blue" };

	return (
		<main>
			<div className="events">
				<div className="events__title">
					<h1>Events</h1>
				</div>
				<div className="events__searchBar">
					<SearchBarEvents />
				</div>
				<MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
					<TileLayer attribution='&copy; <Link to="https://www.openstreetmap.org/copyright">OpenStreetMap</Link> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
					<Marker position={[48.112490724339, -1.6795174922733247]}>
						<Popup>
							NFT Meeting <br /> Collectors event
						</Popup>
					</Marker>
					<Circle center={center} radius={radius} pathOptions={fillCircle} />
				</MapContainer>
				<div className="events__list">
					<h2>List</h2>
				</div>
			</div>
		</main>
	);
};

export default Events;
