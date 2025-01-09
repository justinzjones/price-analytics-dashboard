import { ChartData } from './data-utils'
import chartData from '../data/chart-data.json'

export async function loadPriceData(): Promise<ChartData> {
  return chartData as ChartData
} 