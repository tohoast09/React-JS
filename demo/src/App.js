import { Routes, Route , Link } from 'react-router-dom'


import HomePage from './pages/Home'
import ContactPage from './pages/Contact'
import UsestatePage from './pages/Usestate'
import GiftsPage from './pages/Gifts'
import BindingPage from './pages/Binding'

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Usestate">Usestate</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Gifts">Gifts</Link>
          </li>
          <li>
            <Link to="/Binding">Binding</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path = "/" element={<HomePage />} />
        <Route path = "/Contact" element={<ContactPage />} />
        <Route path = "/Usestate" element={<UsestatePage />} />
        <Route path = "/Gifts" element={<GiftsPage />} />
        <Route path = "/Binding" element={<BindingPage />} />
      </Routes>
    </div>
  )
}

export default App;
