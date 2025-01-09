import { useParams } from 'react-router-dom'
import { Card } from './ui/card'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface RouteData {
  route: string
  fullRoute: string
  total: number
  undercut: number
  match: number
  overpriced: number
  na: number
}

const routeDataList: RouteData[] = [
  { 
    route: 'PHLDFW', 
    fullRoute: 'Philadelphia (PHL) → Dallas (DFW)',
    total: 100, 
    undercut: 94, 
    match: 3, 
    overpriced: 3, 
    na: 0 
  }
  // Add more route data as needed
]

export function RouteDetails() {
  const { routeId } = useParams()
  const navigate = useNavigate()

  const routeData = routeDataList.find((r: RouteData) => r.route === routeId)

  if (!routeData) {
    return <div>Route not found</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-4 items-center">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 rounded-full transition-colors hover:bg-gray-100"
        >
          <ArrowLeft className="w-5 h-5 text-gray-500" />
        </button>
        <h1 className="text-2xl font-semibold">{routeData.fullRoute}</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h2 className="mb-4 text-lg font-semibold">Price Trend</h2>
          {/* Price trend chart will go here */}
        </Card>

        <Card className="p-6">
          <h2 className="mb-4 text-lg font-semibold">Market Analysis</h2>
          {/* Market analysis chart will go here */}
        </Card>
      </div>
    </div>
  )
} 