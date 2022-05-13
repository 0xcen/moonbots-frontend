import React from 'react';
import dcf from '../../img/customer-logos/dcf.webp';
import astrals from '../../img/customer-logos/astrals.webp';
import cyborgapes from '../../img/customer-logos/cyborgapes.webp';
import dogetrack from '../../img/customer-logos/dogetrack.webp';
import ehecatl from '../../img/customer-logos/ehecatl.webp';
import mekkafroggo from '../../img/customer-logos/mekkafroggo.webp';
import ubik from '../../img/customer-logos/ubik.webp';

const Customers = () => {
	return (
		<>
			<div id="customers"></div>
			<div className="section-customers">
				<h3 className="">Our customers → Serious ⍺lpha</h3>
				<div className="customers-logo-carrusell">
					<img src={cyborgapes} alt="" />
					<img src={dogetrack} alt="" />
					<img src={astrals} alt="" />
					<img src={ubik} alt="" />
					<img src={dcf} alt="" />
					<img src={mekkafroggo} alt="" />
					<img src={ehecatl} alt="" />
				</div>
			</div>
		</>
	);
};

export default Customers;
