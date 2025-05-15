import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Styles/CategoriaKuna.module.css';
import LayoutBasico from '../../layouts/LayoutBasico';
import { categoriasKuna } from '../../lang/categoriasKuna';

/*************************************************
 * Componente CategoriaKuna
 * Muestra una cuadrícula de categorías disponibles
 * Permite al usuario seleccionar una categoría
 * para navegar a su página específica
 *************************************************/
function CategoriaKuna() {
  const navigate = useNavigate();
  const language = localStorage.getItem('idioma') || 'es';

  /*************************************************
   * Navega a la página específica de cada categoría
   *************************************************/
  const handleCategoryClick = (categoria) => {
    // Usar la ruta específica de cada categoría
    navigate(categoria.ruta);
  };

  /*************************************************
   * Regresa a la página de inicio
   *************************************************/
  const handleBack = () => {
    navigate('/');
  };

  return (
    <LayoutBasico 
      buttonText={language === 'es' ? 'Volver' : 'Back'}
      onButtonClick={handleBack}
    >
      <div className={styles.gridContainer}>
        {categoriasKuna.map((categoria) => (
          <div 
            key={categoria.id} 
            className={styles.categoriaItem}
            onClick={() => handleCategoryClick(categoria)}
          >
            {/* Imagen de fondo de la categoría */}
            <img 
              src={categoria.imagenFondo} 
              alt="" // Alt vacío para evitar duplicación
              className={styles.imagenFondo}
            />
            
            {/* Overlay con logo o título */}
            <div className={styles.overlay}>
              {categoria.logo ? (
                <img 
                  src={categoria.logo} 
                  alt={categoria.titulo[language]}
                  className={styles.logo}
                />
              ) : (
                <h2 className={styles.titulo}>{categoria.titulo[language]}</h2>
              )}
            </div>
          </div>
        ))}
      </div>
    </LayoutBasico>
  );
}

export default CategoriaKuna;