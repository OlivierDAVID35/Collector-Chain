import { useState } from "react";

const HeartIcon = () => {
	const [heartFilled, isHeartFilled] = useState(false);
	const fillIcon = () => {
		isHeartFilled(!heartFilled);
	};

	return <div>{heartFilled === false ? <ion-icon onClick={fillIcon} name="heart-outline"></ion-icon> : <ion-icon onClick={fillIcon} style={{ color: "red" }} name="heart"></ion-icon>}</div>;
};

export default HeartIcon;
