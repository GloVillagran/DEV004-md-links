// TEST UNITARIOS PARA ASEGURARME QUE LAS FUNCIONES FUNCIONAN CORRECTAMENTE
import { validatePath, resolveRelativePath, validateDirectory, validateMDFile, readFileAndSearchLinks } from "../api";

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
    expect(validateDirectory('../DEV004-md-links/md-files')).toBe(true)
  })

  it('should be return false if the path is not a directory', () => {
    expect(validateDirectory('../DEV004-md-links/md-files/prueba-Links.md')).toBe(false)
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
    const expected = [
      {"file": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md", "href": "https://stackoverflow.com/questions/74432875/getting-links-from-markdown-file-even-if-link-is-in-the-link-text", "text": "REGEX"}, 
      {"file": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md", "href": "https://www.freecodecamp.org/news/how-to-make-a-promise-out-of-a-callback-function-in-javascript-d8ec35d1f981/", "text": "Promise"}, 
      {"file": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md", "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject", "text": "Promise Reject"},
      {"file": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md", "href": "https://rockcontent.com/blog/broken-ks/", "text": "Discover Why Broken Links Occur and How to Resolve Them"},
      {"file": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md", "href": "https://rockcontent.com/blog/broken-ks/", "text": "Discover Why Broken Links Occur and How to Resolve Them"}]; 
 
   return expect(readFileAndSearchLinks('/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md')).resolves.toStrictEqual(expected)
})

it('should throw error', () => {
  return expect(readFileAndSearchLinks('/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba.t')).rejects.toThrow('')
})
  });
