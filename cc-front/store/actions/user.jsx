export const CHANGE_USER_FIELD = "CHANGE_USER_FIELD";
export const LOG_IN = "LOG_IN";
export const SET_USER_DATA = "SET_USER_DATA";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const UPDATE_USER_FIELD = "UPDATE_USER_FIELD";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const IS_OPEN_TO_CONTACT = "IS_OPEN_TO_CONTACT";
export const SET_MEDIA_URL = "SET_MEDIA_URL";
export const DELETE_MEDIA_URL = "DELETE_MEDIA_URL";
export const SET_SHOWCASE_NFT = "SET_SHOWCASE_NFT";
export const REMOVE_NFT_FROM_TODISPLAY_LIST = "REMOVE_NFT_FROM_TODISPLAY_LIST";
export const REMOVE_FROM_SHOWCASE = "REMOVE_FROM_SHOWCASE";
export const ADD_NFT_TO_FAVORITE = "ADD_NFT_TO_FAVORITE";
export const REMOVE_NFT_TO_FAVORITE = "REMOVE_NFT_TO_FAVORITE";
export const SET_FAVORITES = "SET_FAVORITES";
export const FETCH_OWNED = 'FETCH_OWNED';
export const SET_OWNED = 'SET_OWNED';
export const SET_SHOWCASE_ID = 'SET_SHOWCASE_ID';

export const setShowcaseId = (nftId,caseId) => ({
  type: SET_SHOWCASE_ID,
  nftId,
  caseId
});

export const setOwned = (payload) => ({
  type: SET_OWNED,
  payload
});

export const fetchOwned = (id) => ({
  type: FETCH_OWNED,
  id
});

export const signUp = () => ({
	type: SIGNUP,
});

export const logout = () => ({
	type: LOGOUT,
});
export const setUserData = (data) => ({
	type: SET_USER_DATA,
	data,
});
export const logIn = () => ({
	type: LOG_IN,
});
export const changeUserField = (value, name) => ({
	type: CHANGE_USER_FIELD,
	value,
	name,
});
export const updateProfile = () => ({
	type: UPDATE_PROFILE,
});
export const updateUserField = (value, name) => ({
	type: UPDATE_USER_FIELD,
	value,
	name,
});
export const isOpenToContact = (value) => ({
	type: IS_OPEN_TO_CONTACT,
	value,
});
export const setMediaUrl = (name, value) => ({
	type: SET_MEDIA_URL,
	name,
	value,
});
export const deleteMediaUrl = (name) => ({
	type: DELETE_MEDIA_URL,
	name,
});
export const setShowcaseNftDisplayed = (media, id) => ({
	type: SET_SHOWCASE_NFT,
	media,
	id,
});
export const removeNftFromTodisplayList = (payload) => ({
	type: REMOVE_NFT_FROM_TODISPLAY_LIST,
	payload,
});
export const removeFromShowcase = (id, nft) => ({
	type: REMOVE_FROM_SHOWCASE,
	id,
	nft,
});
export const addNftToFavorite = (userId, nftId) => ({
	type: ADD_NFT_TO_FAVORITE,
	userId,
	nftId,
});
export const removeNftToFavorite = (userId, nftId) => ({
	type: REMOVE_NFT_TO_FAVORITE,
	userId,
	nftId,
});
export const setFavorites = (payload) => ({
	type: SET_FAVORITES,
	payload,
});
