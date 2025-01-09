import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import rawData from '../data/chart-data.json'
import { processData } from '../lib/data-utils'

const { priceEvolution } = processData(rawData)

export function PriceEvolutionChart() {
  return (
    <div className="bg-white">
      <h3 className="mb-4 text-lg font-semibold">Price Evolution</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={priceEvolution}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="date" 
              tickFormatter={(value) => new Date(value).toLocaleDateString()}
            />
            <YAxis />
            <Tooltip 
              labelFormatter={(value) => new Date(value).toLocaleDateString()}
              formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="price" 
              stroke="#2563eb" 
              name="Current Price"
            />
            <Line 
              type="monotone" 
              dataKey="avgPrice" 
              stroke="#9333ea" 
              name="Average Price"
              strokeDasharray="5 5"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
} 