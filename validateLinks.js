import axios from "axios" // devuelve un array de pro

export const validateLinks = (links) => {
    // console.log('flatted', links.flat(1)) // para juntar todo los arreglos en un mismo nivel (tenia arreglos dentro de arreglos)
   const result = links.flat(1).map((link) => {
    return axios
    .get(link.href) //le hace la petición http al link
    .then (result => ({...link, status: result.status, message: 'Ok'}))
    .catch (result => ({...link, status: result.status, message: 'error'}))
   });

   console.log('result validation', result)
    return Promise.all(result);
}