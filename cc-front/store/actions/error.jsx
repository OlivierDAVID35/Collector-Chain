export const SET_AUTH_ERROR = "SET_AUTH_ERROR";
export const SET_DATA_ERROR = "SET_DATA_ERROR";
export const SET_USER_ERROR = "SET_USER_ERROR";
export const SET_ERRORS_CHECK = "SET_ERRORS_CHECK";

export const setAuthError = (payload) => ({
	type: SET_AUTH_ERROR,
	payload,
});

export const setDataError = (payload) => ({
	type: SET_DATA_ERROR,
	payload,
});

export const setUserError = (payload) => ({
	type: SET_USER_ERROR,
	payload,
});

export const setErrorsCheck = (payload) => ({
	type: SET_ERRORS_CHECK,
	payload,
});
