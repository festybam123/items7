
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Items7 from './component/Items7.jsx'
import Locations from './component/Locations.jsx'
import Menu from './component/Menu.jsx'
import About from './component/About.jsx'
import Order from './component/Order.jsx'
import History from './component/History.jsx'
import News from './component/News.jsx'
import NewsPage2 from './component/NewsPage2.jsx'
import NewsFull from './component/NewsFull.jsx'
import Contact from './component/Contact.jsx'
import Newlocation from './component/Newlocation.jsx'
import Cofshop from './component/Cofshop.jsx'
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
        <Route path='/order' element={<Order />} />
        <Route path='/history' element={<History />} />
        <Route path='/news' element={<News />} />
        <Route path='/newspage2' element={<NewsPage2 />} />
        <Route path='/news/full' element={<NewsFull />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/newlocation' element={<Newlocation />} />
        <Route path='/cofshop' element={<Cofshop />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
