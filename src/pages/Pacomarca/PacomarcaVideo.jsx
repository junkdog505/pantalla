import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

/**
 * Componente PacomarcaVideo
 * Muestra el video de un punto específico de Pacomarca
 * usando el VideoPlayer con layout de video
 */
function PacomarcaVideo() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const language = localStorage.getItem('idioma') || 'es';
  
  // Función para manejar cuando termina el video
  const handleVideoEnd = () => {
    // Volver a la página de detalle
    navigate(`/pacomarca/${slug}`);
  };
  
  // Función para el botón de volver
  const handleBack = () => {
    navigate(`/pacomarca/${slug}`);
  };

  // Obtener la ruta del video según el slug
  // Esto dependerá de cómo estén organizados tus datos
  // Aquí usamos un ejemplo simple, pero deberías adaptarlo a tu estructura de datos
  const getVideoSource = () => {
    // En un caso real, esto debería venir de tus datos
    // Por ejemplo, podrías buscar en pacomarcaData.paginas
    return `/videos/${slug}.mp4`;
  };

  return (
    <VideoPlayer
      videoSrc={getVideoSource()}
      onVideoEnd={handleVideoEnd}
      buttonStyle="default"
      buttonVariant="light"
      navigationPath={`/pacomarca/${slug}`}
      onButtonClick={handleBack}
    />
  );
}

export default PacomarcaVideo;