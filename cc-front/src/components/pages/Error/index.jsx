import "./styles.scss";

const Error = () => {
	return (
		<>
			<div className="error">
				<p className="error__text1">The page you were looking for could not be found !</p>
				<p className="error__text2">It might have been removed, renamed or have never existed</p>
				{/* <img className="error__img" src="/404.jpg" alt="" /> */}
				<img className="error__img" src="/404Dark.jpg" alt="" />
			</div>
		</>
	);
};

export default Error;
