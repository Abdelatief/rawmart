import React from 'react'
import { Outlet } from 'react-router-dom'

const PageLayout = () => {
	return (
		<div>
			<Outlet />
		</div>
	)
}

export default PageLayout
