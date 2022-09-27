import React from "react";

const ObjectPicture = ({ uploadImage, deleteImage, picturesURL, isStep1Validated, validateStep1 }) => {
	return (
		<div>
			<div className="createNewNft__step1">
				<h2 className="title title--big">Process step 1 : Object and ownership validation</h2>
				<h3 className="title title--small">Pictures of the object</h3>
				<p className="text">
					Upload a overall picture of the object. And another one where the serial number have to be clearly visible. An automated verification will be proceed. Supported files :....
				</p>
				<p className="picture__title">Overall picture</p>
				<div className="picture">
					{picturesURL.overallPicture ? (
						<div className="picture__trash-icon" onClick={deleteImage}>
							<ion-icon className="picture__trash" name="trash-outline" id="overallPicture" size="large"></ion-icon>
						</div>
					) : (
						""
					)}
					{!picturesURL.overallPicture ? (
						<>
							<label htmlFor="OverallPictureInput" className="picture__add-icon">
								<ion-icon name="add-circle-outline" size="large"></ion-icon>
							</label>
							<input type="file" accept="image/*" name="overallPicture" onChange={uploadImage} className="picture__input" id="OverallPictureInput" />
						</>
					) : (
						""
					)}
					{picturesURL.overallPicture ? <img className="picture__image" src={picturesURL.overallPicture} alt="Overall picture" /> : ""}
				</div>
				<p className="picture__title">Serial picture</p>
				<div className="picture">
					{picturesURL.serialPicture ? (
						<div className="picture__trash-icon" onClick={deleteImage}>
							<ion-icon className="picture__trash" name="trash-outline" id="serialPicture" size="large"></ion-icon>
						</div>
					) : (
						""
					)}
					{!picturesURL.serialPicture ? (
						<>
							<label htmlFor="SerialPictureInput" className="picture__add-icon">
								<ion-icon name="add-circle-outline" size="large"></ion-icon>
							</label>
							<input type="file" accept="image/*" name="serialPicture" onChange={uploadImage} className="picture__input" id="SerialPictureInput" />
						</>
					) : (
						""
					)}
					{picturesURL.serialPicture ? <img className="picture__image" src={picturesURL.serialPicture} alt="Serial picture" /> : ""}
				</div>
				<p className="text">The serial number identified on the object is : 'xxxxx'</p>
				<p className="text">Validate or upload a new serial picture</p>
				<div className="createNewNft__step1__validation">
					{isStep1Validated ? (
						<>
							<h3 className="title title--small">Pictures of the object </h3>
							<ion-icon className="iconValidation" green name="checkmark-done-circle"></ion-icon>
						</>
					) : (
						<button type="button" className="button button--validation" onClick={validateStep1}>
							Validate
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default ObjectPicture;
