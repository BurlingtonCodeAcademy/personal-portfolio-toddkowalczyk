import React from 'react'

function Modal(props) {

return (

	<div className="modal-box">
			<p>{props.projectName}</p>
			<p>{props.projectDate}</p>
			<p>{props.projectDesc}</p>
			<button onClick={props.closeModal}>Close</button>
	</div>
)
}

export default Modal
