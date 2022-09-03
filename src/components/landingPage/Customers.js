import React from 'react';
import astralsLogo from '../../img/customer-logos/astrals.webp';
import dcfLogo from '../../img/customer-logos/dcf.webp';
import ubikLogo from '../../img/customer-logos/ubik.webp';
import bubblegooseLogo from '../../img/customer-logos/bubblegoose-logo.png';
import ballonsvilleLogo from '../../img/customer-logos/balloonsville.png';
import mekkaFroggo from '../../img/customer-logos/mekkafroggo.webp';

const Customers = () => {
	return (
		<>
			<div id="customers"></div>
			<div className="section-customers">
				<h3 className="">Our customers → Serious ⍺lpha</h3>
				<div className="customers-logo-carrusell">
					<img src={ubikLogo} alt="ubik logo" />
					<img src={ballonsvilleLogo} alt="balloonsville logo" />
					<img src={dcfLogo} alt="degen coin flip logo" />
					<img src={astralsLogo} alt="Astrals Logo" />
					<img src={bubblegooseLogo} alt="bubble goose ballers logo" />
					<img src={mekkaFroggo} alt="Degen Fat Cats logo" />
				</div>
			</div>
		</>
	);
};

export default Customers;
