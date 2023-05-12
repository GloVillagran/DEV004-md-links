#!/usr/bin/env node
// link para convertir a md-link

// libreria nativa para leer argumentos de la terminal
import { argv } from 'process'
// importo la api de mdLinks
import { mdLinks } from './index.js'
// import { chalk } from 'chalk'; // importar despues para dar estilo a la terminal

const path = argv[1];
const validate = argv.includes('--validate');
const stats = argv.includes('--stats');
const help = argv.includes('--help');

const CLI = () => {
    if(path === undefined){
        console.log(('no path, enter correct path'))
        return
    }

}



// iterando todos los argumentos(incluyendo la ruta del nod y la ruta del archivo)
/*argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});*/

CLI();





// obtengo solos los argumentos adicionales creando un nuevo array que excluya los primeros dos parametros
/* const args = process.argv.slice(2);
args[0]; */

/* if (process.argv.length === 2) {
   // console.error('¡Se esperaba al menos un argumento!');
    process.exit(1);
}
if (process.argv[2] && process.argv[2] === '-f') {
    console.log('Flag is present.');
} else {
    console.log('Flag is not present.');
} */
/*const [,, ...args] = process.argv
console.log(`Hello World ${args}`)*/

// lee los argumentos de las lineas de comando y pasarlo a md links
/* import { mdLinks } from "./index.js";
mdLinks('/gloria/prueba/').then (() => {})
.catch((error) => {
    console.log(error);
});*/

