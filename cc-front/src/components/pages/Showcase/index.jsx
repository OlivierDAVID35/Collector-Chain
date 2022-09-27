import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Grid, Row, Col } from "rsuite";
import { Modal } from "@nextui-org/react";
import ShowcaseNft from "./ShowcaseNft";
import NftOwned from "../../modals/NftOwned";
import SearchBarFavorites from "../../searchBars/SearchBarFavorites";
import "./styles.scss";

const Showcase = () => {

	return (
		<main className="showcase">
			<div className="showcase__description">
				<h2>My showcase</h2>
				<p>
					Manage the way to display your collection : color theme, collection oraganization, etc...
					{/* Click on ‘preview’ to display the way the others visitors will see your collection  */}
				</p>
			</div>
			<SearchBarFavorites />
			<Grid fluid>
				<Row className="show-grid">
					<Col xs={12} sm={10} md={8}>
						<ShowcaseNft id={1} name="nft1" />
						<ShowcaseNft id={2} name="nft2" />
						<ShowcaseNft id={3} name="nft3" />
						<ShowcaseNft id={4} name="nft4" />
						<ShowcaseNft id={5} name="nft5" />
						<ShowcaseNft id={6} name="nft6" />
					</Col>
					<Col xs={12} sm={10} md={8}>
						<ShowcaseNft id={7} name="nft7" />
						<ShowcaseNft id={8} name="nft8" />
						<ShowcaseNft id={9} name="nft9" />
						<ShowcaseNft id={10} name="nft10" />
						<ShowcaseNft id={11} name="nft11" />
						<ShowcaseNft id={12} name="nft13" />
					</Col>
				</Row>
			</Grid>
			{/* <Modal className="modaleNftOwned" closeButton blur open={isModaleNftOwnedVisible} onClose={hideModaleNftOwned}>
				<NftOwned hideNftOwned={hideModaleNftOwned} uploadImage={uploadImage} nftOwned={nftOwned} />
			</Modal> */}
		</main>
	);
};

export default Showcase;
