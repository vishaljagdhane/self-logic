import { useContext,  } from 'react'

import './App.css'
import { DataProvider } from './applications/CommonContext/CommonDataProvider'
// import ApplicationTopBar from './applications/Dashboard/ApplicationTopBar'
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import ApplicationDashbaord from './applications/Dashboard/ApplicationDashbaord'

function App() {

const {test} =useContext(DataProvider)
  return (
    <>
   
<BrowserRouter>
<Routes>

  <Route path='/' element={<ApplicationDashbaord/>}></Route>
</Routes>
</BrowserRouter>
     
    </>
  )
}

export default App
