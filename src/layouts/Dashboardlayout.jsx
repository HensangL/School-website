import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
export const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto ml-64 p-8">
        <Outlet /> {/* This will render the nested routes */}
      </div>
    </div>
  )
}
