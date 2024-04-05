import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { getApp } from './utils/helpers'

function App() {
  const CurrentApp =getApp()
  return (
   <div>
    <BrowserRouter>
      <CurrentApp/>
    </BrowserRouter>

   </div>
  )
}

export default App
