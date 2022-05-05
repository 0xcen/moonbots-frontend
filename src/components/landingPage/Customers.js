import React from 'react';
import dcf from '../../img/customer-logos/dcf.png';
import astrals from '../../img/customer-logos/astrals.png';
import cyborgapes from '../../img/customer-logos/cyborgapes.png';
import dogetrack from '../../img/customer-logos/dogetrack.png';
import ehecatl from '../../img/customer-logos/ehecatl.png';
import mekkafroggo from '../../img/customer-logos/mekkafroggo.png';
import ubik from '../../img/customer-logos/ubik.png';

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
