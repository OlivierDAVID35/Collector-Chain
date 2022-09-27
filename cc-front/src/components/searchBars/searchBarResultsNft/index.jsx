import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "@nextui-org/react";
import { AutoComplete, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";

const SearchBarResultsNft = () => {
	// 	const list = useSelector((state) => state.nfts.list);

	return (
		<div className="searchBarResultsNft">
			<form className="searchBarResultsNft__form">
				<InputGroup inside>
					{/* <AutoComplete data={data} /> */}
					<AutoComplete placeholder="Search NFT by properties or tag" />
					<InputGroup.Addon>
						<SearchIcon />
					</InputGroup.Addon>
				</InputGroup>
			</form>
			<div className="searchBarResultsNft__filters">
				<Dropdown>
					<Dropdown.Button flat>Property</Dropdown.Button>
					<Dropdown.Menu aria-label="Static Actions">
						<Dropdown.Item key="popularityToUp">Functionnality</Dropdown.Item>
						<Dropdown.Item key="popularityToDown">Finish</Dropdown.Item>
						<Dropdown.Item key="priceToUp">Rarity</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown>
					<Dropdown.Button flat>Tag</Dropdown.Button>
					<Dropdown.Menu aria-label="Static Actions">
						<Dropdown.Item key="popularityToUp">Timer</Dropdown.Item>
						<Dropdown.Item key="popularityToDown">Leather</Dropdown.Item>
						<Dropdown.Item key="priceToUp">Chronograph</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown>
					<Dropdown.Button flat>Order by</Dropdown.Button>
					<Dropdown.Menu aria-label="Static Actions">
						<Dropdown.Item key="">Popularity low to high</Dropdown.Item>
						<Dropdown.Item key="">Popularity high to low</Dropdown.Item>
						<Dropdown.Item key="">
							Price low to high
							{/* <p onClick={funcPriceLowToHigh}>Price low to high</p> */}
						</Dropdown.Item>
						<Dropdown.Item key="priceToDown">
							Price high to low
							{/* <p onClick={funcPriceHighToLow}>Price high to low</p> */}
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</div>
	);
};

export default SearchBarResultsNft;
