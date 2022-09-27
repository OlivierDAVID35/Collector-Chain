import instance from "../../utils/axios";
import { STORE_COLLECTIONS_BY_CATEGORY } from "../actions/createNft";
import {
	FETCH_CATEGORIES,
	FETCH_COLLECTIONS,
	FETCH_COLLECTIONS_BY_CATEGORY,
	FETCH_COLLECTION_BY_ID,
	FETCH_NFTS,
	FETCH_NFT_BY_COLLECTION_ID,
	FETCH_NFT_BY_ID,
	FETCH_PROPERTIES,
	FETCH_SEARCH,
	FETCH_TAGS,
	setCategories,
	setCollections,
	setDisplayedCollection,
	setDisplayNft,
	setNfts,
	setProperties,
	setSearch,
	setTags,
} from "../actions/data";

const dataMiddleware = (store) => (next) => async (action) => {
	switch (action.type) {
		case FETCH_CATEGORIES: {
			// console.log("entrée dans mdw data > fetchCategories");
			let result;
			let data;
			let resultErr;
			try {
				result = await instance.get("/categories");
			} catch (error) {
				console.log(error);
				resultErr = error.request.response;
			}
			if (result) {
				data = result.data;
			} else {
				data = resultErr;
			}
			store.dispatch(setCategories(data));
			break;
		}
		case FETCH_COLLECTIONS: {
			// console.log("entrée dans mdw data > fetchCollections avec limit >>>", action.limit);
			let result;
			let data;
			let resultErr;
			try {
				result = await instance.get(`/collections?limit=${action.limit}`);
			} catch (error) {
				console.log(error);
				resultErr = error.request.response;
			}
			if (result) {
				data = result.data;
			} else {
				data = resultErr;
			}
			store.dispatch(setCollections(data));
			break;
		}
		case FETCH_NFTS: {
			// console.log("entrée dans mdw data > fetchNfts");
			let result;
			let data;
			let resultErr;
			try {
				result = await instance.get("/nft");
			} catch (error) {
				console.log(error);
				resultErr = error.request.response;
			}
			if (result) {
				data = result.data;
			} else {
				data = resultErr;
			}
			store.dispatch(setNfts(data));
			break;
		}
		case FETCH_NFT_BY_COLLECTION_ID: {
			console.log("entrée dans mdw data > fetchNftByCategory");
			let result;
			let data;
			let resultErr;
			try {
				result = await instance.get(`/collections/${action.id}/nft`);
			} catch (error) {
				console.log(error);
				resultErr = error.request.response;
			}
			if (result) {
				data = result.data;
				store.dispatch(setNfts(data));
			} else {
				data = resultErr;
			}
			break;
		}
		case FETCH_NFT_BY_ID: {
			console.log("entrée dans mdw data > fetchNftByid", action.id);
			let result;
			let data;
			let resultErr;
			try {
				result = await instance.get(`/nft/${action.id}`);
			} catch (error) {
				console.log(error);
				resultErr = error.request.response;
			}
			if (result) {
				data = result.data;
			} else {
				data = resultErr;
			}
			store.dispatch(setDisplayNft(data));
			break;
		}
		case FETCH_COLLECTION_BY_ID: {
			// console.log("entrée dans mdw data > fetchCollectionByid", action.id);
			let result;
			let data;
			let resultErr;
			try {
				result = await instance.get(`/collection/${action.id}`);
			} catch (error) {
				console.log(error);
				resultErr = error.request.response;
			}
			if (result) {
				data = result.data;
			} else {
				data = resultErr;
			}
			store.dispatch(setDisplayedCollection(data));
			break;
		}
		case FETCH_COLLECTIONS_BY_CATEGORY: {
			// console.log("entrée dans mdw data > fetchCollectionsByCategories", action.id);
			let result;
			let data;
			let resultErr;
			try {
				result = await instance.get(`/categories/${action.id}/collections/`);
			} catch (error) {
				console.log(error);
				resultErr = error.request.response;
			}
			if (result) {
				data = result.data;
			} else {
				data = resultErr;
			}
			store.dispatch(setCollections(data));
			break;
		}
		case FETCH_PROPERTIES: {
			let result;
			let data;
			let resultErr;
			try {
				result = await instance.get("/property");
			} catch (error) {
				console.log(error);
				resultErr = error.request.response;
			}
			if (result) {
				data = result.data;
			} else {
				data = resultErr;
			}
			store.dispatch(setProperties(data));
			break;
		}
		case FETCH_TAGS: {
			let result;
			let data;
			let resultErr; 
			try {
				result = await instance.get("/tag");
			} catch (error) {
				console.log(error);
				resultErr = error.request.response;
			}
			if (result) {
				data = result.data;
			} else {
				data = resultErr;
			}
			store.dispatch(setTags(data));
			break;
		}
		case STORE_COLLECTIONS_BY_CATEGORY: {
			// const state
			// const id =
			// const {data} = await instance.get('/')
		}
		case FETCH_SEARCH:{
			const {data} = await instance.get(`search/?q=${action.payload}`)
			console.log('search result>>>', data);
			store.dispatch(setSearch(data))
		}

		default:
			next(action);
	}
};

export default dataMiddleware;
