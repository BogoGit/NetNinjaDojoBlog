import React, { useState } from 'react'

const Create = () => {
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [author, setAuthor] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		const blog = { title, body, author }
		setIsLoading(true)
		fetch('http://localhost:8000/blogs', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(blog),
		}).then((res) => {
			console.log(`New Blog Added`, res.json())
			setIsLoading(false)
		})
	}

	return (
		<div className='create'>
			<h2>Add a new blog!</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor='blogTitle'>Title</label>
				<input
					type='text'
					id='blogTitle'
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label htmlFor='blogBody'>Body</label>
				<textarea
					id='blogBody'
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				></textarea>
				<label htmlFor='blogAuthor'>Author</label>
				<select
					id='blogAuthor'
					required
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				>
					<option value='sean'>Sean</option>
					<option value='louis'>Louis</option>
					<option value='bogolin'>Bogolin</option>
				</select>
				{!isLoading && <button>Add Blog</button>}
				{isLoading && <button disabled>Adding Blog...</button>}
			</form>
		</div>
	)
}

export default Create
