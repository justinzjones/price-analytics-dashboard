import { Card } from './ui/card'
import { AlertTriangle, ArrowDown, ArrowUp, LineChart } from 'lucide-react'
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

const routeData: RouteData[] = [
  { 
    route: 'PHLDFW', 
    fullRoute: 'Philadelphia (PHL) → Dallas (DFW)',
    total: 100, 
    undercut: 94, 
    match: 3, 
    overpriced: 3, 
    na: 0 
  },
  { 
    route: 'DENATL',
    fullRoute: 'Denver (DEN) → Atlanta (ATL)', 
    total: 100, 
    undercut: 91, 
    match: 3, 
    overpriced: 0, 
    na: 6 
  },
  { 
    route: 'PHLLAS',
    fullRoute: 'Philadelphia (PHL) → Las Vegas (LAS)', 
    total: 100, 
    undercut: 88, 
    match: 6, 
    overpriced: 6, 
    na: 0 
  },
  { 
    route: 'LASPHL',
    fullRoute: 'Las Vegas (LAS) → Philadelphia (PHL)', 
    total: 100, 
    undercut: 88, 
    match: 6, 
    overpriced: 6, 
    na: 0 
  },
  { 
    route: 'DFWPHL',
    fullRoute: 'Dallas (DFW) → Philadelphia (PHL)', 
    total: 100, 
    undercut: 88, 
    match: 9, 
    overpriced: 3, 
    na: 0 
  },
  { 
    route: 'ATLDFW',
    fullRoute: 'Atlanta (ATL) → Dallas (DFW)', 
    total: 100, 
    undercut: 88, 
    match: 0, 
    overpriced: 13, 
    na: 0 
  },
  { 
    route: 'ATLDEN',
    fullRoute: 'Atlanta (ATL) → Denver (DEN)', 
    total: 100, 
    undercut: 88, 
    match: 6, 
    overpriced: 3, 
    na: 3 
  },
  { 
    route: 'LASTPA',
    fullRoute: 'Las Vegas (LAS) → Tampa (TPA)', 
    total: 100, 
    undercut: 84, 
    match: 6, 
    overpriced: 9, 
    na: 0 
  },
  { 
    route: 'LASDEN',
    fullRoute: 'Las Vegas (LAS) → Denver (DEN)', 
    total: 100, 
    undercut: 84, 
    match: 6, 
    overpriced: 9, 
    na: 0 
  },
  { 
    route: 'PHXDFW',
    fullRoute: 'Phoenix (PHX) → Dallas (DFW)', 
    total: 100, 
    undercut: 81, 
    match: 3, 
    overpriced: 16, 
    na: 0 
  },
  { 
    route: 'DFWLAS',
    fullRoute: 'Dallas (DFW) → Las Vegas (LAS)', 
    total: 100, 
    undercut: 81, 
    match: 6, 
    overpriced: 13, 
    na: 0 
  },
  { 
    route: 'DFWATL',
    fullRoute: 'Dallas (DFW) → Atlanta (ATL)', 
    total: 100, 
    undercut: 78, 
    match: 0, 
    overpriced: 22, 
    na: 0 
  },
  { 
    route: 'ORLDFW',
    fullRoute: 'Orlando (ORL) → Dallas (DFW)', 
    total: 100, 
    undercut: 75, 
    match: 9, 
    overpriced: 16, 
    na: 0 
  },
  { 
    route: 'ATLPHL',
    fullRoute: 'Atlanta (ATL) → Philadelphia (PHL)', 
    total: 100, 
    undercut: 75, 
    match: 13, 
    overpriced: 9, 
    na: 3 
  },
  { 
    route: 'TPALAS',
    fullRoute: 'Tampa (TPA) → Las Vegas (LAS)', 
    total: 100, 
    undercut: 72, 
    match: 16, 
    overpriced: 13, 
    na: 0 
  },
  { 
    route: 'FLLBOS',
    fullRoute: 'Fort Lauderdale (FLL) → Boston (BOS)', 
    total: 100, 
    undercut: 72, 
    match: 3, 
    overpriced: 25, 
    na: 0 
  },
  { 
    route: 'PHLORL',
    fullRoute: 'Philadelphia (PHL) → Orlando (ORL)', 
    total: 100, 
    undercut: 69, 
    match: 16, 
    overpriced: 16, 
    na: 0 
  },
  { 
    route: 'DFWPHX',
    fullRoute: 'Dallas (DFW) → Phoenix (PHX)', 
    total: 100, 
    undercut: 69, 
    match: 6, 
    overpriced: 25, 
    na: 0 
  },
  { 
    route: 'BOSFLL',
    fullRoute: 'Boston (BOS) → Fort Lauderdale (FLL)', 
    total: 100, 
    undercut: 69, 
    match: 0, 
    overpriced: 31, 
    na: 0 
  },
  { 
    route: 'PHLTPA',
    fullRoute: 'Philadelphia (PHL) → Tampa (TPA)', 
    total: 100, 
    undercut: 63, 
    match: 0, 
    overpriced: 38, 
    na: 0 
  },
  { 
    route: 'PHLATL',
    fullRoute: 'Philadelphia (PHL) → Atlanta (ATL)', 
    total: 100, 
    undercut: 59, 
    match: 16, 
    overpriced: 19, 
    na: 6 
  },
  { 
    route: 'DFWORL',
    fullRoute: 'Dallas (DFW) → Orlando (ORL)', 
    total: 100, 
    undercut: 59, 
    match: 9, 
    overpriced: 28, 
    na: 3 
  }
]

export function RouteAnalysis() {
  const navigate = useNavigate()

  const handleRouteClick = (route: RouteData) => {
    const origin = route.route.slice(0, 3)
    const destination = route.route.slice(3)

    navigate('/trend-analysis', {
      state: {
        origin,
        destination,
        tripType: 'One Way',
        date: new Date().toISOString().split('T')[0]
      }
    })
  }

  return (
    <div className="space-y-6">
      {/* Critical Routes Section */}
      <Card className="p-6">
        <div className="flex gap-2 items-center mb-4">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-semibold">Critical Routes</h2>
          <span className="px-2.5 py-0.5 text-sm bg-red-100 text-red-700 rounded-full">
            5+ routes above 85% undercut
          </span>
        </div>

        <div className="overflow-y-auto max-h-[420px] rounded-lg border border-gray-100">
          <table className="w-full">
            <thead className="sticky top-0 z-10 bg-white shadow-sm">
              <tr>
                <th className="px-4 py-3 text-sm font-medium text-left text-gray-600 bg-gray-50">Route</th>
                <th className="px-4 py-3 text-sm font-medium text-center text-gray-600 bg-gray-50">Status</th>
                <th className="px-4 py-3 text-sm font-medium text-right text-gray-600 bg-gray-50">Undercut</th>
                <th className="px-4 py-3 text-sm font-medium text-right text-gray-600 bg-gray-50">Price Match</th>
                <th className="px-4 py-3 text-sm font-medium text-right text-gray-600 bg-gray-50">Overpriced</th>
                <th className="px-4 py-3 text-sm font-medium text-right text-gray-600 bg-gray-50">N/A</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {routeData.map((route) => (
                <tr 
                  key={route.route}
                  onClick={() => handleRouteClick(route)}
                  className="transition-colors cursor-pointer hover:bg-gray-50 group"
                >
                  <td className="px-4 py-2.5">
                    <div className="flex gap-2 items-center font-medium text-gray-900">
                      {route.fullRoute}
                      <div className="flex items-center opacity-0 transition-opacity group-hover:opacity-100">
                        <LineChart className="w-4 h-4 text-blue-500 hover:text-blue-600" />
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2.5 text-center">
                    {route.undercut > 90 ? (
                      <span className="px-2.5 py-0.5 text-xs bg-red-100 text-red-700 rounded-full font-medium">
                        Critical
                      </span>
                    ) : route.undercut > 85 ? (
                      <span className="px-2.5 py-0.5 text-xs bg-orange-100 text-orange-700 rounded-full font-medium">
                        High Priority
                      </span>
                    ) : null}
                  </td>
                  <td className="px-4 py-2.5 text-right">
                    <div className="flex gap-2 justify-end items-center">
                      <div className="overflow-hidden w-24 h-2 bg-gray-100 rounded-full">
                        <div 
                          className="h-full bg-red-500 rounded-full"
                          style={{ width: `${route.undercut}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-red-700">{route.undercut}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-2.5 text-right">
                    <span className="text-sm font-medium text-green-600">{route.match}%</span>
                  </td>
                  <td className="px-4 py-2.5 text-right">
                    <span className="text-sm font-medium text-orange-600">{route.overpriced}%</span>
                  </td>
                  <td className="px-4 py-2.5 text-right">
                    <span className="text-sm font-medium text-blue-600">{route.na}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="p-6">
          <h3 className="text-sm font-medium text-gray-500">Average Undercut Rate</h3>
          <div className="flex items-center mt-2">
            <span className="text-3xl font-semibold text-red-600">89.8%</span>
            <ArrowUp className="ml-2 w-4 h-4 text-red-500" />
          </div>
          <p className="mt-2 text-sm text-red-600">+2.1% vs last week</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-sm font-medium text-gray-500">Price Match Rate</h3>
          <div className="flex items-center mt-2">
            <span className="text-3xl font-semibold text-green-600">5.4%</span>
            <ArrowDown className="ml-2 w-4 h-4 text-green-500" />
          </div>
          <p className="mt-2 text-sm text-green-600">-0.8% vs last week</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-sm font-medium text-gray-500">Routes Needing Review</h3>
          <div className="flex items-center mt-2">
            <span className="text-3xl font-semibold">12</span>
          </div>
          <p className="mt-2 text-sm text-gray-600">Out of 20 total routes</p>
        </Card>
      </div>
    </div>
  )
} 