import { Card } from './ui/card'
import rawData from '../data/chart-data.json'

export function QuickStats() {
  const currentPrice = rawData.priceEvolution[rawData.priceEvolution.length - 1].price
  const avgPrice = rawData.priceEvolution[rawData.priceEvolution.length - 1].avgPrice
  const maxPrice = Math.max(...rawData.priceEvolution.map(d => d.price))
  const minPrice = Math.min(...rawData.priceEvolution.map(d => d.price))
  const priceChange = ((currentPrice - rawData.priceEvolution[0].price) / rawData.priceEvolution[0].price * 100).toFixed(1)
  const priceChangeColor = parseFloat(priceChange) >= 0 ? 'text-green-600' : 'text-red-600'

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="p-6 bg-white">
        <h3 className="text-sm font-medium text-gray-500">Current Price</h3>
        <p className="mt-2 text-3xl font-semibold">${currentPrice.toFixed(2)}</p>
        <p className={`text-sm ${priceChangeColor}`}>
          {priceChange}% {parseFloat(priceChange) >= 0 ? '↑' : '↓'}
        </p>
      </Card>
      <Card className="p-6 bg-white">
        <h3 className="text-sm font-medium text-gray-500">Average Price</h3>
        <p className="mt-2 text-3xl font-semibold">${avgPrice.toFixed(2)}</p>
      </Card>
      <Card className="p-6 bg-white">
        <h3 className="text-sm font-medium text-gray-500">Highest Price</h3>
        <p className="mt-2 text-3xl font-semibold">${maxPrice.toFixed(2)}</p>
      </Card>
      <Card className="p-6 bg-white">
        <h3 className="text-sm font-medium text-gray-500">Lowest Price</h3>
        <p className="mt-2 text-3xl font-semibold">${minPrice.toFixed(2)}</p>
      </Card>
    </div>
  )
} 