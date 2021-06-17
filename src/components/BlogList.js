import React from 'react'

const BlogList = ({ blogs, heading }) => {
	return (
		<div className='blog-list'>
			<h2>{heading}</h2>

			{blogs.map((blog) => (
				<div className='blog-preview' key={blog.id}>
					<h2>{blog.title}</h2>
					<p>Written by: {blog.author}</p>
				</div>
			))}
		</div>
	)
}

export default BlogList