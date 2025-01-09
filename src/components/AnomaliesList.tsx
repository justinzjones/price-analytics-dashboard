interface Anomaly {
  id: number
  route: string
  description: string
  severity: 'High' | 'Medium' | 'Low'
  timestamp: string
}

const anomalies: Anomaly[] = [
  {
    id: 1,
    route: 'PVR-LAX',
    description: 'Sudden price increase of 45%',
    severity: 'High',
    timestamp: '2023-12-13 16:02'
  },
  {
    id: 2,
    route: 'YVR-SEA',
    description: 'Price below market average by 30%',
    severity: 'Medium',
    timestamp: '2023-12-13 15:45'
  },
  {
    id: 3,
    route: 'LAX-JFK',
    description: 'Competitor price dropped by 25%',
    severity: 'High',
    timestamp: '2023-12-13 15:30'
  }
]

export function AnomaliesList() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Price Anomalies</h3>
      <div className="space-y-4">
        {anomalies.map((anomaly) => (
          <div 
            key={anomaly.id}
            className="p-4 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{anomaly.route}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                anomaly.severity === 'High' 
                  ? 'bg-red-100 text-red-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {anomaly.severity}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">{anomaly.description}</p>
            <p className="text-xs text-gray-500 mt-2">{anomaly.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 