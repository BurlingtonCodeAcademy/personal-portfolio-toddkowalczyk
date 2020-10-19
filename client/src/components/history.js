import React from 'react'
import downloadImage from '../images/download-image.jpg'

function History() {

	return (

		<div>
			
			<h1 id="resume-name">Todd Kowalczyk</h1>

			<div class='resume-wrapper'>
				<p>Skills:</p>
				<ul class='skills'>
					<li>Project Management Professional (PMP)</li>
					<li>HTML, CSS, JavaScript</li>
					<li>React, Vue</li>
					<li>SQL, PLSQL</li>
				</ul>
			</div>

			<div class="resume-wrapper">
				<div class="project">
					<p class='project-date'>October 2018 - June 2020</p>
					<p class='project-name'>Work Management</p>
					<p class='project-desc'>Successfully led and managed the implementaiton of an enterprise-wide work management application for GMP's transmission and distribution operations team.  Responsibilities included technology selection, procurement, vendor management, and overall day to day oversight of IT resources involved in project delivery.</p>
				</div>
				<div class="project">
					<p class='project-date'>June 2017 - October 2018</p>
					<p class='project-name'>Salesforce</p>
					<p class='project-desc'>Successfully implemented Salesforce's cloud-based solution to support GMP's Energy Innovation Center objectives.  Responsibilities included project planning and execution. </p>
				</div>
				<div class="project">
					<p class='project-date'>June 2013 - March 2015</p>
					<p class='project-name'>SCADA Consolidation</p>
					<p class='project-desc'>Successfully consolidated the legacy CVPS and legacy GMP SCADA applications that are used to manage electrical distribution devices into a single system.  Responsibilities included project planning, vendor negotiations and procurement, vendor management, and coordination of all internal IT project activities. </p>
				</div>
				<div class="project">
					<p class='project-date'>March 2008 - April 2010</p>
					<p class='project-name'>Statewide Radio Network</p>
					<p class='project-desc'>Worked closely with VELCO, the state's electric transmission company, to deploy a new wireless radio network to allow for communication across GMP's service territory.  Responsiblities included coordinating GMP resource, issue troubleshooting and resolution and creation of regular status updates for GMP leadership. </p>
				</div>
				<div class="project">
					<p class='project-date'>March 2008 - June 2013</p>
					<p class='project-name'>Department of Energy Smart Grid Grant</p>
					<p class='project-desc'>Served as the Program Manager for a $33 million dollar program to modernize Vermont's electric grid.  Project scope included the deployemnt of smart meters across Central Vermont Public Service's service territory, installation of additional SCADA stations around the state, and a pilot to test new automated closing and fault detection technology. </p>
				</div>
			</div>
			
			<a id='resume-pdf' href='./resources/todd-kowalczyk-resume.pdf' download='./resources/todd-kowalczyk-resume.pdf'>Download Full Resume</a>
		</div>
	)
}

export default History
