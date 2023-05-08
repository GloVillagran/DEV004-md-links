// TEST DE 
import { mdLinks } from '../index.js';

describe("existPath", () => {
  it('should promise rejects in the path doesnt exist', () => {
    return expect(
      mdLinks('gloria/cursos/rutanoexite.md')
    ).rejects.toThrow(
      'dont exist path');
  });
});

describe('resolveRelativePath', () => {
  it('should return an array of relative paths of the directory', () => {
    return expect(mdLinks('./md-files')).resolves.toStrictEqual(
      [{"filePath": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/md-files2/md-files3/prueba3.md", "result": "este es el contenido del archivo 1"}, 
      {"filePath": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/md-files2/md-files3/prueba4.md", "result": ""}, 
      {"filePath": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/md-files2/prueba2.md", "result": "este es el contenido del archivo 1"}, 
      {"filePath": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba.md", "result": "este es el contenido del archivo 1"}])
  })
});

describe('resolveAbsolutePath', () => {
  it('should return an array of absolute paths of the directory', () => {
    return expect(mdLinks('/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files')).resolves.toStrictEqual(
      [{"filePath": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/md-files2/md-files3/prueba3.md", "result": "este es el contenido del archivo 1"},
      {"filePath": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/md-files2/md-files3/prueba4.md", "result": ""},
       {"filePath": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/md-files2/prueba2.md", "result": "este es el contenido del archivo 1"},
       {"filePath": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba.md", "result": "este es el contenido del archivo 1"}]
    )
  })
});

describe('resolveRelativeFile', () => {
  it('should return an relative path of the file', () => {
    return expect(mdLinks('./md-files/prueba.md')).resolves.toStrictEqual({"filePath": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba.md", "result": "este es el contenido del archivo 1"})
  })
});

describe('resolveAbsoluteFile', () => {
  it('should return an absolute path of the file', () => {
    return expect(mdLinks('/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba.md')).resolves.toStrictEqual({"filePath": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba.md", "result": "este es el contenido del archivo 1"}
    )
  })
});

describe('invalid absolute path', () => {
  it('should promise rejects in the invalid path', () => {
    return expect(mdLinks('/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba.txt')).rejects.toThrow('invalid path')
  })
});

describe('path relative file invalid path', () => {
  it('should promise rejects in the invalid path', () => {
    return expect(mdLinks('./md-files/prueba.txt')).rejects.toThrow('invalid path')
  })
});






