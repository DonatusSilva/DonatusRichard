import React from 'react';
import './Navigation.css'
import Logo from './Logo1.png';
import Resume from './Donatus Silva Richard-Website.pdf';
const Navigation = () => {
	return(
		<nav className='sticky'>
			<div className='Nav-Logo'>
			<img className='Logo-Style' src={Logo} alt='Donatus Richard'/>
			</div>
			
			<div className='res grow'>
				<a href={Resume} target='blank'>
					<i className="fas fa-file fa-2x res-icon"></i>
				</a>
			</div>
			
		</nav>

		);

}

export default Navigation;