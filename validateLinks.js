import axios from "axios" // devuelve un array de promesas

export const validateLinks = (links) => {
   const result = links.map((link) => {
    
    return axios
    .get(link.href) //le hace la petición http al link
    .then (result => ({...link, status: result.status, message: 'Ok'}))
    .catch(error => {
      return {...link, status: error.response.status, message: 'Fail', }
    })
   });
  //console.log('result validation', result) // muestra array de promesas pendientes
    return Promise.all(result);
}
