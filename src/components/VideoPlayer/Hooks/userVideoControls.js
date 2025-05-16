/*************************************************
 * useVideoControls.js
 * Hook personalizado para manejar controles de video
 *************************************************/
import { useState, useRef, useEffect } from 'react';

function useVideoControls(videoRef) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [showSeekFeedback, setShowSeekFeedback] = useState(null);
  
  const controlsTimer = useRef(null);

  /*************************************************
   * Play/Pause del video
   *************************************************/
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  /*************************************************
   * Buscar en el video (adelantar/retroceder)
   *************************************************/
  const seekVideo = (seconds) => {
    if (videoRef.current) {
      const newTime = Math.max(0, Math.min(duration, currentTime + seconds));
      videoRef.current.currentTime = newTime;
      
      // Mostrar feedback visual
      setShowSeekFeedback(seconds > 0 ? 'forward' : 'backward');
      setTimeout(() => setShowSeekFeedback(null), 500);
    }
  };

  /*************************************************
   * Mostrar controles temporalmente
   *************************************************/
  const showTemporaryControls = () => {
    setShowControls(true);
    
    if (controlsTimer.current) {
      clearTimeout(controlsTimer.current);
    }
    
    controlsTimer.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  /*************************************************
   * Actualizar tiempo del video
   *************************************************/
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    const updatePlayingState = () => setIsPlaying(!video.paused);

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('play', updatePlayingState);
    video.addEventListener('pause', updatePlayingState);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('play', updatePlayingState);
      video.removeEventListener('pause', updatePlayingState);
    };
  }, []);

  /*************************************************
   * Formatear tiempo en mm:ss
   *************************************************/
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return {
    isPlaying,
    currentTime,
    duration,
    showControls,
    showSeekFeedback,
    togglePlayPause,
    seekVideo,
    showTemporaryControls,
    formatTime
  };
}

export default useVideoControls;