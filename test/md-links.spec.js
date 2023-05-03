import { mdLinks, resolveRelativePath , resolve } from '../index.js';

describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

/* it('devolver una promesa', () => {
    expect(mdLinks()).toBe(typeof Promise);
  }); */
});

describe("existPath", () => {
  it('rechazar cuando el path no existe', () => {
     return expect(
      mdLinks('gloria/cursos/rutanoexite.md')
      ).rejects.toThrow(
        'dont exist path') ;
    });
  });

describe('resolveRelativePath', () => {
  it('ruta absoluta', () => {
    return expect(typeof resolveRelativePath).toBe('undefined')
    });
  }); 

  