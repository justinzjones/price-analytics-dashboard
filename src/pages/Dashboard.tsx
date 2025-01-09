import { Card } from \"../components/ui/card\"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from \"recharts\"
import { RouteAnalysis } from \"../components/RouteAnalysis\"
import { HistogramCharts } from \"../components/HistogramCharts\"

interface DashboardProps {
  isAlternativeDesign: boolean
}

const COLORS = {
  undercut: \"#f87171\",
  overpriced: \"#fdba74\",
  match: \"#86efac\",
  na: \"#93c5fd\"
}

export function Dashboard({ isAlternativeDesign }: DashboardProps) {
  const domesticData = [
    { name: \"Undercut\", value: 40, color: COLORS.undercut },
    { name: \"Overpriced\", value: 54, color: COLORS.overpriced },
    { name: \"Price Match\", value: 4, color: COLORS.match },
    { name: \"Not Available\", value: 2, color: COLORS.na }
  ]

  const internationalData = [
    { name: \"Undercut\", value: 27, color: COLORS.undercut },
    { name: \"Overpriced\", value: 36, color: COLORS.overpriced },
    { name: \"Price Match\", value: 2, color: COLORS.match },
    { name: \"Not Available\", value: 35, color: COLORS.na }
  ]

  if (isAlternativeDesign) {
    return (
      <div>
        <div className=\"p-6\">
          <div className=\"space-y-6\">
            {/* Market Charts */}
            <Card className=\"p-6\">
              <div className=\"grid grid-cols-1 gap-8 md:grid-cols-2\">
                {/* Domestic Market */}
                <div>
                  <h2 className=\"mb-6 text-lg font-semibold text-center\">Domestic Market (950f Routes)</h2>
                  <div className=\"h-[300px]\">
                    <ResponsiveContainer width=\"100