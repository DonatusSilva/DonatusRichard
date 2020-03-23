import React from 'react';
import './Skills.css'
const Skills = () => {
	return(
		<div className='skill-wrap'>
			<div className='skill-contain'>
				<h1>SKILLS<br /></h1>
			</div>
			<div className='skill-info'>
				<div className='skill-list'>
					<h2 className='skill-header'>Front-End<br /></h2>
					<p>HTML</p>
  					<p>CSS</p>
  					<p>JavaScript</p>
  					<p>React.js</p>
  					<p>Bootstrap4</p>
				</div>
				<div className='skill-list'>
					<h2 className='skill-header'>Back-End<br /></h2>
					<p>Node.js</p>
					<p>GIT</p>
				</div>	
				<div className='skill-list'>
					<h2 className='skill-header'>Database<br /></h2>
					<p>Postgres</p>
				</div>
			</div>
				
		</div>

		);

}

export default Skills;