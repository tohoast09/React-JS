import { Routes, Route , Link } from 'react-router-dom'


import HomePage from './pages/Home'
import ContactPage from './pages/Contact'
import UsestatePage from './pages/Usestate'
import GiftsPage from './pages/Gifts'
import BindingPage from './pages/Binding'
import TodoListPage from './pages/Todolist'
import MountedPage from './pages/Mounted'
import UseEffectPage from './pages/Useeffect'
import CountDownPage from './pages/Countdown'
import ChatAppPage from './pages/Chatapp'


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
          <li>
            <Link to ="/Todolist">TodoList</Link>
          </li>
          <li>
            <Link to ="/Mounted">Mounted</Link>
          </li>
          <li>
            <Link to ="/Useeffect">Use Effect</Link>
          </li>
          <li>
            <Link to ="/Countdown">Count Down</Link>
          </li>
          <li>
            <Link to ="/Chatapp">Chat App Fake</Link>
          </li>
        </ul>
      </nav>


      <Routes>
        <Route path = "/" element={<HomePage />} />
        <Route path = "/Contact" element={<ContactPage />} />
        <Route path = "/Usestate" element={<UsestatePage />} />
        <Route path = "/Gifts" element={<GiftsPage />} />
        <Route path = "/Binding" element={<BindingPage />} />
        <Route path = "/Todolist" element={<TodoListPage />} />
        <Route path = "/Mounted" element={<MountedPage />} />
        <Route path = "/Useeffect" element={<UseEffectPage />} />
        <Route path = "/Countdown" element={<CountDownPage />} />
        <Route path = "/Chatapp" element={<ChatAppPage />} />
      </Routes>
    </div>
  )
}

export default App;
