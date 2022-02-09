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
import Orders from '@Admin/Features/Orders/Orders'
import Categories from '@Admin/Features/Categories/Categories'
import Pages from '@Admin/Features/Pages/Pages'
import PageLayout from '@Admin/Features/Pages/PageLayout'

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
				<Route path='orders' element={<Orders />} />
				<Route
					path='categories'
					element={<Categories newVersion={false} headerLabel='Categories' labelValue='ALL CATEGORIES' />}
				/>
				<Route path='newCategories' element={<Categories newVersion={true} headerLabel='Blog Categories' />} />

				<Route path='pages' element={<PageLayout />}>
					<Route path='home' element={<Pages HeaderLabel='Home' />} />
					<Route path='categories' element={<Pages HeaderLabel='CATEGORY' />} />
					<Route path='brands' element={<Pages HeaderLabel='BRANDS' />} />
					<Route path='deals' element={<Pages HeaderLabel='DEALS' />} />
					<Route path='about' element={<Pages HeaderLabel='ABOUT' />} />
					<Route path='specialOrder' element={<Pages HeaderLabel='SPECIAL ORDER' />} />
					<Route path='collections' element={<Pages HeaderLabel='COLLECTIONS' />} />
					<Route path='settings' element={<Pages HeaderLabel='SETTINGS' />} />
				</Route>
			</Route>
		</Routes>
	)
}

export default App
