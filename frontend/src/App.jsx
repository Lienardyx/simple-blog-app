
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import Homescreen from './pages/Homescreen'
import Blogsitesdiary from './pages/Blogsitesdiary'
import Create from './pages/Create'
import Emptypage from './pages/Emptypage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Homescreen />}></Route>
          <Route path='/blogsitesdiary/:id' element={<Blogsitesdiary />}></Route>
          <Route path='/createblogsitesdiary' element={<Create />}></Route>
          <Route path='*' element={<Emptypage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
