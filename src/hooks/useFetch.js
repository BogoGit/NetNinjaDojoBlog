import { useState, useEffect } from 'react'

const useFetch = (url) => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const abortCont = new AbortController()

		fetch(url, { signal: abortCont.signal })
			.then((res) => {
				console.log(`res`, res)
				if (!res.ok) {
					throw Error("Couldn't fetch data.")
				}
				return res.json()
			})
			.then((data) => {
				setData(data)
				setIsLoading(false)
				setError(null)
			})
			.catch((err) => {
				if (err.name !== 'AbortError') {
					setIsLoading(false)
					setError(err.message)
				}
			})
		return () => abortCont.abort()
	}, [url])

	return { data, isLoading, error }
}

export default useFetch
