import React from 'react';
import './Contacts.css'
const Contacts = () => {
	return(
		<div className='contacts-wrap'>

			<div className='contacts-top'>

			<a href="#top">
				<i className="fas fa-angle-up fa-2x white grow" aria-hidden='true'></i>
			</a>
			</div>
			<div className='contacts-social'  >
				<a className='contacts-padding' href="https://www.linkedin.com/in/donatus-richard-b0842463/" target="blank">
					<i className="fab fa-linkedin-in fa-2x white grow"></i>
				</a>
				<a className='contacts-padding' href="#top">
					<i className="fab fa-github-square fa-2x white grow"></i>				</a>
				<a className='contacts-padding' href="mailto:richard.donatus1993@gmail.com">
					<i class="fas fa-envelope-square fa-2x white grow"></i>
				</a>
			</div>
				
		</div>

		);

}

export default Contacts;