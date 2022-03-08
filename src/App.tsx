import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Fleet from './pages/Fleet'
import Robot from './pages/Robot'
import TaskManagement from './pages/TaskManagement'
import Config from './pages/Config'
import Accounting from './pages/Accounting'
import Performance from './pages/Performance'
import Security from './pages/Security'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/robot" element={<Robot />} />
        <Route path="/task" element={<TaskManagement />} />
        <Route path="/config" element={<Config />} />
        <Route path="/accounting" element={<Accounting />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/security" element={<Security />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
