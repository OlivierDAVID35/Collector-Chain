import React from "react";

const CertificatePicture = ({ uploadImage, deleteImage, picturesURL, validateStep2, isStep2Validated }) => {
	return (
		<div>
			<h3 className="title title--small">Pictures of the certificate of ownership</h3>
			<p className="text">The serial number have to be clearly visible. An automated verification will be proceed. Supported files :....</p>
			<p className="picture__title">Certificate of ownership</p>
			<div className="picture">
				{picturesURL.certificatePicture ? (
					<div className="picture__trash-icon" onClick={deleteImage}>
						<ion-icon className="picture__trash" name="trash-outline" id="certificatePicture" size="large"></ion-icon>
					</div>
				) : (
					""
				)}

				{!picturesURL.certificatePicture ? (
					<>
						<label htmlFor="certificatePictureInput" className="picture__add-icon">
							<ion-icon name="add-circle-outline" size="large"></ion-icon>
						</label>
						<input type="file" accept="image/*" name="certificatePicture" onChange={uploadImage} className="picture__input" id="certificatePictureInput" />
					</>
				) : (
					""
				)}

				{picturesURL.certificatePicture ? <img className="picture__image" src={picturesURL.certificatePicture} alt="Certificate picture" /> : ""}
			</div>

			<p className="text">The serial number identified on the document is conform</p>
			<div className="createNewNft__step1__validation">
				{isStep2Validated ? (
					<>
						<h3 className="title title--small">Pictures of the certificate of ownership </h3>
						<ion-icon className="iconValidation" green name="checkmark-done-circle"></ion-icon>
					</>
				) : (
					<button type="button" className="button button--validation" onClick={validateStep2}>
						Validate
					</button>
				)}
			</div>
		</div>
	);
};

export default CertificatePicture;
