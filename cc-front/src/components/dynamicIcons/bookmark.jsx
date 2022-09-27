import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNftToFavorite, removeNftToFavorite } from "../../../store/actions/user";

const BookmarkIcon = ({ nftId, favorisFound }) => {
	const dispatch = useDispatch();
	const [bookmarkFilled, setBookmarkFilled] = useState();

	const userId = useSelector((state) => state.user.id);

	const handleBookmark = () => {
		setBookmarkFilled(!bookmarkFilled);
		if (bookmarkFilled === true) {
			console.log("bookmark false");
			dispatch(removeNftToFavorite(userId, nftId));
		} else {
			console.log("bookmark true");
			dispatch(addNftToFavorite(userId, nftId));
		}
	};

	const favoris = favorisFound.find((nft) => nft === nftId);

	useEffect(() => {
		if (favoris) {
			setBookmarkFilled(true);
		} else {
			setBookmarkFilled(false);
		}
	}, []);

	return (
		<div>
			{bookmarkFilled === false ? (
				<ion-icon name="bookmarks-outline" onClick={handleBookmark}></ion-icon>
			) : (
				<ion-icon name="bookmarks-outline" onClick={handleBookmark} style={{ color: "red" }}></ion-icon>
			)}
		</div>
	);
};

export default BookmarkIcon;
