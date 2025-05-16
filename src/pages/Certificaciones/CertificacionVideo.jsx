import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { datosCertificaciones } from '../../lang/certificacionesData';

/*************************************************
 * Componente CertificacionVideo
 * Muestra el video de una certificación específica
 * basado en el parámetro URL
 *************************************************/
function CertificacionVideo() {
  const { videoSlug } = useParams();
  const navigate = useNavigate();
  const idioma = localStorage.getItem('idioma') || 'es';
  
  // Encontrar la certificación correspondiente por el slug (URL amigable del título)
  const certificacion = datosCertificaciones.find(item => {
    const itemSlug = item.titulo[idioma].toLowerCase().replace(/\s+/g, '-');
    return itemSlug === videoSlug;
  });

  // Manejar la finalización del video
  const handleVideoEnd = () => {
    navigate('/certificaciones');
  };

  // Si no se encuentra la certificación, volver a la página principal
  if (!certificacion || !certificacion.video) {
    return <div>Video no encontrado. Redirigiendo...</div>;
  }

  return (
    <VideoPlayer
      videoSrc={certificacion.video.ruta}
      onVideoEnd={handleVideoEnd}
      buttonStyle="default"
      buttonVariant="light"
      navigationPath="/certificaciones"
    />
  );
}

export default CertificacionVideo;