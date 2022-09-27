import "../styles.scss";
import './styles.scss'
import { Dropdown, Input, InputPicker } from "rsuite";
import { useSelector } from "react-redux";

const SearchBarCategories = () => {

	// import des données des catégories pour alimenter les inputPicker
	const dataCategories = useSelector(state => state.categories.list).map(item => ({label: item.name, value: item.name }));
	console.log('dataCategories>>>', dataCategories);
	return (
		<div className="searchBarCategories">
			<InputPicker data={dataCategories} placeholder='Categories'/>
			<Dropdown title="Order by" placement="bottomEnd">
				<Dropdown.Item>Popularity low to high</Dropdown.Item>
				<Dropdown.Item>Popularity high to low</Dropdown.Item>
				<Dropdown.Item>Download As...</Dropdown.Item>
				<Dropdown.Item>Price low to high</Dropdown.Item>
				<Dropdown.Item>Price high to low</Dropdown.Item>
			</Dropdown>
		</div>
	);
};

export default SearchBarCategories;
