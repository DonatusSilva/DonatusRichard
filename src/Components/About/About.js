import React from 'react';
import DonatusImg from './DonatusImg.jpg'
import './About.css'
const About = () => {
	return(
		<div className='wrap'>
			<div className='contain'>
				<h1>ABOUT ME<br /></h1>
			</div>
			<div className='ipsem'>
				<div className='ipsem-img'>
					<img className='about-Img'  src={DonatusImg} alt="Donatus Silva Richard"/>
				</div>
				<div className='ipsem-p'>
				<p >I'm a self-taught software developer, 
				and while I've built some things on my own, I very much 
				look forward to becoming part of a team of like-minded individuals. 
				I do my best work in an environment that requires me to extend and rise to the occasion. 
				I'd love to connect, and would appreciate the opportunity to show you how I could be a valuable asset to your 
				team and its goals.<br /></p>
				</div>
			</div>
				
		</div>

		);

}

export default About;