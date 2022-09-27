import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Input, InputPicker } from "rsuite";

const SearchBarCollection = ({ sortPrice0to1, sortPrice1to0, sortRarity0to1, sortRarity1to0, sortAtoZ, sortZtoA, properties, tags }) => {
	// import des données des propriétés et tags issus de la liste des NFT affichés pour alimenter les inputPicker
	const dataProperties = properties.map((item) => ({ label: item, value: item }));
	const dataTags = tags.map((item) => ({ label: item, value: item }));

	return (
		<div className="searchBarFavorite">
			<form className="searchBarFavorite__form">
				<Input type="text" placeholder="Search NFT by property or tag" name="searchNFTField" />
			</form>
			<div className="searchBarFavorite__filters">
				<InputPicker data={dataProperties} placeholder="Properties" />
				<InputPicker data={dataTags} placeholder="Tags" />
				<Dropdown title="Order by" placement="bottomEnd">
					<Dropdown.Item onClick={sortRarity0to1}>Rarity low to high</Dropdown.Item>
					<Dropdown.Item onClick={sortRarity1to0}>Rarity high to low</Dropdown.Item>
					<Dropdown.Item onClick={sortPrice0to1}>Price low to high</Dropdown.Item>
					<Dropdown.Item onClick={sortPrice1to0}>Price high to low</Dropdown.Item>
					<Dropdown.Item onClick={sortAtoZ}>Name A to Z</Dropdown.Item>
					<Dropdown.Item onClick={sortZtoA}>Name Z to A</Dropdown.Item>
					<Dropdown.Item>Download As...</Dropdown.Item>
				</Dropdown>
			</div>
		</div>
	);
};

export default SearchBarCollection;
