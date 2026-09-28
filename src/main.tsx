import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import App from './App'
import ProgramandoFuturo from './pages/ProgramandoFuturo'
import Workshop from './pages/Workshop'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/ScrollToTop'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/projetos/programando-o-futuro"
          element={<ProgramandoFuturo />}
        />
        <Route path="/oficina" element={<Workshop />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
