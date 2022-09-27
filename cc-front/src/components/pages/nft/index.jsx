import "./styles.scss";
import { Panel, PanelGroup, Progress } from "rsuite";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Modal } from "@nextui-org/react";
import Purchase from "../../modals/Purchase";
import FullScreen from "../../modals/FullScreen";
import Sell from "../../modals/Sell";
import HeartIcon from "../../dynamicIcons/heart";
import Share from "../../dynamicIcons/share";
import BookmarkIcon from "../../dynamicIcons/bookmark";
import { useDispatch, useSelector } from "react-redux";
import { fetchNftById } from "../../../../store/actions/data";

const Nft = ({ nfts, url }) => {
	const dispatch = useDispatch();
	// on récupère l'id de la route paramétré
	const { id } = useParams();

	//! Gestion bdd locale
	// on recherche le nft correspondant dans la liste courante du state
	// const displayedNft = nfts.find((nft) => nft.id == id);
	//! Gestion bdd distante
	const displayedNft = useSelector(state => state.nfts.displayedNft)

	if (id) {
		useEffect(() => {
			dispatch(fetchNftById(id));
		}, []);
	}
	
	// const [displayedNft,setDisplayedNft] = useState()
	// useEffect(()=>{
	// 	const test =[...displayedNftFromBdd]
	// 	setDisplayedNft(test)
	// },[displayedNftFromBdd])

	const isLogged = useSelector((state) => state.user.isLogged);
	// const propertiesCount = displayedNft.property.length
	// console.log('property counet', propertiesCount);

	const convertRarityToPercent = (displayedNft.rarity * 100) / 70;

	// gestion modale purchase
	// 1 - creation d'un state local
	const [isPurchaseVisible, setIsPurchaseVisible] = useState(false);
	const showPurchase = () => {
		setIsPurchaseVisible(true);
	};
	const hidePurchase = () => {
		// console.log("test");
		setIsPurchaseVisible(false);
	};

	// gestion modale fullScreen
	const [isFullScreenVisible, setIsFullScreenVisible] = useState(false);
	const showFullScreen = () => {
		console.log("click");
		setIsFullScreenVisible(true);
	};
	const hideFullScreen = () => setIsFullScreenVisible(false);

	//gestion modale sell
	const [isSellVisible, setIsSellVisible] = useState(false);
	const showSell = () => {
		setIsSellVisible(true);
	};
	const hideSell = () => setIsSellVisible(false);

	//-----------------
	// //! Récupération de l'id du nft affiché
	const nftId = [displayedNft.id];

	//! Récupération des id des nft en favoris
	const favorites = useSelector((state) => state.user.favorites);
	const favorisId = favorites.map((item) => item.id);

	//! Récupération d'un tableau des id identiques (comparaison id nft & favoris)
	const favorisFound = nftId.filter((value) => favorisId.includes(value));
	// console.log("FAVORITE_FOUND >>>", favorisFound);

	//----------------
	if(displayedNft){

		return (
			<div className="nft">
				<h1 className="nft__title">{displayedNft.name}</h1>
				<img src={displayedNft.media} alt="" className="nft__image" onClick={showFullScreen} />
				<div className="nft__actionsButtons">
					<Share url={url} />
					{isLogged ? (
						<>
							<BookmarkIcon nftId={displayedNft.id} favorisFound={favorisFound} />
							<HeartIcon />
						</>
					) : (
						""
					)}
				</div>
				<div className="nft__price">
					{displayedNft.forSale ? (
						<>
							<div className="nft__price__current">
								<p>Current price</p>
								<h3>{displayedNft.price}</h3>
							</div>
							{isLogged ? (
								<>
									<div className="nft__price__buy">
										<button type="button" onClick={showPurchase}>
											Buy
										</button>
										{/* modale sell a activer une fois la condition owned faite */}
										{/* <button type="button" onClick={showSell}>
											Sell
										</button> */}
									</div>
								</>
							) : (
								<div className="nft__price__buy">
									<p>Login to buy this NFT</p>
								</div>
							)}
						</>
					) : (
						<>
							<div className="nft__price__current">
								<p>This nft is not for sale</p>
							</div>
							<div className="nft__price__buy">
								<button type="button">Contact the owner</button>
							</div>
						</>
					)}
				</div>
	
				<PanelGroup className="nft__infos" accordion bordered>
					<Panel header="Main informations" defaultExpanded>
						<div className="nft__infos__main">
							<div className="nft__infos__main__author">
								<h3>Author</h3>
								<p>{displayedNft.creator}</p>
							</div>
							<div className="nft__infos__main__owner">
								<h3>Owner</h3>
								<p>{displayedNft.owner}</p>
							</div>
							<div className="nft__infos__main__rarity">
								<h3>Rarity : {displayedNft.rarity} </h3>
								{/* <p>{displayedNft.rarity}</p> */}
								<Progress.Line percent={convertRarityToPercent} strokeColor="#FF7F11" showInfo={false} className="nft__infos__main__rarity__progess" />
							</div>
						</div>
					</Panel>
					<Panel header="Description" defaultExpanded>
						<p className="nft__infos__description">
							{displayedNft.description
								? displayedNft.description
								: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque doloremque possimus quod optio corrupti, itaque hic quisquam voluptatibus minima a."}
						</p>
					</Panel>
					<Panel header="Details">
						<div className="nft__infos__details">
							<h3>Contract adress</h3>
							<p>0x7dae....a057</p>
							<h3>Token ID</h3>
							<p>2504</p>
							<h3>Creator Earnings</h3>
							<p>2.5%</p>
						</div>
					</Panel>
					<Panel header="Properties">
						<div className="nft__infos__properties">
							{/* boucle sur les prop et le tag associé */}
							{displayedNft.property.map((property,i) => <p>{property} : {displayedNft.tag[i]}</p>) }
						</div>
					</Panel>
				</PanelGroup>
	
				<Modal className="modalePurchase" closeButton blur open={isPurchaseVisible} onClose={hidePurchase}>
					<Purchase nft={displayedNft} hidePurchase={hidePurchase} />
				</Modal>
	
				<Modal className="modaleFullScreen" closeButton blur open={isFullScreenVisible} onClose={hideFullScreen}>
					<FullScreen media={displayedNft.media} />
				</Modal>
	
				<Modal className="modaleSell" closeButton blur open={isSellVisible} onClose={hideSell}>
					<Sell nft={displayedNft} hideSell={hideSell} />
				</Modal>
			</div>
		);
	}
};

export default Nft;
