import { setUserData, LOG_IN, SIGNUP, UPDATE_PROFILE, IS_OPEN_TO_CONTACT, setFavorites } from "../actions/user";
import { setAuthError, setErrorsCheck } from "../actions/error";
import instance from "../../utils/axios";

const authMiddleware = (store) => (next) => async (action) => {
	switch (action.type) {
		case LOG_IN: {
			const {
				user: { email, password },
			} = store.getState();
			// On utilise une instance d'axios qui est configurer avec un baseUrl me permettant de ne plus spéficier à chaque fois http://localhost:3000
			let result;
			let favorites;
			let data;
			let resultErr;
			try {
				result = await instance.post("/login", {
					email,
					password,
				});
			} catch (error) {
				console.log("ERROR>>>", error);
				resultErr = error.response.data.message;
			}
			if (result) {
				data = result.data;
				if (data.error) {
					store.dispatch(setAuthError(data.error));
				} else {
					// // Une fois connecter, je modifie les headers de base de mon instance axios
					// // Cela me permet de ne plus avoir à spéficier dans chaque requête ses headers
					// instance.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;

					// Je stock les informations user reçu au login dans mon store
					store.dispatch(setUserData(data));
					// Je stock les favoris du user reçu au login dans mon store
					favorites = await instance.get(`/favorite/${data.id}`);
					store.dispatch(setFavorites(favorites.data));
					// Pas d'erreur donc on passe ErrosCheck à true puis retour à false après 1s
					store.dispatch(setErrorsCheck(true));
					setTimeout(() => {
						store.dispatch(setErrorsCheck(false));
					}, 1000);
				}
			} else {
				console.log("LOGIN_ERROR>>>", resultErr);
				store.dispatch(setAuthError(resultErr));
			}

			break;
		}
		case SIGNUP: {
			console.log("entrée dans middleware signUp");
			const {
				user: { nickname, email, password, passwordConfirm },
			} = store.getState();
			let result;
			let data;
			let resultErr;
			try {
				result = await instance.post("/sign_up", {
					nickname,
					email,
					password,
					passwordConfirm,
				});
			} catch (error) {
				resultErr = error.response.data.message;
			}
			if (result) {
				data = result.data;
				if (data.error) {
					store.dispatch(setAuthError(data.error));
				} else {
					store.dispatch(setErrorsCheck(true));
					setTimeout(() => {
						store.dispatch(setErrorsCheck(false));
					}, 1000);
				}
			} else {
				store.dispatch(setAuthError(resultErr));
			}
			break;
		}
		case UPDATE_PROFILE: {
			console.log("entrée dans middleware update profile");
			const {
				user: { id, nickname, name, firstname, email, password },
			} = store.getState();
			console.log("ID_USER", id);
			let result;
			let data;
			let resultErr;
			try {
				result = await instance.patch(`/profil/${id}`, {
					nickname,
					name,
					firstname,
					email,
					password,
					newPassword,
					newPasswordConfirm,
				});
				// console.log("RESULT>>>");
			} catch (error) {
				// console.log("ERROR>>>", error.message);
				resultErr = error.message;
				console.log("RESULT_ERROR>>>", resultErr);
			}
			console.log("AVANT_IF>>>");

			if (result) {
				// data = result.data;
				// console.log("DATA >>>", data);
				if (data.error) {
					store.dispatch(setAuthError(data.error));
					console.log("DATA_ERROR>>>", data.error);
				} else {
					store.dispatch(setErrorsCheck(true));
					setTimeout(() => {
						store.dispatch(setErrorsCheck(false));
					}, 1000);
				}
			} else {
				store.dispatch(setAuthError(resultErr));
				console.log("RESULT_ERROR>>>", resultErr);
			}
			console.log("RESULT>>>", result);
			break;
		}
		case IS_OPEN_TO_CONTACT: {
			console.log("entrée dans middleware update isOpenToContact");
			const {
				user: { id, isOpenToContact },
			} = store.getState();
			console.log(isOpenToContact);

			let result;
			let data;
			let resultErr;
			try {
				result = await instance.patch(`/profil/${id}`, {
					isOpenToContact,
				});
			} catch (error) {
				resultErr = error.request.response;
			}
			if (result) {
				data = result.data;
			} else {
				store.dispatch(setAuthError(resultErr));
			}
			break;
		}
		default:
			next(action);
	}
};

export default authMiddleware;
