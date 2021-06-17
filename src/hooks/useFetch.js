import { useState, useEffect } from 'react'

const useFetch = (url) => {
	const [isLoading, setIsLoading] = useState(true)
	const [data, setData] = useState([])
	const [error, setError] = useState(null)

	useEffect(() => {
		const abortCont = new AbortController()

		setTimeout(() => {
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
					setError(null)
					setIsLoading(false)
				})
				.catch((err) => {
					if (err.name !== 'AbortError') {
						setError(err.message)
						setIsLoading(false)
					}
				})
		}, 1500)
		return () => abortCont.abort()
	}, [url])

	return { isLoading, data, error }
}

export default useFetch
