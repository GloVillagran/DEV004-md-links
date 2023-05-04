import { mdLinks } from '../index.js';

describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

  /* it('devolver una promesa', () => {
     return expect(mdLinks()).resolves.toBe(typeof new Promise);
   }); */
});

describe("existPath", () => {
  it('rechazar cuando el path no existe', () => {
    return expect(
      mdLinks('gloria/cursos/rutanoexite.md')
    ).rejects.toThrow(
      'dont exist path');
  });
});


describe('resolveRelativePath', () => {
  it('ruta relativa directoy', () => {
    return expect(mdLinks('./md-files')).resolves.toStrictEqual(
      [{"filePath": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/md-files2/md-files3/prueba3.md", "result": "este es el contenido del archivo 1"}, 
      {"filePath": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/md-files2/md-files3/prueba4.md", "result": ""}, 
      {"filePath": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/md-files2/prueba2.md", "result": "este es el contenido del archivo 1"}, 
      {"filePath": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba.md", "result": "este es el contenido del archivo 1"}])
  })

  it('ruta absoluta directory', () => {
    return expect(mdLinks('/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files')).resolves.toStrictEqual(
      [{"filePath": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/md-files2/md-files3/prueba3.md", "result": "este es el contenido del archivo 1"},
      {"filePath": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/md-files2/md-files3/prueba4.md", "result": ""},
       {"filePath": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/md-files2/prueba2.md", "result": "este es el contenido del archivo 1"},
       {"filePath": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba.md", "result": "este es el contenido del archivo 1"}]
    )
  })

  it('ruta relativa file', () => {
    return expect(mdLinks('./md-files/prueba.md')).resolves.toStrictEqual({"filePath": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba.md", "result": "este es el contenido del archivo 1"})
  })

  it('ruta absoluta file', () => {
    return expect(mdLinks('/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba.md')).resolves.toStrictEqual({"filePath": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba.md", "result": "este es el contenido del archivo 1"}
    )
  })

  it('ruta absoluta file invalid path', () => {
    return expect(mdLinks('/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba.txt')).rejects.toThrow('invalid path')
  })

  it('ruta relativa file invalid path', async () => {
    await expect(mdLinks('./md-files/prueba.txt')).rejects.toThrow('invalid path')
  })
});







