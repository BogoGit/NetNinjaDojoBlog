import React, { useState, useEffect } from 'react'

const useFetch = (url) => {
	const [isLoading, setIsLoading] = useState(true)
	const [data, setData] = useState([])
	const [error, setError] = useState(null)

	useEffect(() => {
		setTimeout(() => {
			fetch(url)
				.then((res) => {
					console.log(`res`, res)
					if (!res.ok) {
						throw Error("Couldn't fetch data.")
					}
					return res.json()
				})
				.then((data) => {
					setData(data)
					setError(null)
					setIsLoading(false)
				})
				.catch((err) => {
					setError(err.message)
					setIsLoading(false)
				})
		}, 1500)
	}, [url])

	return { isLoading, data, error }
}

export default useFetch
