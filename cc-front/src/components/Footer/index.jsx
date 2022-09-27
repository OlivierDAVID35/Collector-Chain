import "./styles.scss";
import { useDispatch } from "react-redux";
import { logIn } from "../../../store/actions/user";
import {Link} from "react-router-dom"

const Footer = () => {
	// code temporaire pour test fonction login
	const dispatch = useDispatch();

	const handleLogin = () => {
		dispatch(logIn());
	};

	return (
		<div className="footer">
			<div className="footer__menu">
				<p><Link to='/aboutus' >About us</Link></p>
				<p><Link to='/term' >Term</Link></p>
				<p><Link to='/contact'>Contact</Link></p>
			</div>
			<div className="footer__copyright">Collector Chain @2022</div>
		</div>
	);
};

export default Footer;
