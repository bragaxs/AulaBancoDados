import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import CreateCarro from './CadastrarCarro'
import ReadCarros from './Carro'
import UpdateCarro from './AlterarCarro'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
            <Routes>
                  <Route path="/" element={ <Home/> }/>
                  <Route path="/carro/cadastrar" element={ <CreateCarro/> }/>
                  <Route path="/carros" element={ <ReadCarros/> }/>
                  <Route path="/carros/alterar" element={ <UpdateCarro/>}/>
            </Routes> 
      </BrowserRouter>
  </React.StrictMode>,
)
