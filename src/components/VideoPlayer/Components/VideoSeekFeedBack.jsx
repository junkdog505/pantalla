/*************************************************
 * VideoSeekFeedback.jsx
 * Componente para el feedback visual de seek
 *************************************************/
import React from 'react';
import styles from '../Styles/VideoPlayer.module.css';

function VideoSeekFeedback({ showSeekFeedback }) {
  if (!showSeekFeedback) return null;

  return (
    <div className={`${styles.seekFeedback} ${styles[showSeekFeedback]}`}>
      {showSeekFeedback === 'forward' ? '+10s' : '-10s'}
    </div>
  );
}

export default VideoSeekFeedback;