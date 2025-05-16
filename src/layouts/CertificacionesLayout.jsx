import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillPlayFill } from 'react-icons/bs'; // Importa el ícono aquí
import ButtonBack from '../components/ButtonBack/ButtonBack';
import styles from './Styles/CertificacionesLayout.module.css';

/*************************************************
 * Componente CertificacionesLayout
 * Layout especial para la página de Certificaciones
 * con barra lateral y contenido principal
 *************************************************/
function CertificacionesLayout({ 
  children,
  elementosLateral = [],
  itemActivo = null,
  titulo = '',
  titulo_descripcion = null,
  descripcion = '',
  idioma = 'es',
  logo = '/public/kuna_logo.png',
  // Nuevos props para manejar la imagen y el comportamiento de clic
  imagenDestacada = null,
  onImageClick = null,
  showPlayButton = true  // Para controlar si se muestra el botón de play
}) {
  const navigate = useNavigate();

  const volverAtras = () => {
    navigate('/categorias');
  };

  // Determinar textos según idioma
  const obtenerTextoVolver = () => {
    return idioma === 'es' ? 'Volver' : 'Back';
  };

  // Función para procesar el título_descripcion y separar palabras
  const procesarTituloDescripcion = (texto) => {
    if (!texto) return null;
    
    // Dividir el texto en palabras
    const palabras = texto.split(' ');
    
    return (
      <h2 className={styles.titulo_descripcion}>
        {palabras.map((palabra, index) => (
          <span key={index} className={styles.palabraTituloDescripcion}>
            {palabra}
          </span>
        ))}
      </h2>
    );
  };

  // Función para renderizar la imagen destacada con botón de play
  const renderizarImagenDestacada = () => {
    if (!imagenDestacada) {
      // Si no hay imagen destacada, renderiza el contenido normal
      return children;
    }

    return (
      <div 
        className={styles.imgDestacadaContainer} 
        onClick={onImageClick || (() => {})}
      >
        <img
          src={imagenDestacada.ruta || imagenDestacada}
          alt={titulo}
          className={styles.imgDestacada}
        />
        {/* Botón de play central - solo si showPlayButton es true */}
        {showPlayButton && (
          <div className={styles.playButtonWrapper}>
            <div className={styles.playButton}>
              <BsFillPlayFill size={38} />
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={styles.contenedorLayout}>
      {/* Encabezado superior */}
      <header className={styles.cabecera}>
        <div className={styles.botonVolver}>
          <ButtonBack 
            text={obtenerTextoVolver()} 
            onClick={volverAtras}
            style="light"
            icon="arrow"
          />
        </div>
        <div className={styles.contenedorLogo}>
          <img src={logo} alt="KUNA" className={styles.logo} />
        </div>
      </header>

      <div className={styles.contenedorContenido}>
        {/* Barra lateral */}
        <div className={styles.barraLateral}>
          <ul className={styles.listaBarraLateral}>
            {elementosLateral.map((item) => (
              <li 
                key={item.id}
                className={`${styles.elementoBarraLateral} ${itemActivo === item.id ? styles.active : ''}`}
                onClick={() => item.onClick && item.onClick(item.id)}
              >
                <div className={styles.numeroElemento}>{item.id}</div>
                <div className={styles.textoElemento}>{item.titulo[idioma]}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Área de contenido principal */}
        <div className={styles.contenidoPrincipal}>
          {/* Área de video/imagen */}
          <div className={styles.seccionVideo}>
            {/* Renderizamos la imagen destacada o el contenido normal */}
            {imagenDestacada ? renderizarImagenDestacada() : children}
          </div>
          
          {/* Barra inferior */}
          <div className={styles.barraInfo}>
            {/* Sección de título (izquierda) */}
            <div className={styles.seccionTituloInfo}>
              {titulo_descripcion ? (
                <>
                  <h1 className={styles.titulo}>{titulo}</h1>
                  {procesarTituloDescripcion(titulo_descripcion)}
                </>
              ) : (
                <h1 className={styles.tituloSinDescripcion}>{titulo}</h1>
              )}
            </div>
            
            {/* Sección de descripción (derecha) */}
            <div className={styles.seccionDescripcionInfo}>
              <p className={styles.descripcion}>{descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificacionesLayout;