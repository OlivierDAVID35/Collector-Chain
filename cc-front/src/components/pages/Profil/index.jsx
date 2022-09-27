import { Input, Spacer, Button, Image, Switch } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal } from "@nextui-org/react";
import UpdateProfile from "../../modals/UpdateProfile";
import { useDispatch } from "react-redux";
import { isOpenToContact, setMediaUrl, deleteMediaUrl } from "../../../../store/actions/user";
import "./styles.scss";

const Profil = () => {
	const dispatch = useDispatch();

	const user = useSelector((state) => state.user);

	const [isUpdateProfileVisible, setIsUpdateProfileVisible] = useState(false);
	const showUpdateProfile = () => {
		setIsUpdateProfileVisible(true);
	};
	const hideUpdateProfile = () => {
		setIsUpdateProfileVisible(false);
	};

	const switchEvent = (event) => {
		dispatch(isOpenToContact(event.target.checked));
	};
	//! Gestion de l'upload des images
	// Creation d'un state local pour stocker l'image du user
	const [profilePicture, setProfilePicture] = useState([]);

	const uploadImage = (event) => {
		setProfilePicture((profilePicture) => ({
			...profilePicture,
			[event.target.name]: event.target.files,
		}));
		// Il faut stocker un chemin URL pour afficher l'image
		dispatch(setMediaUrl(event.target.name, event.target.files[0]));
	};

	const deleteImage = (event) => {
		setProfilePicture((profilePicture) => ({
			...profilePicture,
			[event.target.id]: "",
		}));
		// Il faut stocker un chemin URL pour afficher l'image
		dispatch(deleteMediaUrl(event.target.id));
		console.log("profilePicture After >>>", event.target.id);
	};

	return (
		<main>
			<div className="profile">
				<div className="profile__pic">
					{user.media ? (
						<div className="profile__pic-trash-icon" onClick={deleteImage}>
							<ion-icon className="profile__pic-trash" name="trash-outline" id="media" size="large"></ion-icon>
						</div>
					) : (
						""
					)}
					{!user.media ? (
						<>
							<label htmlFor="profilePictureInput" className="profile__pic-add-icon">
								<ion-icon name="add-circle-outline" size="large"></ion-icon>
							</label>
							<input type="file" accept="image/*" name="media" onChange={uploadImage} className="profile__pic-input" id="profilePictureInput" />
						</>
					) : (
						""
					)}
					{user.media ? <img className="profile__pic-image" src={user.media} alt="Profil picture" /> : ""}
					<h3>Level 1</h3>
				</div>
				<div className="profile__infos">
					<Spacer y={0.5} />
					<Input disabled={true} label="Nickname" placeholder={user.nickname} />
					<Spacer y={0.5} />
					<Input disabled={true} label="Name" placeholder={user.name} />
					<Spacer y={0.5} />
					<Input disabled={true} label="Firstname" placeholder={user.firstname} />
					<Spacer y={0.5} />
					<Input disabled={true} label="Email" placeholder={user.email} />
					<Spacer y={0.5} />
					<button className="profile__button" color="primary" auto onClick={showUpdateProfile}>
						Update profile informations
					</button>
				</div>
				<div className="profile__id">
					<Spacer y={1} />
					<h2>Add your ID to create NFT</h2>
					<div style={{ width: 320, height: 180, backgroundColor: "white" }}>
						<Image width={320} height={180} src="" alt="" objectFit="cover" />
					</div>
					<Spacer y={1} />
					<Button>Add ID</Button>
				</div>
				<Spacer y={1} />
				<div className="profile__link">
					<Link to="/showcase" className="link">
						access my collection
					</Link>
					<Link to="" className="link">
						access my contact
					</Link>
				</div>
				<div className="profile__preferency">
					<Switch checked={user.isOpenToContact} color="primary" size="sm" onChange={switchEvent} />
					<p>I accept to be contacted by others collectors</p>
				</div>
				<Spacer y={1.5} />
				<div className="profile__helper">
					<h3 className="profile__helper-n0">Level 0</h3>
					<Spacer y={0.5} />
					<p>Permet à l’utilisateur de visiter le site et de pouvoir acheter et vendre des NFT</p>
					<Spacer y={1} />
					<h3 className="profile__helper-n1">Level 1</h3>
					<Spacer y={0.5} />
					<p>Permet à l’utilisateur de créer des NFT en renseignant son nom et prénom ainsi qu’un justificatif d’identité</p>
				</div>
				<Spacer y={0.5} />
			</div>
			<Modal aria-labelledby="modale update-profile" className="modaleUpdateProfile" closeButton blur open={isUpdateProfileVisible} onClose={hideUpdateProfile}>
				<UpdateProfile hideUpdateProfile={hideUpdateProfile} />
			</Modal>
		</main>
	);
};

export default Profil;
