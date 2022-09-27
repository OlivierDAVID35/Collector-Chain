import { Modal, Text } from "@nextui-org/react";
import { useSelector } from "react-redux";

import "./styles.scss";

const NftOwned = ({ uploadImage, nftOwned }) => {
	//! Essaie avec state dédié pour remonter les NFT restant à positionner
	const nonDisplayedNFT = useSelector(state => state.user.showcaseNftToDisplay);
	// console.log(nonDisplayedNFT);
	

	return (
		<div className="nftOwned">
			<Modal.Header>
				<Text id="modal-title" size={18}>
					Choose your NFT to display
				</Text>
			</Modal.Header>
			<Modal.Body>
				<div className="nftOwned__list">
					{nonDisplayedNFT.map((nft) => {
						return (
							<div className="nftOwned__card" key={nft.id} onClick={uploadImage}>
								<img src={nft.media} className="nftOwned__card-image" alt="" id={nft.id} name={nft.name} />
								<div className="nftOwned__card-title">{nft.name}</div>
							</div>
						);
					})}
				</div>
			</Modal.Body>
		</div>
	);
};

export default NftOwned;
