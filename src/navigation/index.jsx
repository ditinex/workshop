import { BrowserRouter, Routes, Route } from 'react-router'
import App from '../App.jsx'
import { HelloWorld, HelloWorld2 } from '../pages/index.js'

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/hello' element={<HelloWorld />} />
        <Route path='/hello-1' element={<HelloWorld />} />
        <Route path='/hello-2' element={<HelloWorld />} />
        <Route path='/hello-3' element={<HelloWorld />} />
        <Route path='/hello-world-2' element={<HelloWorld2 />} />
      </Routes>
    </BrowserRouter>
  )
}
