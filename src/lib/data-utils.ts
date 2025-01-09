export interface ChartData {
  priceEvolution: Array<{
    date: string;
    price: number;
    avgPrice: number;
  }>;
  forwardLooking: Array<{
    date: string;
    price: number | null;
    forecast: number;
  }>;
  channelComparison: Array<{
    channel: string;
    direct: number;
    competitor: number;
  }>;
}

export function processData(data: ChartData): ChartData {
  return data;
} 