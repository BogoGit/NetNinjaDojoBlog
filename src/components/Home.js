import React from 'react'
import useFetch from '../hooks/useFetch'
import BlogList from './BlogList'

const Home = () => {
	const {
		isLoading,
		data: blogs,
		error,
	} = useFetch('http://localhost:8000/blogs')

	return (
		<div className='home'>
			<div>
				{error && <div>{error}</div>}
				{isLoading && <div>Loading...</div>}
				{blogs && <BlogList blogs={blogs} heading='All Blogs' />}

				{/* <BlogList
					blogs={blogs.filter((blog) => blog.author === 'Sean')}
					heading="Sean's Blogs"
				/> */}
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
