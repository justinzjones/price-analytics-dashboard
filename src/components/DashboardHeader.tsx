import { ChevronDown, LayoutDashboard, BarChart2, LineChart } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface DashboardHeaderProps {
  selectedView: string
  onViewChange: (view: string) => void
}

const views = [
  { name: 'Market Overview', icon: LayoutDashboard, path: '/analytics' },
  { name: 'Route Analysis', icon: BarChart2, path: '/route-analysis' },
  { name: 'Trend Analysis', icon: LineChart, path: '/trend-analysis' }
]

export function DashboardHeader({
  selectedView,
  onViewChange
}: DashboardHeaderProps) {
  const navigate = useNavigate()

  const handleViewChange = (view: string, path: string) => {
    onViewChange(view)
    navigate(path)
  }

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900">Market Price Position</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex p-1 bg-gray-100 rounded-lg">
              {views.map((view) => {
                const Icon = view.icon
                return (
                  <button
                    key={view.name}
                    onClick={() => handleViewChange(view.name, view.path)}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      selectedView === view.name
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="mr-2 w-4 h-4" />
                    {view.name}
                  </button>
                )
              })}
            </div>

            <select className="px-4 py-2 text-sm rounded-md border border-gray-300">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
} 