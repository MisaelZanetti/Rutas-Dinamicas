import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Inicio from './Inicio.jsx'
import Pelis from './Pelis.jsx'
import PelisCategorias from './PelisCategorias.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}>
          <Route path='peliculas/all' element={<Pelis />}></Route>
          <Route path="peliculas/:id" element={<PelisCategorias />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
