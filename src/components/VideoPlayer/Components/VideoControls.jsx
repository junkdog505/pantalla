/*************************************************
 * VideoControls.jsx
 * Componente para los controles del video
 *************************************************/
import React from 'react';
import styles from '../Styles/VideoPlayer.module.css';

function VideoControls({ currentTime, duration, showControls, formatTime }) {
  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`${styles.controls} ${showControls ? styles.controlsVisible : ''}`}>
      <div className={styles.controlsBar}>
        <span className={styles.time}>{formatTime(currentTime)}</span>
        <div className={styles.progressBar}>
          <div 
            className={styles.progress}
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className={styles.time}>{formatTime(duration)}</span>
      </div>
    </div>
  );
}

export default VideoControls;