
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Items7 from './component/Items7.jsx'
import Locations from './component/Locations.jsx'
import Menu from './component/Menu.jsx'
import About from './component/About.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Items7 />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
