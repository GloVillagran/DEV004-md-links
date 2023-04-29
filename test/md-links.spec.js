import { mdLinks } from '../index.js';

describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

  /* it('devolver una promesa', () => {
    expect(mdLinks()).toBe(typeof Promise);
  }); */
  /* it.only('rechazar cuando el path no existe', () => {
    return mdLinks('gloria/cursos/rutanoexite.md').catch((error) => {
      expect(error).toBe('dont existe path') ;
    })
  })*/

});

describe("existPath", () => {
  it.only('rechazar cuando el path no existe', () => {
     return expect(
      mdLinks('gloria/cursos/rutanoexite.md')
      ).rejects.toThrow(
        'dont exist path') ;
    });
  });

