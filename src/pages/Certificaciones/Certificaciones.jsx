
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CertificacionesLayout from '../../layouts/CertificacionesLayout';
import ReactPlayer from 'react-player';
import { datosCertificaciones } from '../../lang/certificacionesData';
import styles from './Styles/Certificaciones.module.css';

/*************************************************
 * Componente Certificaciones
 * Muestra información sobre las certificaciones y
 * estándares de calidad de KUNA
 *************************************************/
function Certificaciones() {
  const navigate = useNavigate();
  const idioma = localStorage.getItem('idioma') || 'es';
  const [itemActivo, setItemActivo] = useState(1);
  const [reproduciendo, setReproduciendo] = useState(false); // Inicialmente no reproduciendo
  const [mostrarIconoReproduccion, setMostrarIconoReproduccion] = useState(false);

  // Elementos de la barra lateral
  const elementosLateral = datosCertificaciones.map(item => ({
    id: item.id,
    titulo: item.titulo,
    onClick: (id) => {
      setItemActivo(id);
      setReproduciendo(false); // Al cambiar de item, volver a mostrar la imagen destacada
    }
  }));

  // Obtener datos del elemento activo
  const datosItemActivo = datosCertificaciones.find(item => item.id === itemActivo);

  // Manejar reproducción de video
  const alternarReproduccion = () => {
    // Si estamos en la imagen destacada, comenzar a reproducir
    if (!reproduciendo) {
      setReproduciendo(true);
    } else {
      // Si estamos reproduciendo, pausar y mostrar icono
      setReproduciendo(false);
      setMostrarIconoReproduccion(true);
      setTimeout(() => setMostrarIconoReproduccion(false), 800);
    }
  };

  // Renderizar el contenido multimedia
  const renderizarVideo = () => {
    if (!datosItemActivo || (!datosItemActivo.video && !datosItemActivo.imgDestacadaVideo)) return null;

    // Si estamos mostrando la imagen destacada (no reproduciendo video)
    if (!reproduciendo && datosItemActivo.imgDestacadaVideo) {
      return (
        <div 
          className={styles.imgDestacadaContainer}
          onClick={alternarReproduccion}
        >
          <img 
            src={datosItemActivo.imgDestacadaVideo.ruta} 
            alt={datosItemActivo.titulo[idioma]} 
            className={styles.imgDestacada}
          />
          <div className={styles.playButtonOverlay}>
            <div className={styles.playButton}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="32" height="32">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      );
    }

    // Si estamos reproduciendo el video
    return (
      <div 
        className={styles.videoWrapper}
        onClick={alternarReproduccion}
      >
        <ReactPlayer
          url={datosItemActivo.video.ruta}
          playing={reproduciendo}
          controls={true}
          width="100%"
          height="100%"
          playsinline={true}
          config={{
            file: {
              attributes: {
                controlsList: 'nodownload nofullscreen'
              }
            }
          }}
        />
        
        {/* Icono de play/pause */}
        {mostrarIconoReproduccion && (
          <div className={styles.playPauseIcon}>
            {reproduciendo ? '⏸' : '▶'}
          </div>
        )}
      </div>
    );
  };

  return (
    <CertificacionesLayout
      elementosLateral={elementosLateral}
      itemActivo={itemActivo}
      titulo={datosItemActivo?.titulo[idioma]}
      titulo_descripcion={datosItemActivo?.titulo_descripcion?.[idioma]}
      descripcion={datosItemActivo?.descripcion[idioma]}
      idioma={idioma}
      logo={datosItemActivo?.logo?.ruta || '/public/kuna_logo.png'}
    >
      {renderizarVideo()}
    </CertificacionesLayout>
  );
}

export default Certificaciones;