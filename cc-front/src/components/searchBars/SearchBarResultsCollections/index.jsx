import "./styles.scss";
import { useSelector } from "react-redux";
import { Dropdown, InputPicker } from "rsuite";

const SearchBarResultsCollections = () => {
	
	 // import des données des catégories pour alimenter les inputPicker
	 const dataCategories = useSelector(state => state.categories.list).map(item => ({label: item, value: item }));
	 const dataCollections = useSelector(state => state.collections.list).map(item => ({label: item, value: item }));


	return (
		<div className="searchBarResultsCollections">
			<form className="searchBarResultsCollections__form">
				<InputPicker data={dataCollections} placeholder='Search collections by name'/>
			</form>
			<div className="searchBarResultsCollections__filters">
				<InputPicker data={dataCategories} placeholder='Categories'/>
				<Dropdown title="Order by" placement="bottomEnd">
					<Dropdown.Item>Popularity low to high</Dropdown.Item>
					<Dropdown.Item>Popularity high to low</Dropdown.Item>
					<Dropdown.Item>Download As...</Dropdown.Item>
					<Dropdown.Item>Price low to high</Dropdown.Item>
					<Dropdown.Item>Price high to low</Dropdown.Item>
				</Dropdown>
				
			</div>
		</div>
	);
};

export default SearchBarResultsCollections;
