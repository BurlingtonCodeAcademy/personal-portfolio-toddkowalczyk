import React, { useState } from 'react'
import Modal from './modal'
import guessImage from '../images/guess-game.png'
import zorkingtonImage from '../images/zorkington-game.png'
import tictactoeImage from '../images/tictactoe.png'

function Projects() {

	// React State Variables
	const [modalState, setModalState] = useState(false)
	const [projectName, setProjectName] = useState(null)
	const [projectDesc, setProjectDesc] = useState(null)
	const [githubRepo, setGithubRepo] = useState(null)

	// Create array of projects to display on page
	const projects =
		[
			{
				id: '1',
				name: 'Guess the Number',
				desc: 'Command line guess the number game written in JavaScript.  Game has two options, (1) Player picks a number and the computer guesses it or (2) Player and computer take turns guessing a random number',
				githubRepo: 'https://github.com/BurlingtonCodeAcademy/guess-the-number-toddkowalczyk',
				image: './guess-game.png'
			},

			{
				id: '2',
				name: 'Zorkington Adventure Game',
				desc: 'Command line and web version of an adventure game written in JavaScript.  Players enter simple one or two word commands as they attempt to find their way out a creepy house.',
				githubRepo: 'https://github.com/BurlingtonCodeAcademy/zorkington-dakota-todd',
				image: './zorkington-game.png'
			},

			{
				id: '3',
				name: 'Tic Tac Toe',
				desc: 'Web version of classic Tic Tac Toe game, written in JavaScript.  Game includes player versus player mode as well as player versus computer.',
				githubRepo: 'https://github.com/BurlingtonCodeAcademy/tic-tac-toe-todd-jeff',
				image: './tic-tac-toe.png'
			}
		]

	// Future Enhancement:  Show Additional Info Dialog based on project clicked
	function showModal(evt) {
		const project = projects.find(element => element.id === evt.target.value)
		setModalState(true)
		setProjectName(project.name)
		setProjectDesc(project.desc)
		setGithubRepo(project.githubRepo)
		console.log(modalState)
	}

	function closeModal() {
		setModalState(false)
	}

	return (

		<div className="projects-wrapper">
			{modalState === true} ?
			<img class='project-image' src={guessImage} alt='Guessing Game' />
			<div class='project-summary'>
				<p class='project-heading'>{projects[0].name}</p>
				<p class='project-desc'>{projects[0].desc}</p>
				<p class='project-heading'>Key Learnings:</p>
				<ul>
					<li>JavaScript</li>
					<li>Objects</li>
				</ul>
				<a class='github-link' href={projects[0].githubRepo}>GitHub Repo</a>
			</div>

			<img class='project-image' src={zorkingtonImage} alt='Zorkington Game' />
			<div class='project-summary'>
				<p class='project-heading'>{projects[1].name}</p>
				<p class='project-desc'>{projects[1].desc}</p>
				<p class='project-heading'>Key Learnings:</p>
				<ul>
					<li>JavaScript</li>
					<li>Objects</li>
					<li>Arrays</li>
					<li>Iterators</li>
				</ul>
				<a class='github-link' href={projects[1].githubRepo}>GitHub Repo</a>
			</div>

			<img class='project-image' src={tictactoeImage} alt='Tic Tac Toe Game' />
			<div class='project-summary'>
				<p class='project-heading'>{projects[2].name}</p>
				<p class='project-desc'>{projects[2].desc}</p>
				<p class='project-heading'>Key Learnings:</p>
				<ul>
					<li>JavaScript</li>
					<li>DOM</li>
					<li>Event Handlers</li>
					<li>Iterators</li>
				</ul>
				<a class='github-link' href={projects[2].githubRepo}>GitHub Repo</a>
			</div>


		</div>
	)
}
export default Projects
