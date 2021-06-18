import React from 'react'
import useFetch from '../hooks/useFetch'
import BlogList from './BlogList'

const Home = () => {
	const {
		data: blogs,
		isLoading,
		error,
	} = useFetch('http://localhost:8000/blogs')

	return (
		<div className='home'>
			<div>
				{error && <div>{error}</div>}
				{isLoading && <div>Loading...</div>}
				{blogs && <BlogList blogs={blogs} heading='All Blogs' />}
			</div>
		</div>
	)
}

export default Home
