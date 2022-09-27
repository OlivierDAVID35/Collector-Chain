import React from "react";
import "./styles.scss";
import { Nav } from "rsuite/";
import "rsuite/dist/rsuite.min.css";
import { Link, useLocation } from "react-router-dom";
import { Modal, Input, Row, Text } from "@nextui-org/react";

import MenuExplore from "./MenuExplore";
import { Mail } from "../modals/Login/Mail";
import { Password } from "../modals/Login/Password";

import "./styles.scss";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeUserField, logIn, logout, signUp } from "../../../store/actions/user";
import { useState } from "react";
import { useEffect } from "react";

const MenuMobile = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const email = useSelector((state) => state.user.email);
	const password = useSelector((state) => state.user.password);
	const passwordConfirm = useSelector((state) => state.user.passwordConfirm);
	const nickname = useSelector((state) => state.user.nickname);
	const isLogged = useSelector((state) => state.user.isLogged);

	//!Gestion erreurs
	const errors = useSelector((state) => state.error.auth);
	const [errorList, setErrorList] = React.useState();
	useEffect(() => {
		setErrorList([...errors]);
		setTimeout(() => {
			setErrorList("");
		}, 3000);
	}, [errors]);
	//Check si plus d'erreur et envoie l'ordre de fermeture aux modales
	const errorsCheck = useSelector((state) => state.error.errorsCheck);
	useEffect(() => {
		if (errorsCheck === true) {
			loginSetVisible(false);
			signupSetVisible(false);
		}
	}, [errorsCheck]);
	//!-----------

	const [loginVisible, loginSetVisible] = React.useState(false);
	const loginHandler = () => {
		loginSetVisible(true);
	};
	const loginCloseHandler = () => {
		loginSetVisible(false);
		setErrorList("");
	};
	const [signupVisible, signupSetVisible] = React.useState(false);
	const signupHandler = () => signupSetVisible(true);
	const signupCloseHandler = () => {
		signupSetVisible(false);
	};

	// Gestion de l'affichage/disparition du sous menu user
	const [userMenuVisible,setUserMenuVisible] = useState(false);
	// console.log('user menu visibility>>>',userMenuVisible);
	const userMenuOn = () => {
		setUserMenuVisible(true)
	}
	const userMenuOff = ()=> {
		setUserMenuVisible(false)
	}
	// fin gestion affichage sous menu user

	const handleChange = (event) => {
		dispatch(changeUserField(event.target.value, event.target.name));
	};

	const loginHandleSubmit = (event) => {
		console.log("test submit");
		event.preventDefault();
		dispatch(logIn());
		navigate("/");
	};

	const signupHandleSubmit = (event) => {
		console.log("signup");
		event.preventDefault();
		dispatch(signUp());
		loginSetVisible(true);
	};

	const handleLogout = () => {
		console.log("handleLogout");
		dispatch(logout());
		navigate("/");
	};

	return (
		<div className="menu-mobile">
			<Nav className="menu-mobile-nav">
				<MenuExplore className="menu-explore" placement={"topStart"} />
				<Nav.Item>
					<Link className="menu-mobile-nav-create" to={isLogged ? "/creation/createnewnft" : "/creation"} style={{ fontWeight: "bold" }}>
						Create
					</Link>
				</Nav.Item>
				<Nav.Menu
					title="User"
					className="menu-user"
					// icon={<UserInfoIcon />}
					placement="topEnd"
					onOpen={userMenuOn}
					onClose={userMenuOff}
				>
					{isLogged ? (
						<>
							<Nav.Item className="menu-user-item">
								<Link to="/showcase">My showcase</Link>
							</Nav.Item>
							<Nav.Item className="menu-user-item">
								<Link to="/favorites">My favorites</Link>
							</Nav.Item>
							<Nav.Item className="menu-user-item">
								<Link to="/profil">My profil</Link>
							</Nav.Item>
							<Nav.Item className="menu-user-item" onClick={handleLogout}>
								Logout
							</Nav.Item>
						</>
					) : (
						<>
							<Nav.Item onClick={loginHandler} className="menu-user-item">
								Login
							</Nav.Item>
							<Nav.Item onClick={signupHandler}>Signup</Nav.Item>
						</>
					)}
				</Nav.Menu>
			</Nav>
			<Modal className="modal-login" closeButton blur open={loginVisible} onClose={loginCloseHandler} aria-labelledby="modal-login">
				<Modal.Header>
					<Text id="modal-login" size={20} style={{ fontWeight: "bold", color: "#d3d5dd" }}>
						Login
					</Text>
				</Modal.Header>
				<Modal.Body>
					<Input
						type="email"
						learable
						bordered
						fullWidth
						color="primary"
						size="lg"
						placeholder="Email"
						contentLeft={<Mail fill="currentColor" />}
						name="email"
						value={email}
						onChange={handleChange}
					/>
					<Input
						type="password"
						clearable
						bordered
						fullWidth
						color="primary"
						size="lg"
						placeholder="Password"
						contentLeft={<Password fill="currentColor" />}
						name="password"
						value={password}
						onChange={handleChange}
					/>
					<Row justify="space-between">
						<Text size={16} style={{ color: "#ff9c11" }}>
							Forgot password?
						</Text>
					</Row>
				</Modal.Body>
				{errorList ? <p className="modal-login-error">{errors}</p> : ""}
				<Modal.Footer className="modal-login-footer">
					<button className="button__close" auto flat color="error" onClick={loginCloseHandler}>
						Close
					</button>
					<button className="button__signin" auto onClick={loginHandleSubmit}>
						Sign in
					</button>
				</Modal.Footer>
			</Modal>
			<Modal className="modal-signup" closeButton blur open={signupVisible} onClose={signupCloseHandler} aria-labelledby="modal-signup">
				<Modal.Header>
					<Text id="modal-signup" size={20} style={{ fontWeight: "bold", color: "#d3d5dd" }}>
						Signup
					</Text>
				</Modal.Header>
				<Modal.Body>
					<Input type="text" clearable bordered fullWidth color="primary" size="lg" placeholder="nickname" name="nickname" value={nickname} onChange={handleChange} />
					<Input
						type="email"
						clearable
						bordered
						fullWidth
						color="primary"
						size="lg"
						placeholder="Email"
						contentLeft={<Mail fill="currentColor" />}
						name="email"
						value={email}
						onChange={handleChange}
					/>
					<Input
						type="password"
						clearable
						bordered
						fullWidth
						color="primary"
						size="lg"
						placeholder="Password"
						contentLeft={<Password fill="currentColor" />}
						name="password"
						value={password}
						onChange={handleChange}
					/>
					<Input
						type="password"
						clearable
						bordered
						fullWidth
						color="primary"
						size="lg"
						placeholder="Confirm password"
						contentLeft={<Password fill="currentColor" />}
						name="passwordConfirm"
						value={passwordConfirm}
						onChange={handleChange}
					/>
				</Modal.Body>
				{errorList ? <p className="modal-login-error">{errors}</p> : ""}
				<Modal.Footer>
					<button className="button__close" auto flat color="error" onClick={signupCloseHandler}>
						Close
					</button>
					<button className="button__signup" auto onClick={signupHandleSubmit}>
						Sign up
					</button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default MenuMobile;
