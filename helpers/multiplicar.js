

const fs = require('fs');
const crearArchivo = async (base = 5, listar = false, limite = 10) => {

const colors = require('colors');

  try {

    let salida, consola = '';

    for (let i = 0; i <= limite; i++) {
      salida += `${base} ${'x'.green} ${i} ${'='.green} ${colors.cyan.bold(base * i)}\n`;
      consola += `${base} ${'x'} ${i} ${'='} ${(base * i)}\n`;
    }

    if (listar) {
      // colocando async transformo mi respuesta en una promesa
      console.log('====================='.green);
      console.log(`  Tabla del `.green, colors.magenta.bold(base) );
      console.log('====================='.green);
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, consola)

    return `./salida/tabla-${base}.txt creado correctamente`;

  } catch (error) {
    console.log(err)
  }

}

module.exports = {
  crearArchivo
};