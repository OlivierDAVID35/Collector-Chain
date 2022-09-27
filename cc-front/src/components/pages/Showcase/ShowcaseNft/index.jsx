import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Modal } from "rsuite";
import { fetchOwned, removeFromShowcase, removeNftFromTodisplayList, setShowcaseId, setShowcaseNftDisplayed } from "../../../../../store/actions/user";
import NftOwned from "../../../modals/NftOwned";
import "./styles.scss";

const ShowcaseNft = ({id, name}) => {

	const dispatch = useDispatch();
	const location = useLocation()
	const userId = useSelector(state => state.user.id)

	useEffect(() => {
		dispatch(fetchOwned(userId))
	},[location])
	
	const nftOwned = useSelector((state) => state.user.nftOwned);

	// Recherche de l'image devant etre associée à cette case :
	// récupération de l'image par une recherche dans le state en fonction de l'id de la case
	const showcasedNFT = useSelector((state) => state.user.showcaseNftDisplayed);
	const URLToDisplay = showcasedNFT.find(nft => nft.id == id)
	// console.log('URLToDisplay>>>>', URLToDisplay)

	// Gestion de l'affihage de la modale
	const [isModaleNftOwnedVisible, setIsModaleNftOwnedVisible] = useState(false);
	const hideModaleNftOwned = () => {
		setIsModaleNftOwnedVisible(false);
	};
	const showModaleNftOwned = () => {
		setIsModaleNftOwnedVisible(true);
	};

	// Variable nécessaire au fonctionnement du code
	const [lastNftSelected, setLastNftSelected] = useState({});
	const [src, setSrc] = useState('');

	const uploadImage = (event) => {
		// On stock les informations à utiliser dans le useEffect
		console.log('event', event.target.id);
		setLastNftSelected(event.target.src);
		setSrc(event.target.src)
		//! Le premier id est celui du NFT, le deuxieme, celui de la case
		dispatch(setShowcaseId(event.target.id,Number(id)))
		hideModaleNftOwned();
	};
	
	// Gestion des dispatch reducer dans un useEffect (ne marche si dispatch en meme temps que la modification des varaibles)
	useEffect(() => {
		// console.log("TempNftSelected after>>>", tempNftSelected);
		if(src){

			dispatch(setShowcaseNftDisplayed(lastNftSelected, id))
			dispatch(removeNftFromTodisplayList(lastNftSelected))
		}
	},[src])


	const deleteImage = () => {
		// on récupère depuis la liste 'owned' le nft supprimé
		const nftToRemoveFromShowcase = nftOwned.find(nft => nft.media == URLToDisplay.media)
		// on envoie le nft dans le dispatch pour réalimenter la liste 'toDisplay'
		// l'id de la case sert à gérer la suppression de la liste 'displayed'
		dispatch(removeFromShowcase(id,nftToRemoveFromShowcase))
	};


	return (
		<div className="showcase">
			<div className="showcase__pic">
				{/* affichage conditionnel si image affichée ou non */}
				{URLToDisplay ? 
				<>
				<div className="showcase__pic-trash-icon" onClick={deleteImage}>
					<ion-icon className="showcase__pic-trash" name="trash" id={id} size="large"></ion-icon>
				</div>
				<img src={URLToDisplay.media} className="showcase__pic-img" alt="" />
				</>
				:
				<div className="showcase__pic-add-icon" onClick={showModaleNftOwned}>
					<ion-icon name="add-circle" size="large" id={name}></ion-icon>
				</div>
				}
			</div>
			<Modal 
				className="modaleNftOwned" 
				closeButton 
				blur 
				open={isModaleNftOwnedVisible} 
				onClose={hideModaleNftOwned}
				
				>
					<NftOwned id={id} uploadImage={uploadImage} nftOwned={nftOwned}/>
			</Modal>
		</div>
	);
};

export default ShowcaseNft;
