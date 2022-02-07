import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from '@Customer/Features/LandingPage'
import AdminDashboard from '@Admin/Features/AdminDashboard'
import AboutUsPage from '@Customer/Features/AboutUsPage'
import { default as CustomerLayout } from '@Customer/Containers/Layout'
import SpecialOrderPage from '@Customer/Features/SpecialOrderPage'
import { default as AdminLayout } from '@Admin/Containers/Layout'
import Vendors from '@Admin/Features/Vendors/Vendors'
import Roles from '@Admin/Features/Roles/Roles'
import Users from '@Admin/Features/Users/Users'

function App() {
	return (
		<Routes>
			{/*  Customer Routes  */}
			<Route path='/' element={<CustomerLayout />}>
				<Route index element={<LandingPage />} />
				<Route path='about-us' element={<AboutUsPage />} />
				<Route path='special-order' element={<SpecialOrderPage />} />
			</Route>

			{/*	 Admin Routes  */}
			<Route path='/admin' element={<AdminLayout />}>
				<Route path='dashboard' element={<AdminDashboard />} />
				<Route path='vendors' element={<Vendors />} />
				<Route path='roles' element={<Roles />} />
				<Route path='users' element={<Users />} />
			</Route>
		</Routes>
	)
}

export default App
