import { existsSync} from 'node:fs';
import { readFile, readdirSync } from 'node:fs';
import { resolve as resolvePath} from 'node:path';
import { statSync } from 'node:fs';


export const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => { 
    // identificar si la ruta exite.
    if (!existsSync(path)) {
      // si la ruta no existe rechaza la promesa
      reject(new Error('dont exist path'));
      return;
      
      // si es un directorio list to files, filtrar los archivos md
    } 
    console.log('path exists');
    // ver si la ruta es absoluta, si es relativa convertir
    const absolutePath = resolvePath(path); 
    console.log('path absolute', absolutePath);

      // probar si es un directorio o un archivo
    if(statSync(absolutePath).isDirectory()){
      console.log('is directory')
      // leer archivos del directorio
     const files = readdirSync(absolutePath) 
     console.log(files) //lista archivos directorios
     files.forEach(file => {
       console.log(file)
       // lee los archivos del directorio y su contenido
      readFile(`${absolutePath}/${file}`, 'utf-8', (err, result) => {
        if (err) {
          console.error(err);
          return;
        }
        // otherwise log contents
        console.log(result.toString());
         // console.log(result); // comentar para hacer test
        
        // console.log('file', file)
       
      })
  })
    } else {
      console.log('is file');
    }

    resolve()
  })
}
const path = './md-files';
// const path = '/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links';


mdLinks(path, "asdasd") // consumiendo la promesa
.then(d => console.log(d))
.catch(e => console.log(e))






// Si es ruta absoluta
/* export const callback = (err, result) => {
    const absolute = resolve(path); // resuelve si la ruta es relativa y la convierte en absoluta
    console.log('path absolute', absolute);

    if(err && err.code == 'EISDIR') {
        console.log(err)
        console.log('leyendo directorio')

        // leer si es directorio
        readdir(path, (err, files) => {
            console.log(err, files)
            files.forEach(file => {
                console.log(file)
                readFile(file, 'utf-8', (err, result) => console.log(result))
            })
        } )
    } else {
        console.log('contenido del archivo', result)
    }
}
readFile(path, 'utf8', callback); */
