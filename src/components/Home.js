import React, { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [blogs, setBlogs] = useState([])
	const [error, setError] = useState(null)

	useEffect(() => {
		setTimeout(() => {
			fetch('http://localhost:8000/blogs')
				.then((res) => {
					console.log(`res`, res)
					if (!res.ok) {
						throw Error("Couldn't fetch data.")
					}
					return res.json()
				})
				.then((data) => {
					setBlogs(data)
					setError(null)
					setIsLoading(false)
				})
				.catch((err) => {
					setError(err.message)
					setIsLoading(false)
				})
		}, 1500)
	}, [])

	const handleDelete = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id)
		setBlogs(newBlogs)
	}

	return (
		<div className='home'>
			<div>
				{error && <div>{error}</div>}
				{isLoading && <div>Loading...</div>}
				{blogs && (
					<BlogList
						blogs={blogs}
						heading='All Blogs'
						handleDelete={handleDelete}
					/>
				)}

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
