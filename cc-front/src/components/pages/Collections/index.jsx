import CollectionCard from "../../card/CollectionCard";
import SearchBarCollections from "../../searchBars/SearchBarCollectionsByCategory";

import React, { useState, useRef, useEffect, useCallback } from "react";
// import useFetch from "../../hooks/useFetchWithInput";
// import { Loader } from "rsuite";

import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCollections } from "../../../../store/actions/data";
import { useLocation } from "react-router-dom";

const Collections = () => {
	const dispatch = useDispatch();

	const location = useLocation();
	// // Infinite scroll
	// const route = "/collections";
	// const limit = 20;

	// const [query, setQuery] = useState("");
	// const [page, setPage] = useState(0);
	// const { loading, error, list } = useFetch(query, page, route, limit);
	// const loader = useRef(null);

	// // Si searchBar input
	// const handleChange = (e) => {
	// 	setQuery(e.target.value);
	// };

	// const handleObserver = useCallback((entries) => {
	// 	const target = entries[0];
	// 	if (target.isIntersecting) {
	// 		setPage((prev) => prev + 1);
	// 	}
	// }, []);

	// useEffect(() => {
	// 	const option = {
	// 		root: null,
	// 		rootMargin: "20px",
	// 		threshold: 0,
	// 	};
	// 	const observer = new IntersectionObserver(handleObserver, option);
	// 	if (loader.current) observer.observe(loader.current);
	// 	console.log(list.length);
	// }, [handleObserver]);

	const list = useSelector((state) => state.collections.list);

	// SearchBar Order by
	const [sortList, setSortList] = useState([]);

	useEffect(() => {
		// console.log(">>>>> useEffect Collections <<<<<<<<");
		dispatch(fetchCollections(''));
	}, [location]);

	useEffect(() => {
		if (list) {
			setSortList(list);
		}
	}, [list]);

	const sortAtoZ = () => {
		const sortAtoZ = [...list].sort((a, b) => a.name.localeCompare(b.name));
		setSortList(sortAtoZ);
	};

	const sortZtoA = () => {
		const sortZtoA = [...list].sort((a, b) => b.name.localeCompare(a.name));
		setSortList(sortZtoA);
	};

	return (
		<div className="collections">
			<div className="collections__underHeader">
				<h1>All collections</h1>
				<SearchBarCollections sortAtoZ={sortAtoZ} sortZtoA={sortZtoA} />
			</div>
			<div className="collections__list">
				{sortList.map((collection) => (
					<CollectionCard key={collection.id} media={collection.media} text={collection.name} id={collection.id} />
				))}

				{/* {loading && <Loader content="Loading..." />}
				{error && <p>Error!</p>}
				<div ref={loader} /> */}
			</div>
		</div>
	);
};

export default Collections;
