// Datos de palabras y sus frecuencias
const words = [
  ["COLABOREMOS PARA", 12],
  ["MEJORAR EL BIENESTAR DE TU EQUIPO", 3],
  ["FORTALECER HERRAMIENTAS DE CRECIMIENTO GRUPAL", 4],
  ["POTENCIAR EL DESARROLLO EMOCIONAL DE TU EQUIPO", 4]
];

// Configuración de la nube de palabras
function generarNubeDePalabras() {
  WordCloud(document.getElementById('wordCloudCanvas'), {
    list: words,
    gridSize: 12,
    weightFactor: 4,
    fontFamily: 'Arial',
    color: '#F24C3D',
    rotateRatio: 0,
    backgroundColor: '#ffff'
  });
}

// Llama a la función para crear la nube de palabras
document.addEventListener("DOMContentLoaded", generarNubeDePalabras);

  