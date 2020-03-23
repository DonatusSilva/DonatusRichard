import React from 'react';
import './Projects.css'
import BackgroundGenerator from './BackgroundGenerator.JPG';
import FaceDetectionApp from './FaceDetectionApp.JPG';
import FriendFinder from './FriendFinder.JPG';
const Projects = () => {
	return(
		<div className='Project'>
			<div className='pa4'>
				<h1>PROJECTS<br/></h1>
			</div>
			<div className='row shadow-1'>
				<div className='box'>
					<div className='heading1 black'>
						<h2>Face Detection App<br/></h2>
					</div>
					<div className='content'>
						<p >An interactive web application that 
						detects faces on images using a machine 
						learning API. Users can sign up to use the 
						application and they are ranked based on the 
						number of times the app has been used. 
						</p>
						<p>Front-end: HTML, CSS, React.js<br/>
						Back-end: Node.js,Express.js,PostgreSQL	
						</p>

						<a href="https://github.com/DonatusSilva/Face-Detection-App.git" target='blank' className='pointer'> Source Code (Front-end)</a><br/>
						<a href="https://github.com/DonatusSilva/Face-Detection-App-API.git" target='blank'className='pointer'> Source Code (Back-end)</a>

					</div>
				</div>

				<div className='image-box'>
					<img className='image-style grow' alt='Donatus Silva Richard' src={FaceDetectionApp}/>
				</div>
			</div>
			<div className='row shadow-1'>
				<div className='box'>
					<div className='heading1 black'>
						<h2>Friend Finder<br/></h2>
					</div>
					<div className='content'>
						<p>A responsive web application that can be used 
						to search through your friend list and get their 
						contact information.<br /></p>
						<p>Front-end: HTML, CSS, React.js </p>
						<a href="https://github.com/DonatusSilva/Friend-Finder.git" target='blank' className='pointer'> Source Code (Front-end)</a>

					</div>
				</div>

				<div className='image-box'>
					<img className='image-style grow' alt='Donatus Silva Richard' src={FriendFinder}/>
				</div>
			</div>
			<div className='row shadow-1'>
				<div className='box'>
					<div className='heading1 black'>
						<h2>Background Generator<br/></h2>
					</div>
					<div className='content'>
						<p>A responsive app that changes the background color of the page
						based on the user input. It aslo displays the current background color information.<br/></p>
						<p>Front-end: HTML, CSS, React.js </p>
						<a href="https://github.com/DonatusSilva/Background-Generator.git"target='blank' className='pointer'> Source Code (Front-end)</a>

					</div>
				</div>

				<div className='image-box'>
					<img className='image-style grow' alt='Donatus Silva Richard' src={BackgroundGenerator}/>
				</div>
			</div>
				
		</div>

		);

}

export default Projects;