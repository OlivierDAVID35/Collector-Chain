import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import CertificatePicture from "./CertificatePicture";
import ObjectPicture from "./ObjectPicture";
import ProveYourself from "./ProveYourself";
import "./styles.scss";
import { storeTempPicture } from "../../../../store/actions/createNft";

const CreateNewNft1 = () => {
	//! Gestion de la validation des étapes
	const [isStep1Validated, setIsStep1Validated] = useState(false);
	const [isStep2Validated, setIsStep2Validated] = useState(false);

	const validateStep1 = () => {
		setIsStep1Validated(true);
	};

	const validateStep2 = () => {
		setIsStep2Validated(true);
	};
	//! Fin gestion validation des étapes

	//! Gestion de l'upload des images
	// Creation d'un state local pour stocker les images
	// const [pictures, setPictures] = useState([]);
	// Creation d'un state local pour stocker le chemin URL des images
	const [picturesURL, setPicturesURL] = useState([]);
	// console.log('pictures URL >>>', picturesURL)
	// Fonction pour stocker l'image dans le state local
	const uploadImage = (event) => {
		// console.log('file >>>',event.target.files)
		// setPictures((pictures) => ({
		// 	...pictures,
		// 	[event.target.name]: event.target.files,
		// }));
		// Il faut stocker un chemin URL pour afficher l'image
		setPicturesURL((picturesURL) => ({
			...picturesURL,
			[event.target.name]: URL.createObjectURL(event.target.files[0]),
		}));
		//! Fin gestion upload image
		// console.log("PICTURES >>> ", pictures);
	};

	const deleteImage = (event) => {
		// setPictures((pictures) => ({
		// 	...pictures,
		// 	[event.target.id]: "",
		// }));
		// Il faut stocker un chemin URL pour afficher l'image
		setPicturesURL((picturesURL) => ({
			...picturesURL,
			[event.target.id]: URL.revokeObjectURL(event.target.id[0]),
		}));
		//! Fin gestion delete image
	};

	//!Stockage d'un image temporaire dans un state nftToCreate afin de la passer à l'étape 2
	const dispatch = useDispatch();
	const tempPicture = useSelector((state) => state.createNft.tempMedia);
	const phase1Validation = () => {
		dispatch(storeTempPicture(picturesURL.overallPicture));
	};

	return (
		<div className="createNewNft">
			<div className="createNewNft__title">
				<h1>Create your NFT</h1>
				<p className="text">
					Add a new NFT to your showcase. You will need a picture of the object’s serial number and the certificate of ownership associated to. The process has two steps : object and
					ownership validation, and then, NFT characterization and creation
				</p>
			</div>
			{/* STEP 1 */}
			<ObjectPicture uploadImage={uploadImage} deleteImage={deleteImage} picturesURL={picturesURL} isStep1Validated={isStep1Validated} validateStep1={validateStep1} />
			{/* STEP 2 */}
			{isStep1Validated ? (
				<CertificatePicture uploadImage={uploadImage} deleteImage={deleteImage} picturesURL={picturesURL} isStep2Validated={isStep2Validated} validateStep2={validateStep2} />
			) : (
				""
			)}
			{/* STEP 3 */}
			{isStep2Validated ? <ProveYourself uploadImage={uploadImage} deleteImage={deleteImage} picturesURL={picturesURL} phase1Validation={phase1Validation} /> : ""}
		</div>
	);
};

export default CreateNewNft1;
