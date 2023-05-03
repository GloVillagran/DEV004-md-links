import { existsSync} from 'node:fs';
import { readFile, readdirSync } from 'node:fs';
import { resolve, extname, isAbsolute } from 'node:path';
import { statSync } from 'node:fs';

// valida si existe la ruta
const validatePath = (path) => existsSync(path);

 // ver si la ruta es absoluta, si es relativa se convierte
const resolveRelativePath = (path) => {
   if(isAbsolute(path)) /* <is absolute path?> */ {
    return path;
   } else {
    return resolve(path);
   }
}
//valida si es directorio
const validateDirectory = (absolutePath) => statSync(absolutePath).isDirectory();

//valida si es un archivo md
const validateMDFile = (filePath) => extname(filePath) === ".md"; 

//lee el archivo y busca los links
const readFileAndSearchLinks = (filePath) => {
  readFile(filePath, 'utf-8', (err, result) => {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log({filePath, result})
    }
  })
}
//lista archivos del directorio
const listFilesFromDirectory = (absolutePath) => {
     const files = readdirSync(absolutePath) 
     files.forEach(file => {
       const path = `${absolutePath}/${file}` // concatenamos el path del directorio con el nombre del archivo/directorio
      if(validateDirectory(path)){
        listFilesFromDirectory(path); // recursividad
      } else if (validateMDFile(path)) { // si es md se lee el archivo
        readFileAndSearchLinks(path)
      } 
  })
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
       listFilesFromDirectory(absolutePath);
       resolve('ok directory')
    } else if(validateMDFile(absolutePath)) /*<is md?>*/ {
      console.log('is md file');
      resolve('ok file')
    } else {
      reject('invalid path');
    }
  })
}
const path = './md-files/';
// const path = '/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links';


mdLinks(path, "asdasd") // consumiendo la promesa
.then(result => console.log(result))
.catch(error => console.log(error))

