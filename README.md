# Launch X Node JS Playbook 🚀 de @edu18RR

<img width="1247" alt="image" src="https://user-images.githubusercontent.com/17634377/159151704-8949639b-ae5f-405a-a8b8-8d97f3f150cd.png">

Repositorio para guardar las prácticas de Launch X.
Módulos
Qué son los módulos en NodeJs?
Un módulo no es nada más que una unidad de código organizado en archivos o directorios. El objetivo principal de crear o trabjar con modulos es que se pueda exportar con facilidad para poder reutilizarse en otras partes de la aplicación o ser utilizado por terceros.

Tipos de módulos
Hay 3 tipos de módulos.

Built-in modules: Son los módulos nativos de la API de Node.js. No hace falta que se instalen, ya que vienen incluidos por defecto con Node.js.
Local modules: Son los módulos escritos por los desarrolladores y forman en su conjunto gran parte de la aplicación.
External modules: Son, en esencia, los paquetes de terceros distribuidos a través de npm. Estos paquetes se instalan como dependencias.
CommonJS
Node.JS usa el sistema de módulos CommonJS, pero hay otros tipos de módulos usados ​​en el ecosistema JavaScript. Los más destacados son los siguientes:

Asynchronous Module Definition (AMD)
ECMAScript 6 (ES6).
Teniendo en cuenta que antes de la llegada de ES6, Javascript no soportaba de forma nativa el uso de módulos, los programadores se las ingenieron para desarrollar sus propios module systems, aprovechando características del mismo lenguaje.

CommonJS es un proyecto que define una serie de especificaciones para el ecosistema de Javascript, fuera del navegador (por ejemplo, en el lado del servidor o para aplicaciones de escritorio).

Los desarrolladores de Node.js originalmente intentaron seguir la especificación de CommonJS, pero luego cambiaron de decisión.

Tanto en Node como en CommonJS, existen 2 palabras esenciales para interactuar con los módulos: require y exports.

require

Implementación en CommonJS: es una función que se puede usar para importar símbolos desde otro módulo al ámbito actual. El parámetro pasado a require es el id del módulo.
Implementación en Node: en Node el parametro pasado a la función require es el nombre del módulo dentro de la carpeta node_modules (o, en todo caso, la ruta hacia su ubicación).
exports Es un objeto especial: todo lo que es puesto en él se puede exportar como un elemento público (conservando el nombre de los elementos).

Module object
Module es un objeto global en NodeJs que se encuentra asociado a cada archivo. Y se ve más o menos así:

// file: main.js
Module { 
    id: '.',
    path: '/mnt/d/Proyectos Dev/playbook/weekly_mission_1/example2',
    exports: {},
    parent: null,
    filename: '/mnt/d/Proyectos Dev/playbook/weekly_mission_1/example2/main.js',
    loaded: false,
  children: [],
  paths: [
    '/mnt/d/Proyectos Dev/playbook/weekly_mission_1/example2/node_modules',
    '/mnt/d/Proyectos Dev/playbook/weekly_mission_1/node_modules',
    '/mnt/d/Proyectos Dev/playbook/node_modules',
    '/mnt/d/Proyectos Dev/node_modules',
    '/mnt/d/node_modules',
    '/mnt/node_modules',
    '/node_modules'
  ]
}
Y de este objeto la propiedad que más no interesa es exports, nos permitirá exportar nuestras funciones o variables y poder usarlas en cualquier parte del proyecto.

Si eres curioso y quieres visualizar por tu cuenta lo que devuelve el objeto Module {...}en tu máquina solo basta con hacer un console.log(module).

Formas de exportar código
Exportando directamente un método
// File: info.js
const info = function (name, currentAge) {
  return `
    NINJA, ${name.toUpperCase()}
    ${'------'.repeat(5)}
    Edad Actual: ${currentAge}
  `
}

// Exportación
module.exports = info
// File: main.js / Importación
const ninjaInfo  = require('./modules/info.js') 
const itachi = ninjaInfo('Itachi Uchiha', 21)

console.log(itachi) 
// Output:
/*
  NINJA, ITACHI UCHIHA
  ------------------------------
  Edad Actual: 21
*/
Ahora, una curiosidad, antes de continuar. Puedes usar la función require() directamente sin necesidad de guardarla antes en alguna variable.

console.log(
  require('./modules/info.js')('Naruto Uzumaki', 32)
)
// Output:
/*
  NINJA, NARUTO UZUMAKI
  ------------------------------
  Edad Actual: 32
*/
O pasando la función a exportar en la misma línea de exportación.

// File: info.js / Exportación 
module.exports = function info (name, currentAge) {
  return `
    NINJA, ${name.toUpperCase()}
    ${'------'.repeat(5)} 
    Edad Actual: ${currentAge}
  `
}
// File: main.js / Importación
const ninja = require('./info.js') 
console.log(ninja('Itachi Uchiha', 21))
// Output:
/*
  NINJA, ITACHI UCHIHA
  ------------------------------
  Edad Actual: 21
*/
La forma abreviada (alias)
Ahora, existe una forma más resumida de exportar. Y es usando simplemente exports en vez de module.exports. Y claro, su uso va a depender de con cuál te sientas más comod@ o del equipo con el que estés.

Pero algo que debes tener en cuenta es o utilizas una manera o la otra, pero nunca las combines. ¿Por qué? Problemas de exportación y de referencias.

// Exportación
// Bad
// exports = function msj () {
//   return 'Deberas (:'
// }

// Good
exports.msj = function msj () {
  return 'Deberas (:'
}
Exportar un objeto con diferentes métodos
// File: info.js
const info = function (name, currentAge) {
  return `
    NINJA, ${name.toUpperCase()}
    ${'------'.repeat(5)}
    Edad Actual: ${currentAge}
  `
}

const msj = function () {
  return 'Deberas (:'
}

// Exportación
// Usar el objeto exports para exportar 
// métodos no funciona.
/* 
  exports = {
    info,
    msj
  }
*/
// La única solución para que jale, seria agregando 
// los métodos como valor de una propiedad del objeto.
/*
  exports.msj = function msj () {
    return 'Deberas (:'
  }

  exports.info = function info (name, currentAge) {
    return `
      NINJA, ${name.toUpperCase()}
      ${'------'.repeat(5)}
      Edad Actual: ${currentAge}
    `
  }
*/

// O usando la propiedad exports del objeto module.
module.exports = {
  info,
  msj
}
// File: main.js / Importación
const ninja  = require('./modules/info.js') 
const itachi = ninja.info('Itachi Uchiha', 21)

console.log(itachi) 
console.log(ninja.msj())
// Output:
/*
    NINJA, ITACHI UCHIHA
    ------------------------------
    Edad Actual: 21

  Deberas (:
*/
Exportando métodos como propiedades del objeto exports
// File: info.js
const info = function (name, currentAge) {
  return `
    NINJA, ${name.toUpperCase()}
    ${'------'.repeat(5)}
    Edad Actual: ${currentAge}
  `
}

const msj = function () {
  return 'Deberas (:'
}

// Exportación
exports.info = info
exports.msj = msj
// File: main.js / Importación
const ninja  = require('./modules/info.js') 
const itachi = ninja.info('Itachi Uchiha', 21)

console.log(itachi) 
console.log(ninja.msj())
// Output:
/*
    NINJA, ITACHI UCHIHA
    ------------------------------
    Edad Actual: 21

  Deberas (:
*/
Por último, es clave mencionar que module.exports tiene más peso, lo escribas antes o después del objeto exports lo que hará es sobreescribir todas las exportaciones que estén con exports.

Example:

// File: example.js | Exportación
exports = "eso ya lo veremos.";
module.exports = "Esto anula todo lo demás.";
// File: main.js | Importanción
const otia = require('./modules/example.js');
console.log(otia);

// Output: Esto anula todo lo demás.
