import React, { useState, useRef, useEffect } from 'react';
import styles from './Styles/BotonesUbicables.module.css';

/**
 * Componente BotonesUbicables
 * Muestra puntos interactivos y botones conectados por líneas punteadas
 * sobre una imagen de fondo, con posiciones relativas.
 */
function BotonesUbicables({ imagen, puntos, onPuntoClick }) {
  const [puntoActivo, setPuntoActivo] = useState(null);
  const [lineas, setLineas] = useState([]);
  const [dimensiones, setDimensiones] = useState({ width: 0, height: 0 });
  
  // Referencias para medir posiciones
  const puntosRefs = useRef({});
  const botonesRefs = useRef({});
  const containerRef = useRef(null);
  const imagenRef = useRef(null);
  
  // Calcular dimensiones de la imagen cuando se carga
  useEffect(() => {
    const actualizarDimensiones = () => {
      if (imagenRef.current) {
        const { width, height } = imagenRef.current;
        setDimensiones({ width, height });
      }
    };
    
    const imagen = imagenRef.current;
    if (imagen) {
      if (imagen.complete) {
        actualizarDimensiones();
      } else {
        imagen.addEventListener('load', actualizarDimensiones);
      }
    }
    
    return () => {
      if (imagen) {
        imagen.removeEventListener('load', actualizarDimensiones);
      }
    };
  }, []);
  
  // Calcular posiciones de líneas cuando se carga el componente o cambian las dimensiones
  useEffect(() => {
    if (dimensiones.width === 0 || dimensiones.height === 0) return;
    
    // Esperar al siguiente frame para asegurar que los elementos están renderizados
    const timer = setTimeout(() => {
      calcularLineas();
      
      // También recalcular si la ventana cambia de tamaño
      window.addEventListener('resize', calcularLineas);
    }, 100);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calcularLineas);
    };
  }, [dimensiones]);

  // Función para calcular las líneas entre puntos y botones
  const calcularLineas = () => {
    if (!containerRef.current) return;
    
    const nuevasLineas = [];
    
    // Obtener posición del contenedor para coordenadas relativas
    const containerRect = containerRef.current.getBoundingClientRect();
    
    // Para cada punto y botón, calcular una línea
    puntos.forEach(punto => {
      const puntoRef = puntosRefs.current[punto.id];
      const botonRef = botonesRefs.current[punto.id];
      
      if (puntoRef && botonRef) {
        const puntoRect = puntoRef.getBoundingClientRect();
        const botonRect = botonRef.getBoundingClientRect();
        
        // Calcular centro del punto
        const puntoCentroX = puntoRect.left + puntoRect.width / 2 - containerRect.left;
        const puntoCentroY = puntoRect.top + puntoRect.height / 2 - containerRect.top;
        
        // Calcular centro del botón
        const botonCentroX = botonRect.left + botonRect.width / 2 - containerRect.left;
        const botonCentroY = botonRect.top + botonRect.height / 2 - containerRect.top;
        
        // Calcular ángulo
        const angulo = Math.atan2(botonCentroY - puntoCentroY, botonCentroX - puntoCentroX) * (180 / Math.PI);
        
        // Calcular longitud
        const longitud = Math.sqrt(
          Math.pow(botonCentroX - puntoCentroX, 2) + 
          Math.pow(botonCentroY - puntoCentroY, 2)
        );
        
        nuevasLineas.push({
          id: punto.id,
          x: puntoCentroX,
          y: puntoCentroY,
          angulo,
          longitud
        });
      }
    });
    
    setLineas(nuevasLineas);
  };

  // Convertir coordenadas porcentuales a píxeles
  const convertirCoordenadas = (coord, ejeX = true) => {
    // Si las coordenadas ya están en porcentaje (por ejemplo, '20%')
    if (typeof coord === 'string' && coord.endsWith('%')) {
      return coord;
    }
    
    // Si son coordenadas numéricas, convertirlas a posición relativa
    const dimension = ejeX ? dimensiones.width : dimensiones.height;
    return `${(coord / 1000) * 100}%`; // Asumiendo que las coordenadas originales son para una imagen de 1000px
  };

  return (
    <div 
      className={styles.container}
      ref={containerRef}
    >
      {/* Imagen de fondo */}
      <img 
        src={imagen} 
        alt="Imagen de fondo" 
        className={styles.backgroundImage}
        ref={imagenRef}
      />
      
      {/* Capa para puntos, líneas y botones */}
      <div className={styles.interactiveLayer}>
        {/* Renderizar líneas */}
        {lineas.map(linea => (
          <div 
            key={`linea-${linea.id}`}
            className={`${styles.connector} ${puntoActivo === linea.id ? styles.connectorActive : ''}`}
            style={{
              left: `${linea.x}px`,
              top: `${linea.y}px`,
              width: `${linea.longitud}px`,
              transform: `rotate(${linea.angulo}deg)`
            }}
          />
        ))}
        
        {/* Renderizar puntos y botones */}
        {puntos.map((punto) => (
          <React.Fragment key={punto.id}>
            {/* Punto - ahora usando data-id para aplicar estilos específicos por punto */}
            <div 
              className={`${styles.point} ${puntoActivo === punto.id ? styles.pointActive : ''}`}
              data-id={punto.id} // Para aplicar estilos específicos por punto
              style={{
                left: convertirCoordenadas(punto.boton.coordenadas[0], true),
                top: convertirCoordenadas(punto.boton.coordenadas[1], false),
                width: `${punto.boton.coordenadas[2] * 2}px`, 
                height: `${punto.boton.coordenadas[2] * 2}px`
              }}
              onClick={() => onPuntoClick(punto)}
              onMouseEnter={() => setPuntoActivo(punto.id)}
              onMouseLeave={() => setPuntoActivo(null)}
              ref={el => puntosRefs.current[punto.id] = el}
            />
            
            {/* Botón */}
            <button
              className={`${styles.labelButton} ${puntoActivo === punto.id ? styles.labelButtonActive : ''}`}
              style={{
                top: convertirCoordenadas(punto.boton.posicion.top, false),
                left: convertirCoordenadas(punto.boton.posicion.left, true)
              }}
              onClick={() => onPuntoClick(punto)}
              onMouseEnter={() => setPuntoActivo(punto.id)}
              onMouseLeave={() => setPuntoActivo(null)}
              ref={el => botonesRefs.current[punto.id] = el}
            >
              {punto.boton.etiqueta}
            </button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default BotonesUbicables;