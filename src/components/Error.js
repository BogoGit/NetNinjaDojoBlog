import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
	return (
		<div className='error'>
			<h2>Sorry!</h2>
			<p>That page cannot be found.</p>
			<Link to='/'>Back to Home</Link>
		</div>
	)
}

export default Error
