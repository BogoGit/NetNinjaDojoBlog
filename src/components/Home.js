import React, { useState } from 'react'

const Home = () => {
	const [name, setName] = useState('Sean')

	const handleClick = (e) => {
		setName('Bogo')
	}

	// const handleClickParams = (name) => {
	// 	console.log(`hello, ${name}`)
	// }

	return (
		<div className='home'>
			<h2>Homepage for {name}</h2>
			<button onClick={handleClick}>Click</button>
			{/* <button onClick={() => handleClickParams({ name })}>Click Params</button> */}
		</div>
	)
}

export default Home
