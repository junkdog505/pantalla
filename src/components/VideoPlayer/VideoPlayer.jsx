import React, { useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import { FiPause, FiPlay } from 'react-icons/fi'; // Importar iconos de React
import LayoutVideo from '../../layouts/LayoutVideo';
import styles from './Styles/VideoPlayer.module.css';

function VideoPlayer({
  videoSrc,
  onVideoEnd,
  buttonStyle = 'default',
  navigationPath = '/categorias',
  buttonVariant = 'dark'
}) {
  const navigate = useNavigate();
  const playerContainerRef = useRef(null);
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [showPlayPauseIcon, setShowPlayPauseIcon] = useState(false);

  // Aplicar CSS al video - mejorado para persistencia
  useEffect(() => {
    const applyStyles = () => {
      if (playerContainerRef.current) {
        const videoElement = playerContainerRef.current.querySelector('video');
        if (videoElement) {
          // Aplicar estilos
          videoElement.style.objectFit = 'cover';
          videoElement.style.width = '100%';
          videoElement.style.height = '100%';
          videoElement.style.position = 'absolute';
          videoElement.style.top = '0';
          videoElement.style.left = '0';
        } else {
          // Si el video no existe todavía, intentar de nuevo
          setTimeout(applyStyles, 100);
        }
      }
    };

    // Aplicar estilos inmediatamente
    applyStyles();

    // MutationObserver para detectar cambios en el DOM
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          // Si se añaden nuevos nodos, verificar si es nuestro video y aplicar estilos
          applyStyles();
        }
      });
    });

    // Iniciar observación
    if (playerContainerRef.current) {
      observer.observe(playerContainerRef.current, {
        childList: true,
        subtree: true
      });
    }

    // Limpiar observador al desmontar
    return () => {
      observer.disconnect();
    };
  }, []);

  // Manejar eventos del reproductor
  const handleReady = () => {
    // Aplicar estilos de nuevo cuando el reproductor esté listo
    if (playerContainerRef.current) {
      const videoElement = playerContainerRef.current.querySelector('video');
      if (videoElement) {
        videoElement.style.objectFit = 'cover';
        videoElement.style.width = '100%';
        videoElement.style.height = '100%';
      }
    }
  };

  const handleBack = () => {
    navigate(navigationPath);
  };

  // Función para alternar reproducción/pausa
  const togglePlayPause = () => {
    setPlaying(!playing);
    
    // Mostrar ícono de play/pause temporalmente
    setShowPlayPauseIcon(true);
    setTimeout(() => {
      setShowPlayPauseIcon(false);
    }, 800);
  };

  return (
    <LayoutVideo
      buttonStyle={buttonStyle}
      buttonVariant={buttonVariant}
      onButtonClick={handleBack}
    >
      <div 
        className={styles.videoContainer} 
        ref={playerContainerRef}
        onClick={togglePlayPause} // Evento de clic para pausar/reanudar
      >
        <ReactPlayer
          ref={playerRef}
          url={videoSrc}
          playing={playing}
          controls={true} // Mostrar controles nativos
          onEnded={onVideoEnd}
          onReady={handleReady}
          width="100%"
          height="100%"
          playsinline={true}
          config={{
            file: {
              attributes: {
                controlsList: 'nodownload nofullscreen',
                style: {
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%'
                }
              }
            }
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0
          }}
          className={styles.reactPlayer}
        />
        
        {/* Indicador visual de play/pause con iconos de React */}
        {showPlayPauseIcon && (
          <div className={styles.playPauseIcon}>
            {playing ? <FiPause size={60} /> : <FiPlay size={60} />}
          </div>
        )}
      </div>
    </LayoutVideo>
  );
}

export default VideoPlayer;