import React, { Component } from "react";
import { useRef } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";

import {
	EmailShareButton,
	EmailIcon,
	FacebookShareButton,
	FacebookIcon,
	FacebookMessengerShareButton,
	FacebookMessengerIcon,
	WhatsappShareButton,
	WhatsappIcon,
	TwitterShareButton,
	TwitterIcon,
	LinkedinShareButton,
	LinkedinIcon,
} from "react-share";

import "./styles.scss";

const Share = ({ url }) => {
	const shareUrl = `https://collector-chain.herokuapp.com${url}`;
	const iconSize = 28;
	const [open, setOpen] = React.useState(false);
	const handleIcon = () => setOpen(!open);

	// Fermeture menu share when click outside
	const ref = useRef();

	useOnClickOutside(ref, () => {
		setOpen(false);
	});

	return (
		<>
			<div className="share-icon" ref={ref}>
				<button onClick={handleIcon} className="modale-share-button">
					<img src="/share-16.png" alt="logo share" />
				</button>
				{open === true ? (
					<div className="modale-share">
						<EmailShareButton url={shareUrl} className="modale-share-logo">
							<EmailIcon size={iconSize} round={true} />
						</EmailShareButton>
						<FacebookShareButton url={shareUrl} className="modale-share-logo">
							<FacebookIcon size={iconSize} round={true} />
						</FacebookShareButton>
						<FacebookMessengerShareButton url={shareUrl} className="modale-share-logo">
							<FacebookMessengerIcon size={iconSize} round={true} />
						</FacebookMessengerShareButton>
						<WhatsappShareButton url={shareUrl} className="modale-share-logo">
							<WhatsappIcon size={iconSize} round={true} />
						</WhatsappShareButton>
						<TwitterShareButton url={shareUrl} className="modale-share-logo">
							<TwitterIcon size={iconSize} round={true} />
						</TwitterShareButton>
						<LinkedinShareButton url={shareUrl} className="modale-share-logo">
							<LinkedinIcon size={iconSize} round={true} />
						</LinkedinShareButton>
					</div>
				) : (
					""
				)}
			</div>
		</>
	);
};

export default Share;
