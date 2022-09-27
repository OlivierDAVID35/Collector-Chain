import { useSelector } from "react-redux";
import { Dropdown, InputPicker } from "rsuite";
import "./styles.scss";

const SearchBarCollectionsByCategory = ({ sortPopularity0to1, sortPopularity1to0, sortAtoZ, sortZtoA }) => {
	// import des données des catégories pour alimenter les inputPicker
	const dataCollections = useSelector((state) => state.collections.list).map((item) => ({ label: item.name, value: item.name }));

	return (
		<div className="searchBarCategories">
			<InputPicker data={dataCollections} placeholder="Collections" />
			<Dropdown title="Order by" placement="bottomEnd">
				<Dropdown.Item onClick={sortAtoZ}>Name A to Z</Dropdown.Item>
				<Dropdown.Item onClick={sortZtoA}>Name Z to A</Dropdown.Item>
				{/* <Dropdown.Item onClick={sortPopularity0to1}>Popularity low to high</Dropdown.Item>
				<Dropdown.Item onClick={sortPopularity1to0}>Popularity high to low</Dropdown.Item>
				<Dropdown.Item>Download As...</Dropdown.Item> */}
			</Dropdown>
		</div>
	);
};

export default SearchBarCollectionsByCategory;
