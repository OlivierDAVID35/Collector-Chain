import { Panel, PanelGroup } from "rsuite";
import { fetchCollectionById, fetchNftByCollectionId } from "../../../../store/actions/data";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import NftCard from "../../card/NftCard";
import SearchBarCollection from "../../searchBars/SearchBarCollection";
import "./styles.scss";
import Share from "../../dynamicIcons/share";

const Collection = ({ url }) => {
	const dispatch = useDispatch();
	
	const { id } = useParams();
	// console.log("id de la collection >>>", id);
	
	//! Gestion donnée en local
	// console.log('filtered collection>>>', selectedCollection)
	
	//! Gestion données depuis API
	useEffect(() => {
		dispatch(fetchNftByCollectionId(id));
		dispatch(fetchCollectionById(id));
	}, []);

	const list = useSelector((state) => state.nfts.list);
	const collection = useSelector((state) => state.collections.displayedCollection);
	//!Création des liste de props et tag
	// Propriétés
	let globalPropList = [];
	let globalTagList = [];
	if(list){
		const a = list.map((nft) => nft.property);
		// console.log('list>>>>',list);
		// console.log('a >>>>>',a);
		// on utilise la destructuration pour concaténer tableau par tableau dans globalPropList
		a.map((propArray) => {
			globalPropList = [...globalPropList, ...propArray];
		});
		// console.log('globalPropList>>>', globalPropList);
	
		// Idem avec Tag
		const b = list.map((nft) => nft.tag);
		b.map((tagArray) => {
			globalTagList = [...globalTagList, ...tagArray];
		});
		// console.log('globalTagList>>>', globalTagList);
	}

	
	//! SearchBar Order by
	const selectedCollection = list.filter((nft) => nft.collection_id == id);
	const [sortList, setSortList] = useState([]);
	
	useEffect(() => {
		if (list) {
			setSortList(selectedCollection);
		}
	}, [list]);
	

	const sortPrice0to1 = () => {
		const sortPrice0to1 = [...selectedCollection].sort((a, b) => a.price - b.price);
		setSortList(sortPrice0to1);
	};

	const sortPrice1to0 = () => {
		const sortPrice1to0 = [...selectedCollection].sort((a, b) => b.price - a.price);
		setSortList(sortPrice1to0);
	};
	const sortRarity0to1 = () => {
		const sortRarity0to1 = [...selectedCollection].sort((a, b) => a.rarity - b.rarity);
		setSortList(sortRarity0to1);
	};

	const sortRarity1to0 = () => {
		const sortRarity1to0 = [...selectedCollection].sort((a, b) => b.rarity - a.rarity);
		setSortList(sortRarity1to0);
	};

	const sortAtoZ = () => {
		const sortAtoZ = [...list].sort((a, b) => a.name.localeCompare(b.name));
		setSortList(sortAtoZ);
	};

	const sortZtoA = () => {
		const sortZtoA = [...list].sort((a, b) => b.name.localeCompare(a.name));
		setSortList(sortZtoA);
	};
	//-----------------
	//! Récupération des id des nft affichés
	const listId = list.map((item) => item.id);

	//! Récupération des id des nft en favoris
	const favorites = useSelector((state) => state.user.favorites);
	const favorisId = favorites.map((item) => item.id);

	//! Récupération d'un tableau des id identiques (comparaison id nft & favoris)
	const favorisFound = listId.filter((value) => favorisId.includes(value));

	//----------------

	return (
		<div className="collection">
			<div className="collection__title">
				<img className="collection__title__image" src={collection.media} />
				<div className="collection__title__text">
					<div className="collection__title__text__main">
						<div className="collection__title__text__main__head">
							<h1>{collection.name}</h1>
							<Share url={url} />
						</div>
						{/* <Panel header="Description" collapsible>
                        <p>{collection.description}</p>
                    </Panel> */}
					</div>
					<div className="collection__title__text__stats">
						<div className="collection__title__text__stats__items">
							<h3>items</h3>
							<p>{list.length}</p>
						</div>
						<div className="collection__title__text__stats__owners">
							<h3>owners</h3>
							<p>98</p>
						</div>
						<div className="collection__title__text__stats__floorPrice">
							<h3>Floor price</h3>
							<p>{Math.min.apply(null, list.price)}</p>
						</div>
					</div>
				</div>
			</div>
			<SearchBarCollection
				sortPrice0to1={sortPrice0to1}
				sortPrice1to0={sortPrice1to0}
				sortRarity0to1={sortRarity0to1}
				sortRarity1to0={sortRarity1to0}
				sortAtoZ={sortAtoZ}
				sortZtoA={sortZtoA}
				properties={globalPropList}
				tags={globalTagList}
			/>
			<div className="collection__list">
				{/* display de la liste sous forme de carte */}
				{sortList.map((nft) => {
					return <NftCard key={nft.id} {...nft} favorisFound={favorisFound} />;
				})}
			</div>
		</div>
	);
};

export default Collection;
