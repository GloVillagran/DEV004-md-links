import { existsSync, readdirSync} from 'node:fs';
import { readFile } from 'node:fs/promises';
import { resolve, extname, isAbsolute } from 'node:path';
import { statSync } from 'node:fs';

// valida si existe la ruta
const validatePath = (path) => existsSync(path);

 // ver si la ruta es absoluta, si es relativa se convierte
const resolveRelativePath = (path) => {
   if(isAbsolute(path)) /* <is absolute path?> */ {
    return path;
   } else {
    // console.log(path);
    return resolve(path);
   }
}
//valida si es directorio
const validateDirectory = (absolutePath) => statSync(absolutePath).isDirectory();

//valida si es un archivo md
const validateMDFile = (filePath) => extname(filePath) === ".md"; 

//lee el archivo y busca los links(es una promesa)
const readFileAndSearchLinks = (filePath) => {
  return readFile(filePath, 'utf-8').then(
    result =>  ({filePath, result}),
    err => err
  )
}
//lista archivos del directorio
const listFilesFromDirectory =  (absolutePath) => {
     let readFilePromises = [];
     const files = readdirSync(absolutePath) 

     files.forEach(file => {
       const path = `${absolutePath}/${file}` // concatenamos el path del directorio con el nombre del archivo/directorio
      if(validateDirectory(path)){
        const result = listFilesFromDirectory(path); // recursividad
        readFilePromises = readFilePromises.concat(result)
        console.log(`resultado directorio ${path}`, readFilePromises)
      } else if (validateMDFile(path)) { // si es md se lee el archivo
        readFilePromises.push(readFileAndSearchLinks(path))
      } 
  })

  return readFilePromises;
}

export const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => { 
    if (!validatePath(path)) /* <Path exists> */ {
      reject(new Error('dont exist path'));
      return;
    } 
    console.log('path exists');
    const absolutePath = resolveRelativePath(path); /* <is abosolute path?> */
    console.log('path absolute', absolutePath);

      // probar si es un directorio o un archivo
    if(validateDirectory(absolutePath)) /* <is directory?> */ {
      console.log('is directory');
       //leemos directorio
       resolve(Promise.all(listFilesFromDirectory(absolutePath)))
    } else if(validateMDFile(absolutePath)) /*<is md?>*/ {
      console.log('is md file');
      resolve(readFileAndSearchLinks(absolutePath));
    } else {
      console.log('aca')
      reject(new Error('invalid path'));
    }
  })
}
const path = './md-files/';
// const path = '/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links';

// para pruebas con node index.js
mdLinks(path, "asdasd") // consumiendo la promesa
.then(result => console.log('resultado mdlinks', result))
.catch(error => console.log(error))

