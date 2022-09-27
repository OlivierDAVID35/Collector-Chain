import { Link } from "react-router-dom";
import "./styles.scss";

const CategoryCard = ({ media, name, id }) => {
	return (
		<Link to={`/category/${id}/collections`} className="categoryCard">
				<img src={media} className="categoryCard__image"></img>
				<div className="categoryCard__title">{name}</div>
			
		</Link>
	);
};

export default CategoryCard;
