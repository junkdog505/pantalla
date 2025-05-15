import React from 'react';
import { useNavigate } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { categoriasKuna } from '../../lang/categoriasKuna';

/*************************************************
 * Componente Kuna
 * Muestra video de la categoría Kuna
 *************************************************/
function Kuna() {
  const navigate = useNavigate();
  
  // Obtener información de la categoría Kuna
  const kunaCategory = categoriasKuna.find(cat => cat.id === 1);

  /*************************************************
   * Maneja cuando termina el video
   * Navega de regreso a las categorías
   *************************************************/
  const handleVideoEnd = () => {
    navigate('/categorias');
  };

  return (
    <VideoPlayer
      videoSrc={kunaCategory.video_ruta}
      onVideoEnd={handleVideoEnd}
      buttonStyle="default"
        buttonVariant="light" // Especifica 'light' o 'dark' aquí
      navigationPath="/categorias"
    />
  );
}

export default Kuna;