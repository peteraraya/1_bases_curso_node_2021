
// FileSystem
const { crearArchivo } = require('./helpers/multiplicar');
// config/argv
const argv = require('./config/yargs');
// colors
const colors = require('colors');

// Que nuestra función trabaje como una promesa
crearArchivo(argv.base, argv.listar, argv.limite)
  .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado' ) )
  .catch( error => console.log(error) );



