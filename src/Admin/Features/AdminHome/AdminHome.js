import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AdminAuthContext } from '@Admin/Containers/Layout/Layout'

const AdminHome = () => {
	const navigate = useNavigate()
	const adminAuthContext = useContext(AdminAuthContext)

	useEffect(() => {
		if (adminAuthContext.authTokens?.access_token) navigate('/admin/dashboard')
	}, [adminAuthContext?.authTokens?.access_token, navigate])

	return (
		<div>
			<h1>AdminHome</h1>
		</div>
	)
}

export default AdminHome
