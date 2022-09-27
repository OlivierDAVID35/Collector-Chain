import "./styles.scss";

const AboutUs = () => {
	return (
		<div className="aboutUs">
			<h1>About Collector Chain</h1>
			<p className="aboutUs__p">Collector chain is an innovative NFT platform dedicated to collectors.</p>
			<p className="aboutUs__strong">Our ADN is to value collectibles thanks to blockchain and NFT technologies.</p>
			<p className="aboutUs__p">
				Based on blockchain reliability, you can create an unique NFT from your unique physical object, by replicating the serial number of your object in the NFT. Then, your NFT will allow
				you to enjoy an let the others enjoy your collection in your custom digital showcase.
			</p>
			<p className="aboutUs__strong">Our mission is to ease collectible market</p>
			<p className="aboutUs__p">By allowing owner to sell or to earn passive incomes from theirs NFTs, Collector Chain brings flexibility to the collectors in his collections management.</p>
			<p className="aboutUs__p">Collector Chain make the collectors enter into a new paradigm, in a trustness and easy way.</p>
			<div className="trombi">
				<div className="trombi__person">
					<div className="trombi__person__picture">
						<img src="https://ca.slack-edge.com/T03529RH0KH-U036KT27223-22e36d72b5ce-512" alt="pic" />
					</div>
					<p className='"trombi__person__name'>
						<p>
							<strong>Olivier</strong>
						</p>
						<p>Scrum master & Lead dev front</p>
					</p>
				</div>
				<div className="trombi__person">
					<div className="trombi__person__picture">
						<img src="https://ca.slack-edge.com/T03529RH0KH-U0367KDN7QF-e498d408183f-192" alt="pic" />
					</div>
					<p className='"trombi__person__name'>
						<p>
							<strong>Loïc</strong>
						</p>
						<p>Lead dev back</p>
					</p>
				</div>
				<div className="trombi__person">
					<div className="trombi__person__picture">
						<img src="https://ca.slack-edge.com/T03529RH0KH-U03MDDT4VP1-c536dd083ccd-512" alt="pic" />
					</div>
					<p className='"trombi__person__name'>
						<p>
							<strong>Matthieu</strong>
						</p>
						<p>Git master</p>
					</p>
				</div>
				<div className="trombi__person">
					<div className="trombi__person__picture">
						<img src="https://ca.slack-edge.com/T03529RH0KH-U038X6D5L5S-4b1ad06bd269-192" alt="pic" />
					</div>
					<p className='"trombi__person__name'>
						<p>
							<strong>Jérôme</strong>
						</p>
						<p>Product owner</p>
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
