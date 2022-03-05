import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Instances from './pages/Instances'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instances" element={<Instances />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
