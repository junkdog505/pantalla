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
import PacomarcaDetalle from './pages/Pacomarca/PacomarcaDetalle.jsx'
import PacomarcaVideo from './pages/Pacomarca/PacomarcaVideo.jsx' // Nueva página de video
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
        <Route path="/pacomarca/:slug" element={<PacomarcaDetalle />} />
        <Route path="/pacomarca/:slug/video" element={<PacomarcaVideo />} /> {/* Nueva ruta para el video */}
        <Route path="/certificaciones" element={<Certificaciones />} />
        <Route path="/certificaciones/video/:videoSlug" element={<CertificacionVideo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)