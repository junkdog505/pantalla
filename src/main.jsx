import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

// Importar páginas
import Home from './pages/Home/Home.jsx'
import CategoriaKuna from './pages/CategoriaKuna/CategoriaKuna.jsx'
import Kuna from './pages/Kuna/Kuna.jsx'
import Colecciones from './pages/Colecciones/Colecciones.jsx'
import Pacomarca from './pages/Pacomarca/Pacomarca.jsx'
import Certificaciones from './pages/Certificaciones/Certificaciones.jsx'
import CertificacionVideo from './pages/Certificaciones/CertificacionVideo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<CategoriaKuna />} />
        <Route path="/kuna" element={<Kuna />} />
        <Route path="/colecciones" element={<Colecciones />} />
        <Route path="/pacomarca" element={<Pacomarca />} />
        <Route path="/certificaciones" element={<Certificaciones />} />
        <Route path="/certificaciones/video/:videoSlug" element={<CertificacionVideo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)