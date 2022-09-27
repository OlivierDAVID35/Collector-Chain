import React from "react";
import { Link } from "react-router-dom";

const ProveYourself = ({ uploadImage, deleteImage, picturesURL, phase1Validation }) => {
	return (
		<div>
			<h3 className="title title--small">Prove yourself</h3>
			<p className="text">Take a picture of you, including the certificate of ownership and the object. An automated verification by be proceed</p>
			<p className="picture__title">Yourself picture</p>
			<div className="picture">
				{picturesURL.yourselfPicture ? (
					<div className="picture__trash-icon" onClick={deleteImage}>
						<ion-icon className="picture__trash" name="trash-outline" id="yourselfPicture" size="large"></ion-icon>
					</div>
				) : (
					""
				)}
				{!picturesURL.yourselfPicture ? (
					<>
						<label htmlFor="yourselfPictureInput" className="picture__add-icon">
							<ion-icon name="add-circle-outline" size="large"></ion-icon>
						</label>
						<input type="file" accept="image/*" name="yourselfPicture" onChange={uploadImage} className="picture__input" id="yourselfPictureInput" />
					</>
				) : (
					""
				)}
				{picturesURL.yourselfPicture ? <img className="picture__image" src={picturesURL.yourselfPicture} alt="Yourself picture" /> : ""}
			</div>
			<p className="text">Congratulation ! We can certify the information you've provided us</p>
			<button type="button" className="button button--validation" onClick={phase1Validation}>
				<Link to="/creation/createnewnft2">Continue to step 2</Link>{" "}
			</button>
		</div>
	);
};

export default ProveYourself;
