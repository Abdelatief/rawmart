import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from '@Customer/Features/LandingPage'
import AdminDashboard from '@Admin/Features/AdminDashboard'
import AboutUsPage from '@Customer/Features/AboutUsPage'
import { default as CustomerLayout } from '@Customer/Containers/Layout'
import SpecialOrderPage from '@Customer/Features/SpecialOrderPage'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { customerApi } from '@Customer/Redux/CustomerApi'

function App() {
	return (
		<>
			<Routes>
				<Route path='/admin'>
					<Route path='dashboard' element={<AdminDashboard />} />
				</Route>
			</Routes>
			<ApiProvider api={customerApi}>
				<Routes>
					<Route path='/' element={<CustomerLayout />}>
						<Route index element={<LandingPage />} />
						<Route path='about-us' element={<AboutUsPage />} />
						<Route path='special-order' element={<SpecialOrderPage />} />
					</Route>
				</Routes>
			</ApiProvider>
		</>
	)
}

export default App
