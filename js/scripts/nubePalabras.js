// Datos de palabras y sus frecuencias
const words = [
  ["COLABOREMOS PARA", 12],
  ["MEJORAR EL BIENESTAR DE TU EQUIPO", 3],
  ["FORTALECER HERRAMIENTAS DE CRECIMIENTO GRUPAL", 4],
  ["POTENCIAR EL DESARROLLO EMOCIONAL DE TU EQUIPO", 4],
  ["CREAR ENTORNOS DE TRABAJO SALUDABLES", 5],
  ["FOMENTAR LA PRODUCTIVIDAD Y EL BIENESTAR", 3],
  ["APOYAR EL CRECIMIENTO PERSONAL Y PROFESIONAL", 6],
  ["PROMOVER UNA CULTURA DE BIENESTAR", 7],

];

// Configuración de la nube de palabras
function generarNubeDePalabras() {
  WordCloud(document.getElementById('wordCloudCanvas'), {
    list: words,
    gridSize: 12,
    weightFactor: 4,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#F24C3D',
    rotateRatio: 0,
    backgroundColor: 'transparent'
  });
}

// Para hacer que "COLABOREMOS PARA" sea en negrita:
const modifiedWords = words.map(word => {
  if (word[0] === "COLABOREMOS PARA") {
    return [ "<strong>" + word[0] + "</strong>", word[1] ];
  }
  return word;
});

// Llama a la función para crear la nube de palabras
document.addEventListener("DOMContentLoaded", generarNubeDePalabras);

  