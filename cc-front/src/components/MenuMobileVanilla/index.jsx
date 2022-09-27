import React from "react";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Modal, Input, Row, Button, Text } from "@nextui-org/react";
import { Mail } from "../modals/Login/Mail";
import { Password } from "../modals/Login/Password";
import { changeUserField, logIn, logout, signUp } from "../../../store/actions/user";
import useOnClickOutside from "../hooks/useOnClickOutside";
import "./styles.scss";

const MenuMobileVanilla = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	const userMedia = useSelector((state) => state.user.media);

	useEffect(() => {
		setExploreVisibility(false);
		setUserVisibility(false);
	}, [location]);

	const [exploreVisibility, setExploreVisibility] = useState(false);
	const handleExploreVisibility = () => {
		setExploreVisibility(!exploreVisibility);
		setResourcesVisibility(false);
		setUserVisibility(false);
		// console.log(exploreVisibility);
	};

	const [userVisibility, setUserVisibility] = useState(false);
	const handleUserVisibility = () => {
		setUserVisibility(!userVisibility);
		setExploreVisibility(false);
		setResourcesVisibility(false);
		// console.log(userVisibility);
	};

	const [resourcesVisibility, setResourcesVisibility] = useState(false);
	const handleResourcesVisibility = () => {
		setResourcesVisibility(!resourcesVisibility);
		// console.log(resourcesVisibility);
	};

	const handleLogout = () => {
		console.log("handleLogout");
		setUserVisibility(false);
		dispatch(logout());
		navigate("/");
	};

	const email = useSelector((state) => state.user.email);
	const password = useSelector((state) => state.user.password);
	const passwordConfirm = useSelector((state) => state.user.passwordConfirm);
	const nickname = useSelector((state) => state.user.nickname);
	const isLogged = useSelector((state) => state.user.isLogged);

	const [loginVisible, loginSetVisible] = React.useState(false);
	const loginHandler = () => {
		loginSetVisible(true);
		setUserVisibility(false);
	};
	const loginCloseHandler = () => {
		loginSetVisible(false);
	};
	const [signupVisible, signupSetVisible] = React.useState(false);
	const signupHandler = () => {
		signupSetVisible(true);
		setUserVisibility(false);
	};
	const signupCloseHandler = () => {
		signupSetVisible(false);
	};

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

	// Fermeture modals when click outside
	const ref = useRef();

	useOnClickOutside(ref, () => {
		setUserVisibility(false);
		setExploreVisibility(false);
		setResourcesVisibility(false);
	});

	return (
		<div className="menuMobile" ref={ref}>
			<div className={exploreVisibility ? "menuMobile__lvl1--active" : "menuMobile__lvl1"} onClick={handleExploreVisibility}>
				Explore
			</div>
			<div className="menuMobile__lvl1 menuMobile__lvl1--create">
				<Link to={isLogged ? "/creation/createnewnft" : "/creation"}>Create</Link>
			</div>
			<div className={userVisibility ? "menuMobile__lvl1--active" : "menuMobile__lvl1"} onClick={handleUserVisibility}>
			{isLogged ? 
			<>
			My profil<img src={userMedia} alt="pic" /> 
			</>
			: "Login"}
			</div>

			{/* menu explore */}
			<div className={exploreVisibility ? "menuMobile__lvl2 menuMobile__lvl2--explore--visible" : "menuMobile__lvl2 menuMobile__lvl2--explore"}>
				<li className="menuMobile__lvl2__item" onClick={handleExploreVisibility}>
					<Link to="/">Home page</Link>
				</li>
				<li className="menuMobile__lvl2__item" onClick={handleExploreVisibility}>
					<Link to="/categories">Categories</Link>
				</li>
				<li className="menuMobile__lvl2__item" onClick={handleExploreVisibility}>
					<Link to="/collections">Collections</Link>
				</li>
				<li className="menuMobile__lvl2__item" onClick={handleExploreVisibility}>
					<Link to="/resources">Resources</Link>
				</li>
				<li className="menuMobile__lvl2__item" onClick={handleExploreVisibility}>
					<Link to="/events">Events</Link>
				</li>
				<li className="menuMobile__lvl2__item" onClick={handleExploreVisibility}>
					<Link to="/aboutus">About us</Link>
				</li>
			</div>

			{/* menu user */}
			<div className={userVisibility ? "menuMobile__lvl2 menuMobile__lvl2--user--visible" : "menuMobile__lvl2 menuMobile__lvl2--user"}>
				{isLogged ? (
					<>
						<li className="menuMobile__lvl2__item_user" onClick={handleUserVisibility}>
							<Link to="/showcase">My showcase</Link>
						</li>
						<li className="menuMobile__lvl2__item_user" onClick={handleUserVisibility}>
							<Link to="/favorites">My favorites</Link>
						</li>
						<li className="menuMobile__lvl2__item_user" onClick={handleUserVisibility}>
							<Link to="/profil">My profil</Link>
						</li>
						<li className="menuMobile__lvl2__item_user" onClick={handleLogout}>
							Logout
						</li>
					</>
				) : (
					<>
						<li className="menuMobile__lvl2__item" onClick={loginHandler}>
							Login
						</li>
						<li className="menuMobile__lvl2__item" onClick={signupHandler}>
							Signin
						</li>
					</>
				)}
			</div>

			{/* menu resources */}
			{resourcesVisibility ? (
				<>
					<div className={resourcesVisibility ? "menuMobile__lvl3--visible" : "menuMobile__lvl3"}>
						<li className="menuMobile__lvl3__item">
							<Link to="/resources">Blockchain and NFT</Link>
						</li>
						<li className="menuMobile__lvl3__item">
							<Link to="/resources">Enjoy your showcase</Link>
						</li>
						<li className="menuMobile__lvl3__item">
							<Link to="/resources">Earn passive incomes</Link>
						</li>
						<li className="menuMobile__lvl3__item">
							<Link to="/creation">Creation process</Link>
						</li>
					</div>
				</>
			) : (
				""
			)}

			{/* Modale login */}
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

export default MenuMobileVanilla;
