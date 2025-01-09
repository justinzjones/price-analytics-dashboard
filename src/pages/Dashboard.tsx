import { Card } from '../components/ui/card'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { useState } from 'react'
import { RouteAnalysis } from '../components/RouteAnalysis'
import { HistogramCharts } from '../components/HistogramCharts'

interface DashboardProps {
  isAlternativeDesign: boolean
}

const COLORS = {
  undercut: '#f87171',
  overpriced: '#fdba74',
  match: '#86efac',
  na: '#93c5fd'
}

export function Dashboard({ isAlternativeDesign }: DashboardProps) {
  const [selectedRegion, setSelectedRegion] = useState('N.East - Florida')
  const [selectedView, setSelectedView] = useState('Market Overview')

  const domesticData = [
    { name: 'Undercut', value: 40, color: COLORS.undercut },
    { name: 'Overpriced', value: 54, color: COLORS.overpriced },
    { name: 'Price Match', value: 4, color: COLORS.match },
    { name: 'Not Available', value: 2, color: COLORS.na }
  ]

  const internationalData = [
    { name: 'Undercut', value: 27, color: COLORS.undercut },
    { name: 'Overpriced', value: 36, color: COLORS.overpriced },
    { name: 'Price Match', value: 2, color: COLORS.match },
    { name: 'Not Available', value: 35, color: COLORS.na }
  ]

  if (isAlternativeDesign) {
    return (
      <div>
        <div className="p-6">
          {selectedView === 'Market Overview' ? (
            <div className="space-y-6">
              {/* Market Charts */}
              <Card className="p-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {/* Domestic Market */}
                  <div>
                    <h2 className="mb-6 text-lg font-semibold text-center">Domestic Market (95% of Routes)</h2>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={domesticData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={2}
                            dataKey="value"
                          >
                            {domesticData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip 
                            formatter={(value) => `${value}%`}
                            contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }}
                          />
                          <Legend 
                            verticalAlign="bottom" 
                            height={36}
                            formatter={(value) => <span className="text-sm">{value}</span>}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* International Market */}
                  <div>
                    <h2 className="mb-6 text-lg font-semibold text-center">International Market (5% of Routes)</h2>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={internationalData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={2}
                            dataKey="value"
                          >
                            {internationalData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip 
                            formatter={(value) => `${value}%`}
                            contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }}
                          />
                          <Legend 
                            verticalAlign="bottom" 
                            height={36}
                            formatter={(value) => <span className="text-sm">{value}</span>}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Histogram Charts */}
              <HistogramCharts />
            </div>
          ) : (
            <RouteAnalysis />
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Original dashboard content */}
    </div>
  )
} 