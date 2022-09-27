export const SET_NFTS = "SET_NFTS";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_COLLECTIONS = "SET_COLLECTIONS";
export const FETCH_COLLECTIONS = "FETCH_COLLECTIONS";
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const FETCH_NFTS = "FETCH_NFTS";
export const FETCH_NFT_BY_COLLECTION_ID = "FETCH_NFT_BY_COLLECTION_ID";
export const FETCH_NFT_BY_ID = "FETCH_NFT_BY_ID";
export const SET_DISPLAY_NFT = "SET_DISPLAY_NFT";
export const FETCH_COLLECTION_BY_ID = "FETCH_COLLECTION_BY_ID";
export const SET_DISPLAYED_COLLECTION = "SET_DISPLAYED_COLLECTION";
export const FETCH_COLLECTIONS_BY_CATEGORY = "FETCH_COLLECTIONS_BY_CATEGORY";
export const FETCH_PROPERTIES = "FETCH_PROPERTIES";
export const FETCH_TAGS = "FETCH_TAGS";
export const SET_PROPERTIES = "SET_PROPERTIES";
export const SET_TAGS = "SET_TAGS";
export const FETCH_SEARCH = 'FETCH_SEARCH';
export const SET_SEARCH = 'SET_SEARCH';
export const ERASE_SEARCH = 'ERASE_SEARCH';

export const eraseSearch = () => ({
  type: ERASE_SEARCH
});

export const setSearch = (payload) => ({
  type: SET_SEARCH,
  payload
});

export const fetchSearch = (payload) => ({
  type: FETCH_SEARCH,
  payload
});


export const setTags = (payload) => ({
	type: SET_TAGS,
	payload,
});

export const setProperties = (payload) => ({
	type: SET_PROPERTIES,
	payload,
});

export const fetchTags = () => ({
	type: FETCH_TAGS,
});

export const fetchProperties = () => ({
	type: FETCH_PROPERTIES,
});

export const fetchCollectionsByCategory = (id) => ({
	type: FETCH_COLLECTIONS_BY_CATEGORY,
	id,
});

export const setDisplayedCollection = (payload) => ({
	type: SET_DISPLAYED_COLLECTION,
	payload,
});

export const fetchCollectionById = (id) => ({
	type: FETCH_COLLECTION_BY_ID,
	id,
});

export const setDisplayNft = (payload) => ({
	type: SET_DISPLAY_NFT,
	payload,
});

export const fetchNftById = (id) => ({
	type: FETCH_NFT_BY_ID,
	id,
});

export const fetchNftByCollectionId = (id) => ({
	type: FETCH_NFT_BY_COLLECTION_ID,
	id,
});

export const fetchNfts = () => ({
	type: FETCH_NFTS,
});

export const fetchCategories = () => ({
	type: FETCH_CATEGORIES,
});

export const setCollections = (payload) => ({
	type: SET_COLLECTIONS,
	payload,
});

export const setCategories = (payload) => ({
	type: SET_CATEGORIES,
	payload,
});

export const setNfts = (payload) => ({
	type: SET_NFTS,
	payload,
});

export const fetchCollections = (limit) => ({
	type: FETCH_COLLECTIONS,
	limit,
});
