import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CertificacionesLayout from '../../layouts/CertificacionesLayout';
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

  // Elementos de la barra lateral
  const elementosLateral = datosCertificaciones.map(item => ({
    id: item.id,
    titulo: item.titulo,
    onClick: (id) => {
      setItemActivo(id);
    }
  }));

  // Obtener datos del elemento activo
  const datosItemActivo = datosCertificaciones.find(item => item.id === itemActivo);

  // Manejar clic en la imagen principal para ir a ver el video
  const handleImageClick = () => {
    if (datosItemActivo && datosItemActivo.video) {
      const videoSlug = datosItemActivo.titulo[idioma].toLowerCase().replace(/\s+/g, '-');
      navigate(`/certificaciones/video/${videoSlug}`);
    }
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
      // Nuevos props para la imagen y el comportamiento
      imagenDestacada={datosItemActivo?.imgDestacadaVideo?.ruta}
      onImageClick={handleImageClick}
      showPlayButton={true}
    >
      {/* Ya no necesitamos el renderizarImagen aquí, se maneja en el layout */}
    </CertificacionesLayout>
  );
}

export default Certificaciones;