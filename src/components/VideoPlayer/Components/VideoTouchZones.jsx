
/*************************************************
 * VideoTouchZones.jsx
 * Componente para las zonas táctiles del video
 *************************************************/
import React from 'react';
import styles from '../Styles/VideoPlayer.module.css';

function VideoTouchZones({ isPlaying, onTouch }) {
  return (
    <div className={styles.touchZones} onTouchStart={onTouch}>
      <div className={styles.touchZoneLeft}>
        <span className={styles.touchIcon}>⟲ 10s</span>
      </div>
      <div className={styles.touchZoneCenter}>
        <span className={styles.touchIcon}>
          {isPlaying ? '⏸' : '▶'}
        </span>
      </div>
      <div className={styles.touchZoneRight}>
        <span className={styles.touchIcon}>10s ⟳</span>
      </div>
    </div>
  );
}

export default VideoTouchZones;