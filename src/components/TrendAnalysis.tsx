import { Card } from './ui/card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { useState, useEffect } from 'react'
import { Calendar, ChevronRight } from 'lucide-react'
import { useLocation } from 'react-router-dom'

// Sample data - replace with actual data
const forwardData = [
  { date: '2024-01', value: 320 },
  { date: '2024-02', value: 332 },
  { date: '2024-03', value: 301 },
  { date: '2024-04', value: 334 },
  { date: '2024-05', value: 390 },
  { date: '2024-06', value: 330 }
]

const historicalData = [
  { date: '2023-07', value: 300 },
  { date: '2023-08', value: 310 },
  { date: '2023-09', value: 305 },
  { date: '2023-10', value: 320 },
  { date: '2023-11', value: 315 },
  { date: '2023-12', value: 325 }
]

type ViewType = 'Forward Looking' | 'Historical'

interface RouteState {
  origin: string
  destination: string
  tripType: string
  date: string
}

export function TrendAnalysis() {
  const location = useLocation()
  const [selectedView, setSelectedView] = useState<ViewType>('Forward Looking')
  
  // Initialize state with default values or route data if available
  const [origin, setOrigin] = useState(() => {
    const state = location.state as RouteState
    return state?.origin || 'PHL'
  })
  
  const [destination, setDestination] = useState(() => {
    const state = location.state as RouteState
    return state?.destination || 'DFW'
  })
  
  const [tripType, setTripType] = useState(() => {
    const state = location.state as RouteState
    return state?.tripType || 'One Way'
  })
  
  const [date, setDate] = useState(() => {
    const state = location.state as RouteState
    return state?.date || new Date().toISOString().split('T')[0]
  })

  return (
    <div className="space-y-6">
      {/* Header Section with Search Criteria and Toggle */}
      <div className="flex justify-between items-center px-6">
        {/* Search Criteria */}
        <div className="flex items-center gap-6">
          {/* Origin - Destination */}
          <div className="flex items-center gap-2 text-sm">
            <select 
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="font-medium text-gray-900 bg-transparent hover:text-blue-600 cursor-pointer"
            >
              <option value="PHL">Philadelphia (PHL)</option>
              <option value="DFW">Dallas (DFW)</option>
              <option value="LAX">Los Angeles (LAX)</option>
            </select>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <select 
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="font-medium text-gray-900 bg-transparent hover:text-blue-600 cursor-pointer"
            >
              <option value="DFW">Dallas (DFW)</option>
              <option value="PHL">Philadelphia (PHL)</option>
              <option value="LAX">Los Angeles (LAX)</option>
            </select>
          </div>

          {/* Divider */}
          <div className="h-4 w-px bg-gray-200"></div>

          {/* Trip Type */}
          <select 
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            className="text-sm text-gray-600 bg-transparent hover:text-blue-600 cursor-pointer"
          >
            <option>One Way</option>
            <option>Round Trip</option>
          </select>

          {/* Divider */}
          <div className="h-4 w-px bg-gray-200"></div>

          {/* Date */}
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gray-400" />
            <input 
              type="date" 
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="text-sm text-gray-600 bg-transparent hover:text-blue-600 cursor-pointer"
            />
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex p-1 bg-gray-100 rounded-lg">
          <button
            onClick={() => setSelectedView('Forward Looking')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              selectedView === 'Forward Looking'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Forward Looking
          </button>
          <button
            onClick={() => setSelectedView('Historical')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              selectedView === 'Historical'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Historical
          </button>
        </div>
      </div>

      {/* Chart Card */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">{selectedView} Trend</h2>
        <div className="h-[600px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={selectedView === 'Forward Looking' ? forwardData : historicalData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tickFormatter={(value) => {
                  const date = new Date(value)
                  return date.toLocaleDateString('en-US', { month: 'short' })
                }}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke={selectedView === 'Forward Looking' ? '#2563eb' : '#059669'}
                strokeWidth={2}
                dot={{ r: 4 }}
                name="Price"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  )
} 