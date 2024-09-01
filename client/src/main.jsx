import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import CreateVeiculos from './CriarVeiculos'
import ReadVeiculos from './ListarMatricula'
import UpdateVeiculos from './AlterarVeiculos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
            <Routes>
                  <Route path="/" element={ <Home/> }/>
                  <Route path="/CriarVeiculos" element={ <CreateVeiculos/> }/>
                  <Route path="/ListarMatricula" element={ <ReadVeiculos/> }/>
                  <Route path="/AlterarVeiculos" element={ <UpdateVeiculos/>}/>
            </Routes> 
      </BrowserRouter>
  </React.StrictMode>,
)



