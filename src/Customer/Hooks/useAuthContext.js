import { useContext } from 'react'
import { CustomerAuthContext } from '@Customer/Containers/Layout/Layout'

export default function useCustomerAuthContext() {
	return useContext(CustomerAuthContext)
}
