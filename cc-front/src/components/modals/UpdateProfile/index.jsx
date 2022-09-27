import { Modal, Input, Text, Spacer } from "@nextui-org/react";
import { Mail } from "./Mail";
import { Password } from "./Password";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { updateUserField, updateProfile } from "../../../../store/actions/user";

import "./styles.scss";

const UpdateProfile = ({ hideUpdateProfile }) => {
	const user = useSelector((state) => state.user);

	const dispatch = useDispatch();

	//!Gestion erreurs
	const errors = useSelector((state) => state.error.auth);
	const [errorList, setErrorList] = React.useState();
	useEffect(() => {
		setErrorList([...errors]);
		setTimeout(() => {
			setErrorList("");
		}, 3000);
	}, [errors]);
	//Check si plus d'erreur et envoie l'ordre de fermeture de la modale
	const errorsCheck = useSelector((state) => state.error.errorsCheck);
	useEffect(() => {
		if (errorsCheck === true) {
			setIsUpdateProfileVisible(false);
		}
	}, [errorsCheck]);
	//!-----------

	const handleChange = (event) => {
		dispatch(updateUserField(event.target.value, event.target.name));
	};
	const updateProfileHandleSubmit = (event) => {
		console.log("update profil");
		event.preventDefault();
		dispatch(updateProfile());
	};

	return (
		<div className="modify-profile">
			<Modal.Header>
				<Text id="modal-title" size={20} style={{ fontWeight: "bold", color: "#d3d5dd" }}>
					Profile editor
				</Text>
			</Modal.Header>
			<Modal.Body>
				<Input type="text" clearable bordered fullWidth color="default" size="lg" label="Nickname" placeholder={user.nickname} name="nickname" onChange={handleChange} />
				<Input type="text" clearable bordered fullWidth color="default" size="lg" label="Name" placeholder={user.name} name="name" onChange={handleChange} />
				<Input type="text" clearable bordered fullWidth color="default" size="lg" label="Firstname" placeholder={user.firstname} name="firstname" onChange={handleChange} />
				<Spacer y={0.25} />
				<Input
					type="email"
					clearable
					bordered
					fullWidth
					color="default"
					size="lg"
					label="Email"
					placeholder={user.email}
					contentLeft={<Mail fill="currentColor" />}
					name="email"
					onChange={handleChange}
				/>
				<Spacer y={0.25} />
				<Input.Password
					type="password"
					clearable
					bordered
					fullWidth
					color="default"
					size="lg"
					placeholder="New password"
					contentLeft={<Password fill="currentColor" />}
					name="newPassword"
					onChange={handleChange}
				/>
				<Input.Password
					type="password"
					clearable
					bordered
					fullWidth
					color="default"
					size="lg"
					placeholder="Confirm new password"
					contentLeft={<Password fill="currentColor" />}
					name="confirmNewPassword"
					onChange={handleChange}
				/>
				<Spacer y={0.25} />
				<Input.Password
					type="password"
					clearable
					bordered
					fullWidth
					color="default"
					size="lg"
					placeholder="Actual password"
					contentLeft={<Password fill="currentColor" />}
					name="password"
					onChange={handleChange}
				/>
			</Modal.Body>
			{errorList ? <p className="modal-profile-error">{errors}</p> : ""}

			<Modal.Footer>
				<button auto className="button__cancel" onClick={hideUpdateProfile}>
					Cancel
				</button>
				<button auto className="button__update" onClick={updateProfileHandleSubmit}>
					Update
				</button>
			</Modal.Footer>
		</div>
	);
};

export default UpdateProfile;
