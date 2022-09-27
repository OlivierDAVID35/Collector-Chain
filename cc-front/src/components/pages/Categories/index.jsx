import { useSelector } from "react-redux";
import CategoryCard from "../../card/CategoryCard";
import SearchBarCategories from "../../searchBars/SeachBarCategories";

import "./styles.scss";

const Categories = () => {
	const list = useSelector((state) => state.categories.list);
	console.log("category list from page >>>", list);

	return (
		<div className="categories">
			<div className="categories__underHeader">
				<h1>Explore Categories</h1>
				<SearchBarCategories />
			</div>
			<div className="categories__list">
				{/* display de la liste sous forme de carte */}
				{list.map((category) => {
					return <CategoryCard key={category.id} media={category.media} name={category.name} id={category.id} />;
				})}
			</div>
		</div>
	);
};

export default Categories;
