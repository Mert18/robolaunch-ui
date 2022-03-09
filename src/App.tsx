import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Development from './pages/Development'
import Management from './pages/Management'
import Settings from './pages/Settings'
import View from './pages/View'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/development" element={<Development />} /> 
        <Route path="/management" element={<Management />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
