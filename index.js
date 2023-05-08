import {
  validatePath,
  resolveRelativePath,
  validateDirectory,
  validateMDFile,
  readFileAndSearchLinks,
  listFilesFromDirectory
} from './api.js'

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
    if (validateDirectory(absolutePath)) /* <is directory?> */ {
      console.log('is directory');
      //leemos directorio
      resolve(Promise.all(listFilesFromDirectory(absolutePath)))
    } else if (validateMDFile(absolutePath)) /*<is md?>*/ {
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

