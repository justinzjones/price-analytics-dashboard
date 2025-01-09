import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import rawData from '../data/chart-data.json'
import { processData } from '../lib/data-utils'

const { channelComparison } = processData(rawData)

export function ChannelComparison() {
  return (
    <div className="bg-white">
      <h3 className="mb-4 text-lg font-semibold">Channel Comparison</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={channelComparison}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="channel" />
            <YAxis />
            <Tooltip 
              formatter={(value) => {
                if (typeof value === 'number') {
                  return `${value.toFixed(1)}%`
                }
                return `${value}%`
              }}
            />
            <Legend />
            <Bar 
              dataKey="direct" 
              fill="#2563eb" 
              name="Direct Price"
            />
            <Bar 
              dataKey="competitor" 
              fill="#9333ea" 
              name="Competitor Price"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
} 