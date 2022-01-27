import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from '@Customer/Features/LandingPage'
import AdminDashboard from '@Admin/Features/AdminDashboard'

function App() {
	return (
		<Routes>
			{/*  Customer Routes  */}
			<Route path='/'>
				<Route path='' element={<LandingPage />} />
			</Route>

			{/*	 Admin Routes  */}
			<Route path='/admin'>
				<Route path='dashboard' element={<AdminDashboard />} />
			</Route>
		</Routes>
	)
}

export default App
