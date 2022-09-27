import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { fetchCollectionsByCategory } from "../../../../store/actions/data";
import CollectionCard from "../../card/CollectionCard";
import SearchBarCollectionsByCategory from "../../searchBars/SearchBarCollectionsByCategory";

import "./styles.scss";

const CollectionsByCategory = () => {
	const { id } = useParams();

	const dispatch = useDispatch();

	const location = useLocation();

	const list = useSelector((state) => state.collections.list);

	const categoryList = useSelector((state) => state.categories.list);
	const displayedCategory = categoryList.find((category) => category.id == id);
	console.log("displayedCat >>>", displayedCategory);

	// SearchBar Order by
	const [sortList, setSortList] = useState([]);

	useEffect(() => {
		dispatch(fetchCollectionsByCategory(id));
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
				<h1>{displayedCategory.name} collections</h1>
				<SearchBarCollectionsByCategory sortAtoZ={sortAtoZ} sortZtoA={sortZtoA} />
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

export default CollectionsByCategory;
