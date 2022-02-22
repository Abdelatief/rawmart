import { useEffect, useState } from 'react'

export default function useDebounce({ value, delay = 500, callback }) {
	const [realValue, setRealValue] = useState(value)
	const [debounceValue, setDebounceValue] = useState(value)
	const [debounceLoader, setDebounceLoader] = useState(false)
	const [firstRender, setFirstRender] = useState(true)

	useEffect(() => {
		if (firstRender) setFirstRender(false)
		else setDebounceLoader(true)

		const timer = setTimeout(() => {
			setDebounceValue(realValue)
			setDebounceLoader(false)
		}, delay)

		return () => {
			setDebounceLoader(false)
			clearTimeout(timer)
		}
	}, [realValue, delay])

	useEffect(() => {
		if (callback && !firstRender) callback()
	}, [debounceValue])

	return {
		debounceValue,
		realValue,
		debounceLoader,
		setRealValue,
		firstRender,
	}
}
