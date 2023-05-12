import { existsSync, readdirSync, stat, Stats} from 'node:fs';
import { readFile } from 'node:fs/promises';
import { resolve, extname, isAbsolute } from 'node:path';
import { statSync } from 'node:fs';
import { searchLinks } from './md-links.js';



// valida si existe la ruta
export const validatePath = (path) => existsSync(path);

 // ver si la ruta es absoluta, si es relativa se convierte
export const resolveRelativePath = (path) => {
   if(isAbsolute(path)) /* <is absolute path?> */ {
    return path;
   } else {
    // console.log(path);
    return resolve(path);
   }
};
//valida si es directorio
export const validateDirectory = (absolutePath) => statSync(absolutePath).isDirectory();

//valida si es un archivo md
export const validateMDFile = (filePath) => extname(filePath) === ".md";

//lee el archivo y busca los links(es una promesa)
export const readFileAndSearchLinks = (filePath) => {
  return readFile(filePath, 'utf-8').then(
    result =>  ({filePath, result}),
  ) .then(({filePath, result}) => searchLinks(result, filePath) //para buscar los links

  ) 
  .catch(err => {throw new Error("error reading file")});

};

//lista archivos del directorio
export const listFilesFromDirectory = (absolutePath) => {
    let readFilePromises = [];
    const files = readdirSync(absolutePath) 

    files.forEach(file => {
      const path = `${absolutePath}/${file}` // concatenamos el path del directorio con el nombre del archivo/directorio
     if(validateDirectory(path)){
       const result = listFilesFromDirectory(path); // recursividad
       readFilePromises = readFilePromises.concat(result)
       console.log(`resultado directorio ${path}`, readFilePromises)
     } else if (validateMDFile(path)) { // si es md se lee el archivo
       readFilePromises.push(readFileAndSearchLinks(path)) // tiene que retornar un array de promesas o archivos??. Si es de promesas se agrega readFileAndSearchLinks antes de path
     } 
 })

 return Promise.all(readFilePromises);
};

//calculo stats
export const isStats = (absolutePath => {
  stat(absolutePath, (err, stats) => {
    if (err) {
      console.error(err);
      return;
    }
  console.log(stat)
    stats.isFile(); // true
    stats.isDirectory(); // false
    stats.isSymbolicLink(); // false
    stats.size; 
  })
})