import React from 'react'

const Home = () => {
	const handleClick = (e) => {
		console.table(`hello`, e)
	}

	const handleClickParams = (name) => {
		console.log(`hello, ${name}`)
	}

	return (
		<div className='home'>
			<h2>Homepage</h2>
			<button onClick={handleClick}>Click</button>
			<button onClick={() => handleClickParams('Sean')}>Click Params</button>
		</div>
	)
}

export default Home
