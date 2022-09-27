import instance from "../../../utils/axios";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";

function useFetch(query, page, route, limit) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [list, setList] = useState([]);

	const sendQuery = useCallback(async () => {
		try {
			await setLoading(true);
			await setError(false);
			// const res = await axios.get(`https://api.opensea.io/api/v1/collections?offset=0&limit=300&q=${query}&page=${page}`);
			// const res = await axios.get(`https://api.opensea.io/api/v1/${route}?limit=${limit}&offset=${page}`);
			const res = await instance.get(`${route}?&limit=${limit}&offset=${page}`);
			await setList((prev) => [...new Set([...prev, ...res.data.map((d) => d)])]);
			setLoading(false);
			console.log("test");
		} catch (err) {
			setError(err);
		}
	}, [query, page]);

	useEffect(() => {
		sendQuery(query);
	}, [query, sendQuery, page]);

	return { loading, error, list };
}

export default useFetch;
