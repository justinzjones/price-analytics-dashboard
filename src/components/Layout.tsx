import { Sidebar } from './Sidebar'
import { DashboardHeader } from './DashboardHeader'
import { useLocation, useNavigate } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
  isAlternativeDesign: boolean
  onDesignToggle: () => void
}

export function Layout({ children, isAlternativeDesign, onDesignToggle }: LayoutProps) {
  const location = useLocation()
  const navigate = useNavigate()

  const getCurrentView = () => {
    switch (location.pathname) {
      case '/analytics':
        return 'Market Overview'
      case '/route-analysis':
        return 'Route Analysis'
      case '/trend-analysis':
        return 'Trend Analysis'
      default:
        return 'Market Overview'
    }
  }

  const handleViewChange = (view: string) => {
    switch (view) {
      case 'Market Overview':
        navigate('/analytics')
        break
      case 'Route Analysis':
        navigate('/route-analysis')
        break
      case 'Trend Analysis':
        navigate('/trend-analysis')
        break
    }
  }

  return (
    <div className="flex h-screen">
      <Sidebar onDesignToggle={onDesignToggle} />
      <main className={`flex-1 overflow-y-auto ${isAlternativeDesign ? 'bg-white' : 'bg-gray-50'}`}>
        <div className="px-8">
          <DashboardHeader
            selectedView={getCurrentView()}
            onViewChange={handleViewChange}
          />
        </div>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
} 