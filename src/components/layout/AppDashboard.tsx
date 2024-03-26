import React from 'react'
import DashboardLayout from './DashboardLayout'
import { Outlet } from 'react-router-dom'

const AppDashboard = () => {
  return (
    <DashboardLayout>
      <Outlet/>
    </DashboardLayout>
  )
}

export default AppDashboard