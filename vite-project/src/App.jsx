import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from 'react-dom'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Browse from './pages/Browse'
import Info from './pages/Info'
import Home from './pages/Home'
import MovieSelection from './pages/MovieSelection'
import NotFound from './pages/404'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

    
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/info' element={<Info/>}/>
        <Route path='/browse' element={<Browse/>}/>
        <Route path='/movie' element={<MovieSelection/>}/>
        <Route path='/*' element={<NotFound/>}/>






      </Routes>
      
      
      
      
      </BrowserRouter>
    </div>
  )
}

export default App
