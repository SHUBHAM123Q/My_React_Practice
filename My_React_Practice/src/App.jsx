
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navebar from './Components/Navebar.jsx'
import Protected from './Components/Protected.jsx'
import Sign_Up from './Components/Sign_Up.jsx'
import Shubham from './Components/Shubham.jsx'
import Shyam from './Shyam.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navebar/>
        <Routes>
          <Route path='/' element={""}></Route>
          <Route path='/signup' element={<Sign_Up/>}></Route>
          <Route path='/shubham' element={<Shubham/>}></Route>
          <Route path='shyam' element={<Protected Component={Shyam} />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
