// TEST Funcionales, prueba el funcionamiento completo de MDlinks
import { mdLinks } from '../index.js';

describe("existPath", () => {
  it('should promise rejects in the path doesnt exist', () => {
    return expect(
      mdLinks('gloria/cursos/rutanoexite.md')
    ).rejects.toThrow(
      'Dont Exist Path');
  });
});

describe('resolveRelativePath', () => {
  it('should return an array of relative paths of the directory', () => {
    const expected = [
      {"file": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/md-files2/md-files3/prueba3.md",
      "href": "https://axios-http.com/docs/handling_errors",
      "text": "Axios"},
      {"file": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/md-files2/prueba2.md",
      "href": "https://www.freecodecamp.org/news/how-to-make-a-promise-out-of-a-callback-function-in-javascript-d8ec35d1f981/",
      "text": "Promise"}
    ];

    return expect(mdLinks('./md-files/md-files2')).resolves.toStrictEqual(expected)
  })
}); 

describe('resolveAbsolutePath', () => {
  it('should return an array of absolute paths of the directory', () => {
    const expected = [
     {"file": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md", "href": "https://stackoverflow.com/questions/74432875/getting-links-from-markdown-file-even-if-link-is-in-the-link-text", "text": "REGEX"}, 
     {"file": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md", "href": "https://www.freecodecamp.org/news/how-to-make-a-promise-out-of-a-callback-function-in-javascript-d8ec35d1f981/", "text": "Promise"}, 
     {"file": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md", "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject", "text": "Promise Reject"},
     {"file": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md", "href": "https://rockcontent.com/blog/broken-ks/", "text": "Discover Why Broken Links Occur and How to Resolve Them"},
     {"file": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md", "href": "https://rockcontent.com/blog/broken-ks/", "text": "Discover Why Broken Links Occur and How to Resolve Them"}]; 


    return expect(mdLinks('/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md')).resolves.toStrictEqual(expected)
     })
  });

describe('resolveRelativeFile', () => {
  it('should return an array relative path of the file', () => {
    const expected = [
    {"file": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md", "href": "https://stackoverflow.com/questions/74432875/getting-links-from-markdown-file-even-if-link-is-in-the-link-text", "text": "REGEX"}, 
    {"file": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md", "href": "https://www.freecodecamp.org/news/how-to-make-a-promise-out-of-a-callback-function-in-javascript-d8ec35d1f981/", "text": "Promise"}, 
    {"file": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md", "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject", "text": "Promise Reject"},
    {"file": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md", "href": "https://rockcontent.com/blog/broken-ks/", "text": "Discover Why Broken Links Occur and How to Resolve Them"},
    {"file": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md", "href": "https://rockcontent.com/blog/broken-ks/", "text": "Discover Why Broken Links Occur and How to Resolve Them"}]; 
   
    return expect(mdLinks('./md-files/prueba-Links.md')).resolves.toStrictEqual(expected)
  })
});

describe('resolveAbsoluteFile', () => {
  it('should return an absolute path of the file', () => {
    const expected =  [
      {"file": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md", "href": "https://stackoverflow.com/questions/74432875/getting-links-from-markdown-file-even-if-link-is-in-the-link-text", "text": "REGEX"}, 
      {"file": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md", "href": "https://www.freecodecamp.org/news/how-to-make-a-promise-out-of-a-callback-function-in-javascript-d8ec35d1f981/", "text": "Promise"}, 
      {"file": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md", "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject", "text": "Promise Reject"},
      {"file": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md", "href": "https://rockcontent.com/blog/broken-ks/", "text": "Discover Why Broken Links Occur and How to Resolve Them"},
      {"file": "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md", "href": "https://rockcontent.com/blog/broken-ks/", "text": "Discover Why Broken Links Occur and How to Resolve Them"}]; 

    return expect(mdLinks('/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md')).resolves.toStrictEqual(expected)
    
  })
});

describe('invalid absolute path', () => {
  it('should promise rejects in the invalid path', () => {
    const expected = "Invalid Path";
    return expect(mdLinks('/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba.txt')).rejects.toThrow(expected)
  })
});

describe('path relative file invalid path', () => {
  it('should promise rejects in the invalid path', () => {
    const expected =  "Invalid Path";
    return expect(mdLinks('./md-files/prueba.txt')).rejects.toThrow(expected)
  })
});

describe('Validate Links', () => {
  it('should return links with status', () => {
    const expected = [
      {
        file: "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md",
        href: "https://stackoverflow.com/questions/74432875/getting-links-from-markdown-file-even-if-link-is-in-the-link-text",
        text: "REGEX",
        status: 200,
        message: 'Ok'
      }, 

      {
        file: "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md", 
        href: "https://www.freecodecamp.org/news/how-to-make-a-promise-out-of-a-callback-function-in-javascript-d8ec35d1f981/", 
        text: "Promise",
        status: 200,
        message: 'Ok' 
      }, 
      {
        file: "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md", 
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject", 
        text: "Promise Reject",
        status: 200,
        message: 'Ok'
      },
      {
        file: "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md",
        href: "https://rockcontent.com/blog/broken-ks/", 
        text: "Discover Why Broken Links Occur and How to Resolve Them",
        status: 404,
        message: 'Fail'
        },
      {
        file: "/Users/gloriavillagranrojas/Laboratoria DEV004/MDLinks/DEV004-md-links/md-files/prueba-Links.md", 
        href: "https://rockcontent.com/blog/broken-ks/",
        text: "Discover Why Broken Links Occur and How to Resolve Them",
        status: 404,
        message: 'Fail'
      }
    ]
    return expect(mdLinks('./md-files/prueba-Links.md', {validate: true})).resolves.toStrictEqual(expected)
  }, 10000)
}); 

describe('Calculate Stats', () => {
  it('should return total and unique', () => {
    const expected = {"total": 5, "unique": 4}
    return expect(mdLinks('./md-files/prueba-Links.md', {stats: true})).resolves.toStrictEqual(expected)
  })
});

describe('Calculate Stats', () => {
  it('should return total and unique and broken', () => {
    const expected = {"total": 5, "unique": 4, "broken": 2}
    return expect(mdLinks('./md-files/prueba-Links.md', {validate: true, stats: true})).resolves.toStrictEqual(expected)
  }, 10000)
});
