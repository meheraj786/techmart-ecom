import React from 'react'
import useUserStore from '../../store/useUserStore'
import { Navigate } from 'react-router'

const ProtectedRouteForUser = ({children}) => {
  const {user}=useUserStore()
  return user ? children : <Navigate to="/login"/>
}

export default ProtectedRouteForUser