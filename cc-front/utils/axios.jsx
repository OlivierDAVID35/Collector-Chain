// Création d'une instance axios

import axios from "axios";

const instance = axios.create({
	//! Config locale
	// baseURL: "http://localhost:5000/api",
	//! Config serveur distant
	baseURL: "https://collector-chain.herokuapp.com/api",
});

export default instance;
