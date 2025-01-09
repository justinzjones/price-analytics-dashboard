import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Dashboard } from './pages/Dashboard'
import { RouteAnalysis } from './components/RouteAnalysis'
import { TrendAnalysis } from './components/TrendAnalysis'
import { useState } from 'react'

function App() {
  const [isAlternativeDesign, setIsAlternativeDesign] = useState(true)

  return (
    <Router basename="/price-analytics-dashboard">
      <Layout isAlternativeDesign={isAlternativeDesign} onDesignToggle={() => setIsAlternativeDesign(!isAlternativeDesign)}>
        <Routes>
          <Route path="/" element={<Navigate to="/analytics" replace />} />
          <Route path="/analytics" element={<Dashboard isAlternativeDesign={isAlternativeDesign} />} />
          <Route path="/route-analysis" element={<RouteAnalysis />} />
          <Route path="/trend-analysis" element={<TrendAnalysis />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App 