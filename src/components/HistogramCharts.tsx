import { Card } from './ui/card'
import { Calendar, Users } from 'lucide-react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const COLORS = {
  undercut: '#f87171',      // softer red
  match: '#86efac',         // softer green
  overpriced: '#fdba74',    // softer orange
  na: '#93c5fd'            // softer blue
}

const dowData = [
  { day: '1', total: '12%', UC: 41, MAT: 7, OP: 51, NA: 2 },
  { day: '2', total: '13%', UC: 39, MAT: 3, OP: 55, NA: 3 },
  { day: '3', total: '13%', UC: 39, MAT: 3, OP: 55, NA: 3 },
  { day: '4', total: '13%', UC: 39, MAT: 3, OP: 55, NA: 3 },
  { day: '5', total: '13%', UC: 39, MAT: 3, OP: 55, NA: 3 },
  { day: '6', total: '13%', UC: 39, MAT: 3, OP: 55, NA: 3 },
  { day: '7', total: '13%', UC: 39, MAT: 3, OP: 55, NA: 3 },
]

const apData = [
  { days: '0', total: '22%', UC: 49, MAT: 3, OP: 42, NA: 7 },
  { days: '7', total: '22%', UC: 41, MAT: 3, OP: 52, NA: 4 },
  { days: '14', total: '22%', UC: 40, MAT: 3, OP: 55, NA: 2 }
]

const getMetricName = (name: string) => {
  switch (name) {
    case 'UC': return 'Undercut'
    case 'MAT': return 'Price Match'
    case 'OP': return 'Overpriced'
    case 'NA': return 'Not Available'
    default: return name
  }
}

export function HistogramCharts() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Day of Week Analysis */}
      <Card className="p-6">
        <div className="flex gap-2 items-center mb-4">
          <Calendar className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-semibold">Day of Week Analysis</h2>
          <span className="ml-auto text-sm text-gray-500">% Total shown per day</span>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={dowData} 
              barGap={0}
              margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="day" 
                label={{ value: 'Day', position: 'bottom', offset: 0 }}
              />
              <YAxis label={{ value: 'Percentage', angle: -90, position: 'insideLeft' }} />
              <Tooltip
                formatter={(value, name) => [`${value}%`, getMetricName(name as string)]}
                contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }}
                labelFormatter={(label) => `Day ${label} (Total: ${dowData[parseInt(label)-1].total})`}
              />
              <Bar 
                dataKey="UC" 
                fill={COLORS.undercut} 
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="MAT" 
                fill={COLORS.match} 
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="OP" 
                fill={COLORS.overpriced} 
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="NA" 
                fill={COLORS.na} 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Advance Purchase */}
      <Card className="p-6">
        <div className="flex gap-2 items-center mb-4">
          <Users className="w-5 h-5 text-purple-600" />
          <h2 className="text-lg font-semibold">Advance Purchase</h2>
          <span className="ml-auto text-sm text-gray-500">% Total shown per period</span>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={apData} 
              barGap={0}
              margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="days" 
                label={{ value: 'Days', position: 'bottom', offset: 0 }}
              />
              <YAxis label={{ value: 'Percentage', angle: -90, position: 'insideLeft' }} />
              <Tooltip
                formatter={(value, name) => [`${value}%`, getMetricName(name as string)]}
                contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }}
                labelFormatter={(label) => `${label} days (Total: ${apData.find(d => d.days === label)?.total})`}
              />
              <Bar 
                dataKey="UC" 
                fill={COLORS.undercut} 
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="MAT" 
                fill={COLORS.match} 
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="OP" 
                fill={COLORS.overpriced} 
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="NA" 
                fill={COLORS.na} 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  )
} 