// TEST UNITARIOS PARA ASEGURARME QUE LAS FUNCIONES FUNCIONAN CORRECTAMENTE
import { validatePath, resolveRelativePath, validateDirectory, validateMDFile, readFileAndSearchLinks, listFilesFromDirectory } from "../api";

describe('validatePat', () => {
  it('should be exist path return true', () => {
    expect(validatePath('/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/')).toBe(true)
  })

  it('should be exist path return false', () => {
    expect(validatePath('/Users/gloriavillagranrojas/LabDEV004/MDLinks/DEV004-md-links/')).toBe(false)
  })
});

describe('resolveRelativePath', () => {
  it('should be absolute path return path absolute', () => {
    expect(resolveRelativePath('/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/')).toBe('/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/')
  })

  it('should be absolute path return false', () => {
    expect(resolveRelativePath('./DEV004-md-links/')).toBe('/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/DEV004-md-links')
  })
});

describe('validateDirectory', () => {
  it('should be return true if the path is a directory', () => {
    expect(validateDirectory('../DEV004-md-links/')).toBe(true)
  })

  it('should be return false if the path is not a directory', () => {
    expect(validateDirectory('../DEV004-md-links/md-files/prueba.md')).toBe(false)
  })
});

describe('validateMDFile', () => {
  it('should be return true if the path is a MdFile', () => {
    expect(validateMDFile('../DEV004-md-links/md-files/prueba.md')).toBe(true)
  })

  it('should be return false if the path is not a MdFile', () => {
    expect(validateMDFile('../DEV004-md-links/md-files/prueba.txt')).toBe(false)
  })
});

describe('readFileAndSearchLinks', () => {
  it('should return the file content', () => {
   return expect(readFileAndSearchLinks('/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba.txt')).resolves.toStrictEqual(
    {"filePath": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba.txt", "result": "este es el contenido del archivo 1"})
})

fit('should throw error', () => {
  return expect(readFileAndSearchLinks('/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba.t')).rejects.toThrow('error reading file')
})
  });

/* describe('listFilesFromDirectory', () => {
    fit('should be return an array of promise directory', () => {
     return expect(listFilesFromDirectory('/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/md-files2/md-files3')).toStrictEqual([{}, {}])
  })
    }); */