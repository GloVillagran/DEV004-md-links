// lee los argumentos de las lineas de comando y pasarlo a md links
import { mdLinks } from "./index.js";
mdLinks('/gloria/prueba/').then (() => {})
.catch((error) => {
    console.log(error);
});
