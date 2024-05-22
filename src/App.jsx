import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/pages/developer/ui/home/Home'
import Single from './components/pages/developer/ui/single/Single'
import Post from './components/pages/developer/dashboard/post/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/single' element={<Single/>}/>
        <Route path='/post' element={<Post/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
