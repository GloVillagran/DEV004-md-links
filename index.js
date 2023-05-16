import {
  validatePath,
  resolveRelativePath,
  validateDirectory,
  validateMDFile,
  readFileAndSearchLinks,
  listFilesFromDirectory,
} from './api.js'
import { validateLinks } from './validateLinks.js';
import { calculateStats } from './calculateStats.js';

export const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    if (!validatePath(path)) /* <Path exists> */ {
      reject(new Error('Dont Exist Path'));
      return;
    }
    //console.log('Path Exists');
    const absolutePath = resolveRelativePath(path); /* <is abosolute path?> */
    //console.log('Path Absolute', absolutePath);

    let links = []
    // probar si es un directorio o un archivo
    if (validateDirectory(absolutePath)) /* <is directory?> */ {
      //console.log('Is Directory');

      links = listFilesFromDirectory(absolutePath).then(result => flattenDeep(result));

    } else if (validateMDFile(absolutePath)) /*<is md?>*/ {
      //console.log('Is Md File');

      links = readFileAndSearchLinks(absolutePath);

    } else {
      reject(new Error('Invalid Path'));
      return
    }

    if (options && options.validate) { //null safe, valido que exista el objeto(options), y luego la propiedad(validate)
      links = links.then(linksToValidate => validateLinks(linksToValidate))
    }

    if(options && options.stats){ 
      const stats = links.then(linksToCalculate => calculateStats(linksToCalculate, options.validate));
      resolve(stats);
    } else {
      resolve(links)
    }
  })
}

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
const flattenDeep = (arr1) => {
  return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}

// const path = './md-files/';
// const path = '/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files';
// const path = '/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md';
// const path = '/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/README.md';


/* mdLinks(path, { validate: true, stats: false })
  .then((links) => console.log('result', links))
  .catch((error) => console.log(error)); */


