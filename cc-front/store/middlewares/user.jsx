import instance from "../../utils/axios";
import { NFT_CREATION } from "../actions/createNft";
import { ADD_NFT_TO_FAVORITE, FETCH_OWNED, REMOVE_NFT_TO_FAVORITE, setFavorites, setOwned, SET_SHOWCASE_ID } from "../actions/user";
import { setUserError } from "../actions/error";

const userMiddleware = (store) => (next) => async (action) => {
	switch (action.type) {
		case REMOVE_NFT_TO_FAVORITE: {
			let result;
			let data;
			let resultErr;
			try {
				await instance.delete(`/favorite/${action.userId}/${action.nftId}`);
				result = await instance.get(`/favorite/${action.userId}`);
			} catch (error) {
				console.log(error);
				resultErr = error.response.data.message;
			}
			if (result) {
				data = result.data;
				store.dispatch(setFavorites(data));
			} else {
				store.dispatch(setUserError(resultErr));
			}
			console.log("DATA_REMOVE >>>", data);
			break;
		}
		case ADD_NFT_TO_FAVORITE: {
			let result;
			let data;
			let resultErr;
			try {
				await instance.post(`/favorite/${action.userId}/${action.nftId}`);
				result = await instance.get(`/favorite/${action.userId}`);
			} catch (error) {
				console.log(error);
				resultErr = error.response.data.message;
			}
			if (result) {
				data = result.data;
				store.dispatch(setFavorites(data));
			} else {
				store.dispatch(setUserError(resultErr));
			}
			console.log("DATA_ADD >>>", data);
			break;
		}
		case NFT_CREATION: {
			const state = store.getState();
			const nftToCreate = state.createNft.nftToCreate;
			console.log("mdw >>> create nft avec :", nftToCreate);
			await instance.post("/nft", nftToCreate).then((response) => console.log(response));
			break;
		}
		case FETCH_OWNED: {
			const { data } = await instance.get(`/${action.id}/nft`);
			// console.log('owned nft >>>', data);
			store.dispatch(setOwned(data));
			break;
		}
		case SET_SHOWCASE_ID: {
			// await instance.patch(`nft/${action.nftId}`, {showcase_id:`${action.caseId}`})
			break;
		}

		default:
			next(action);
	}
};

export default userMiddleware;
