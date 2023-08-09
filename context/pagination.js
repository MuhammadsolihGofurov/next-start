import { createContext, useContext, useState } from 'react'

const PaginationContext = createContext()

export const PaginationProvider = ({ children }) => {
	const [currentPage, setCurrentPage] = useState(1)
	const [totalPageCount, setTotalPageCount] = useState(null)

	return (
		<PaginationContext.Provider
			value={{
				currentPage,
				setCurrentPage,
				totalPageCount,
				setTotalPageCount,
			}}
		>
			{children}
		</PaginationContext.Provider>
	)
}

export const usePagination = () => useContext(PaginationContext)