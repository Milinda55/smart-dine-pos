import './App.css'
import './index.css'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Home, Auth, Orders } from './pages'

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/orders" element={<Orders />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
