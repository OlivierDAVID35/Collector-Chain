import Slide_2x2 from "../../slides/Slide_2x2";
import { Swiper, SwiperSlide } from "swiper/react";
import CollectionCard from "../../card/CollectionCard";
import NftCard from "../../card/NftCard";
import { useSelector } from "react-redux";
import "./styles.scss";
import SearchBarResultsCollections from "../../searchBars/SearchBarResultsCollections";
import SearchBarResultsNft from "../../searchBars/searchBarResultsNft";
import SearchBarCollection from "../../searchBars/SearchBarCollection";

const Results = () => {
	// import depuis le state de la liste en cours
	const collectionList = useSelector((state) => state.collections.list);
	const nftList = useSelector((state) => state.nfts.list);
	return (
		<main>
			<div className="results">
				<h1>Results</h1>
				<div className="results__collection-title">
					<h2>Collections</h2>
					<SearchBarResultsCollections />
					<Slide_2x2>
						{collectionList.map((text) => {
							return (
								<SwiperSlide key={text}>
									<CollectionCard text={text} />
								</SwiperSlide>
							);
						})}
					</Slide_2x2>
				</div>
				<div className="results__nft-title">
					<div className="results__collection-title">
						<h2>NFT</h2>
						<SearchBarCollection/>
						<Slide_2x2>
							{nftList.map((nft) => {
								return (
									<SwiperSlide key={nft.id}>
										<NftCard key={nft.id} {...nft} />
									</SwiperSlide>
								);
							})}
						</Slide_2x2>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Results;
