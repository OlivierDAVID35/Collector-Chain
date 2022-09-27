import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BookmarkIcon from "../../dynamicIcons/bookmark";
import HeartIcon from "../../dynamicIcons/heart";
import "./styles.scss";

const NftCard = ({ name, id, media, favorisFound }) => {
	const isLogged = useSelector((state) => state.user.isLogged);

	const shortedName = name.substring(0, 32);

	return (
		<>
			<div className="nftCard">
				<Link to={`/nft/${id}`} className="nftCard">
					<img src={media} alt="" className="nftCard__image" />
				</Link>
				<div className="nftCard__title">
					<div>{shortedName}</div>
					<div className="nftCard__icons">
						{isLogged ? (
							<>
								<BookmarkIcon nftId={id} favorisFound={favorisFound} />
								<HeartIcon />
							</>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default NftCard;
