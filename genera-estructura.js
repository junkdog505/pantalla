import fs from 'fs';
import path from 'path';

function getDirectoryStructure(dir, prefix = '', result = []) {
  // Leer los elementos del directorio
  const items = fs.readdirSync(dir);

  // Separar carpetas y archivos
  const folders = [];
  const files = [];

  items.forEach((item) => {
    const itemPath = path.join(dir, item);
    const stats = fs.statSync(itemPath);

    // Ignorar carpetas no deseadas
    if (['node_modules', '.git'].includes(item)) {
      return;
    }

    // En la carpeta public, solo incluir directorios
    if (dir.includes('public') && !stats.isDirectory()) {
      return;
    }

    if (stats.isDirectory()) {
      folders.push(item);
    } else {
      files.push(item);
    }
  });

  // Ordenar alfabéticamente
  folders.sort();
  files.sort();

  // Procesar carpetas primero
  folders.forEach((item, index) => {
    const isLast = index === folders.length - 1 && files.length === 0;
    const itemPath = path.join(dir, item);
    const connector = isLast ? '└── ' : '├── ';
    const newPrefix = prefix + (isLast ? '    ' : '│   ');

    result.push(prefix + connector + item);
    getDirectoryStructure(itemPath, newPrefix, result);
  });

  // Procesar archivos después
  files.forEach((item, index) => {
    const isLast = index === files.length - 1;
    const connector = isLast ? '└── ' : '├── ';
    result.push(prefix + connector + item);
  });

  return result;
}

// Obtener la raíz del proyecto y el nombre de la carpeta
const projectRoot = process.cwd();
const folderName = path.basename(projectRoot);
const structure = [`${folderName}/`];

// Generar la estructura
getDirectoryStructure(projectRoot, '', structure);

// Escribir la estructura en estructura.txt
try {
  fs.writeFileSync('estructura.txt', structure.join('\n'), 'utf8');
  console.log('Estructura generada en estructura.txt');
} catch (error) {
  console.error('Error al escribir estructura.txt:', error.message);
}