import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import "semantic-ui-css/semantic.min.css";
import Header from "../Header";
import Footer from "../Footer";
import MenuMobile from "../MenuMobile";
import "./reset.scss";
import "./styles.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Categories from "../pages/Categories";
import CollectionsByCategory from "../pages/CollectionsByCategory";
import Collections from "../pages/Collections";
import Collection from "../pages/Collection";
import Error from "../pages/Error";
import { useEffect } from "react";
import Nft from "../pages/nft";
import Events from "../pages/Events";
import { useDispatch, useSelector } from "react-redux";
import Results from "../pages/Results";
// import Darkmode from "darkmode-js";
import CreateNewNft1 from "../pages/CreateNewNft1";
import CreateNewNft2 from "../pages/CreateNewNft2";
import Profil from "../pages/Profil";
import Showcase from "../pages/Showcase";
import Favorites from "../pages/Favorites";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import Term from "../pages/Term";
import Resources from "../pages/Resources";
import Creation from "../pages/Creation";
import { fetchCategories, fetchCollections, fetchNfts, fetchProperties, fetchTags } from "../../../store/actions/data";
import MenuMobileVanilla from "../MenuMobileVanilla";

function App() {
	const dispatch = useDispatch();
	//DARK MODE
	// const options = {
	// 	// top: "0px", // default: '32px'
	// 	right: "-8px", // default: '32px'
	// 	// left: "8px", // default: 'unset'
	// 	time: "0.5s", // default: '0.3s'
	// 	mixColor: "#fff", // default: '#fff'
	// 	backgroundColor: "#fff", // default: '#fff'
	// 	buttonColorDark: "transparent", // default: '#100f2c'
	// 	buttonColorLight: "transparent", // default: '#fff'
	// 	saveInCookies: false, // default: true,
	// 	label: "🌓", // default: ''
	// 	autoMatchOsTheme: true, // default: true
	// };
	// const darkmode = new Darkmode(options);
	// darkmode.showWidget();
	// -----------------

	// fonction pou remonter en haut de l apage automatiquement à chaque changement d'url
	// 1 - on recupère l'url
	const location = useLocation();
	// console.log("location>>>>", location);
	// 2 - on lance l'action à chaque changement d'url
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	// Chargement initial de toutes les infos nécessaires
	useEffect(() => {
		dispatch(fetchCategories());
		dispatch(fetchProperties());
		dispatch(fetchTags());
	}, []);

	const locationUrl = location.pathname;
	//! BDD locale pour test
	// récupération des nfts en cours d'affichage pour les envoyer a la page nft
	// const nfts = useSelector((state) => state.nfts.list);

	//! Récupération données depuis BDD distante
	// Ajout d'une condition pour appliquer la limite de fetchCollections uniquement sur la homepage.
	// Ajouter au tableau pathTable les routes concernés
	const pathTable = ["/"];
	if (pathTable.includes(location.pathname)) {
		// location.pathname == "/")
		// console.log("pathTable OK");
		// console.log(">>>>> useEffect App <<<<<<<<");
		dispatch(fetchCollections(10));
	}
	const pathTable2 = ["/creation/createnewnft2"];
	if (pathTable2.includes(location.pathname)) {
		// location.pathname == "/")
		// console.log("pathTable2 OK");
		// console.log(">>>>> useEffect App <<<<<<<<");
		dispatch(fetchCollections(""));
	}
	// useEffect(() => {
	// 	// dispatch(fetchNfts())
	// },[location])

	return (
		<div className="app">
			<NextUIProvider>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/categories" element={<Categories />} />
					<Route path="/category/:id/collections" element={<CollectionsByCategory />} />
					<Route path="/collections" element={<Collections />} />
					<Route path="/collection/:id" element={<Collection url={locationUrl} />} />
					<Route
						path="/nft/:id"
						element={
							<Nft
								url={locationUrl}
								//  nfts={nfts}
							/>
						}
					/>
					<Route path="/events" element={<Events />} />
					<Route path="/results" element={<Results />} />
					<Route path="/profil" element={<Profil />} />
					<Route path="/creation" element={<Creation />} />
					<Route path="/creation/createnewnft" element={<CreateNewNft1 />} />
					<Route path="/creation/createnewnft2" element={<CreateNewNft2 />} />
					<Route path="/showcase" element={<Showcase />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/aboutus" element={<AboutUs />} />
					<Route path="/term" element={<Term />} />
					<Route path="/resources" element={<Resources />} />
					<Route path="*" element={<Error />} />
				</Routes>
				<Footer />
				<MenuMobileVanilla />
			</NextUIProvider>
		</div>
	);
}

export default App;
