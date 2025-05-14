import { useState } from 'react';

import styles from '../styles/Home.module.css';

function Home() {
  const [paginaActual, setPaginaActual] = useState('idioma');
  const [idiomaSeleccionado, setIdiomaSeleccionado] = useState(null);
  const [videoSeleccionado, setVideoSeleccionado] = useState(null);

  const manejarSeleccionIdioma = (idioma) => {
    setIdiomaSeleccionado(idioma);
    setPaginaActual('seleccionVideo');
  };

  const manejarSeleccionVideo = (video) => {
    setVideoSeleccionado(video);
    setPaginaActual('reproductorVideo');
  };

  const manejarVolver = () => {
    if (paginaActual === 'reproductorVideo') {
      setPaginaActual('seleccionVideo');
    } else if (paginaActual === 'seleccionVideo') {
      setPaginaActual('idioma');
    }
  };

  return (
    <section className={styles.mainContainer}>
      {paginaActual === 'idioma' && (
        <div className={styles.seleccionIdioma}>
          <div className={styles.logo}><img src="../public/logos/KUNA.png" alt="KUNA" /></div>
          <p className={styles.descripcion}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <div className={styles.botonesIdioma}>
            <button onClick={() => manejarSeleccionIdioma('es')}>Español</button>
            <button onClick={() => manejarSeleccionIdioma('en')}>English</button>
          </div>
        </div>
      )}
      {paginaActual === 'seleccionVideo' && (
        <SeleccionVideo 
          language={idiomaSeleccionado} 
          onVideoSelect={manejarSeleccionVideo}
          onBack={manejarVolver}
        />
      )}
      {paginaActual === 'reproductorVideo' && (
        <ReproductorVideo 
          video={videoSeleccionado} 
          language={idiomaSeleccionado}
          onBack={manejarVolver}
        />
      )}
    </section>
  );
}

export default Home;