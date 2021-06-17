import React, { useState } from 'react'

const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: 'Title #1', body: 'Yadayada 1111', author: 'Sean', id: 1 },
		{ title: 'Title #22', body: 'Blahblahblah 222222', author: 'Louis', id: 2 },
		{ title: 'Title #333', body: 'CoughCough 3', author: 'Bogolin', id: 3 },
	])

	return (
		<div className='home'>
			<div>
				{blogs.map((blog) => (
					<div className='blog-preview' key={blog.id}>
						<h2>{blog.title}</h2>
						<p>{blog.author}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Home

// const Home = () => {
// 	const handleClick = (e) => {
// 		console.table(`hello`, e)
// 	}

// 	const handleClickParams = (name) => {
// 		console.log(`hello, ${name}`)
// 	}

// 	return (
// 		<div className='home'>
// 			<h2>Homepage</h2>
// 			<button onClick={handleClick}>Click</button>
// 			<button onClick={() => handleClickParams('Sean')}>Click Params</button>
// 		</div>
// 	)
// }

// export default Home
